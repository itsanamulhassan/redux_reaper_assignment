import { useState, type FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  createBookSchema as updateBookSchema,
  type CreateBookProps as UpdateBookProps,
  type GenreEnumProps,
} from "@/schemas/book";
import { InputWrapper } from "@/components/common/wrapper/input-wrapper";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Submit from "@/components/common/form/submit";
import PhotoCropper from "@/components/common/wrapper/photo-crop-wrapper";
import { useUpdateBookMutation } from "@/store/api/bookApi";
import type { ResponseProps } from "@/types/public";
import { toast } from "sonner";
import type { BookProps } from "./book-table";

interface UpdateBookCompProps {
  data: BookProps;
}

const UpdateBook: FC<UpdateBookCompProps> = ({ data }) => {
  const {
    _id,
    title,
    description,
    available,
    favorite,
    cover,
    genre,
    copies,
    isbn,
    author,
  } = data as BookProps;

  const {
    register,
    setValue,
    setError,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateBookProps>({
    resolver: zodResolver(updateBookSchema),
    defaultValues: {
      title,
      description,
      available,
      favorite,
      cover,
      genre,
      copies,
      isbn,
      author,
    },
  });

  const [updateBook, { isLoading: updateBookLoading, error: updateBookError }] =
    useUpdateBookMutation({});

  const [photo, setPhoto] = useState<string | undefined>(cover || "");

  const onSubmit = async (data: UpdateBookProps) => {
    const response: ResponseProps<UpdateBookProps> = await updateBook({
      id: _id,
      body: data,
    }).unwrap();
    if (response.success) {
      toast.message(response.message, {
        description: `${response.data.title} has been successfully updated. Please review the books list to confirm its addition.`,
      });
      //   setOpenUpdateBook(false);
    } else {
      toast.message(response.message, {
        description: `An error occurred while updating the book. We apologize for the inconvenience. Please try again.`,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <InputWrapper
          labelFor="title"
          label="Enter the book title ✻"
          error={errors.title?.message}
        >
          <Input
            //   defaultValue={data.}
            id="title"
            type="text"
            {...register("title")}
            placeholder="Enter the book title"
          />
        </InputWrapper>
        <InputWrapper
          labelFor="author"
          label="Enter the book author ✻"
          error={errors.author?.message}
        >
          <Input
            id="author"
            {...register("author")}
            placeholder="Enter the book author"
          />
        </InputWrapper>
        <InputWrapper
          className="col-span-1 lg:col-span-2"
          labelFor="description"
          label="Enter the book description"
          error={errors.description?.message}
        >
          <Textarea
            id="description"
            {...register("description")}
            placeholder="Enter the book description"
          />
        </InputWrapper>
        <InputWrapper
          labelFor="genre"
          label="Select the book's genre"
          error={errors.genre?.message}
        >
          <Select
            value={watch("genre") || ""}
            onValueChange={(value: GenreEnumProps) => {
              setValue("genre", value);
              setError("genre", { type: "custom", message: "" });
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select book's genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="FICTION">Fiction</SelectItem>
              <SelectItem value="NON_FICTION">Non-fiction</SelectItem>
              <SelectItem value="SCIENCE">Science</SelectItem>
              <SelectItem value="HISTORY">History</SelectItem>
              <SelectItem value="BIOGRAPHY">Biography</SelectItem>
              <SelectItem value="FANTASY">Fantasy</SelectItem>
            </SelectContent>
          </Select>
        </InputWrapper>
        <InputWrapper
          labelFor="available"
          label="Select the book's availability status"
          error={errors.available?.message}
        >
          <Select
            value={watch("available") ? "Yes" : "No"}
            onValueChange={(value: "Yes" | "No") => {
              if (watch("copies") > 0) {
                setValue("available", value === "Yes" && true);
                setError("available", { type: "custom", message: "" });
                setError("copies", { type: "custom", message: "" });
              } else {
                setValue("available", false);
                setError("copies", {
                  type: "custom",
                  message: "Copies are not sufficient for switching available",
                });
              }
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select the book's availability status " />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Available</SelectItem>
              <SelectItem value="No">Not available</SelectItem>
            </SelectContent>
          </Select>
        </InputWrapper>

        <InputWrapper
          labelFor="favorite"
          label="Select the book's wishlist status"
          error={errors.favorite?.message}
        >
          <Select
            value={watch("favorite") ? "Yes" : "No"}
            onValueChange={(value: "Yes" | "No") => {
              setValue("favorite", value === "Yes" ? true : false);
              setError("favorite", { type: "custom", message: "" });
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select the book's wishlist status " />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Favorite</SelectItem>
              <SelectItem value="No">Not favorite</SelectItem>
            </SelectContent>
          </Select>
        </InputWrapper>

        <InputWrapper
          labelFor="isbn"
          label="Enter the book ISBN ✻"
          error={errors.isbn?.message}
        >
          <Input
            id="isbn"
            type="text"
            {...register("isbn")}
            placeholder="Enter the book ISBN"
          />
        </InputWrapper>
        <InputWrapper
          labelFor="copies"
          label="Enter the book copies ✻"
          error={errors.copies?.message}
        >
          <Input
            id="copies"
            type="number"
            {...register("copies", { valueAsNumber: true })}
            placeholder="Enter the book copies"
          />
        </InputWrapper>
        <InputWrapper labelFor="cover" label="Choose the book cover">
          <PhotoCropper
            // ratio={3 / 4}
            id="avatar"
            setPhoto={(value: string | undefined) => {
              setPhoto(value);
              setValue("cover", value);
              setError("cover", { type: "", message: "" });
            }}
            photo={photo}
            placeholder="Choose the book cover "
          />
        </InputWrapper>
      </div>
      <div>
        <Submit
          loading={updateBookLoading}
          submitTitle="Update book"
          errors={errors || updateBookError}
          errorTitle="Update book error"
        />
      </div>
    </form>
  );
};

export default UpdateBook;
