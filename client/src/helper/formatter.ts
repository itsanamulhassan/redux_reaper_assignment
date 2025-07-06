import { fallback } from "@/constants/common/fallback";
import moment from "moment";

type FormatType =
  | "amount"
  | "date"
  | "name"
  | "time"
  | "date&time"
  | "sentences"
  | "words";

interface FormatOptions {
  type: FormatType;
  amount?: number | string;
  dateTime?: string | Date;
  firstName?: string;
  lastName?: string;
  sentences?: string;
  words?: string;
}

const formatter = ({
  type,
  amount,
  dateTime,
  firstName,
  lastName,
  sentences,
  words,
}: FormatOptions): string => {
  switch (type) {
    case "amount": {
      if (amount == null) return fallback.amount + "৳";
      const value = +amount;
      return !isNaN(value) ? value.toFixed(2) + "৳" : fallback.amount + "৳";
    }
    case "date": {
      return dateTime
        ? moment(dateTime).format("DD MMMM, YYYY")
        : fallback.notFound;
    }
    case "name": {
      const fullName = lastName ? `${firstName} ${lastName}` : firstName;
      return fullName ? capitalizeEveryWord(fullName) : fallback.notFound;
    }
    case "time": {
      return dateTime
        ? new Date(dateTime)?.toLocaleTimeString()
        : fallback.notFound;
    }
    case "date&time": {
      return dateTime
        ? moment(dateTime).format("DD MMMM, YYYY, hh:mm A")
        : fallback.notFound;
    }
    case "sentences": {
      return sentences
        ? capitalizeEverySentences(sentences)
        : fallback.notFound;
    }
    case "words": {
      return words ? capitalizeEveryWord(words) : fallback.notFound;
    }

    default: {
      return "Invalid format type";
    }
  }
};

const capitalizeEverySentences = (text: string): string => {
  const sentences = text?.toLowerCase()?.split(/([.?!]\s+)/) || [];
  return sentences
    .map((sentence, index) => {
      if (index % 2 === 0) {
        return sentence?.charAt(0)?.toUpperCase() + sentence?.slice(1);
      }
      return sentence;
    })
    .join("");
};

const capitalizeEveryWord = (sentence: string) => {
  // Split the sentence into words
  const words = (sentence && sentence?.toLowerCase()?.split(" ")) || [];
  // Capitalize the first letter of each word
  const capitalizedWords = words?.map(
    (word: string) => word?.charAt(0)?.toUpperCase() + word?.slice(1)
  );
  // Join the capitalized words back into a sentence
  return capitalizedWords?.join(" ");
};

export default formatter;
