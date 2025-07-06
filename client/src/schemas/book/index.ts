import * as z from "zod";

export type GenreEnumProps =
  | "FICTION"
  | "NON_FICTION"
  | "SCIENCE"
  | "HISTORY"
  | "BIOGRAPHY"
  | "FANTASY";

export const genreEnum = [
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
] as const;

export const createBookSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required." })
    .max(100, { message: "Title cannot exceed 100 characters." }),

  author: z
    .string()
    .min(1, { message: "Author is required." })
    .max(100, { message: "Author name cannot exceed 100 characters." }),

  genre: z.enum(genreEnum, {
    errorMap: () => ({ message: "Please provide a valid genre." }),
  }),

  isbn: z
    .string()
    .min(10, { message: "ISBN must be at least 10 characters long." })
    .max(13, { message: "ISBN must be at most 13 characters long." }),

  description: z.string().default(""),

  copies: z
    .number()
    .positive({ message: "Number of book copies must be a positive number." }),

  available: z.boolean().default(true),
  cover: z.string().default(""),
  favorite: z.boolean().default(false),
});

export type CreateBookProps = z.input<typeof createBookSchema>;
