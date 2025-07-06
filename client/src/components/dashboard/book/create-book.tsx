import { useState, type FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  createBookSchema,
  type CreateBookProps,
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
import { useCreateBookMutation } from "@/store/api/bookApi";

interface Props {
  type?: unknown;
}

const CreateBook: FC<Props> = () => {
  const {
    register,
    setValue,
    setError,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateBookProps>({
    resolver: zodResolver(createBookSchema),
    defaultValues: {
      available: true,
      favorite: false,
    },
  });

  const [createBook, { isLoading: createBookLoading, error: createBookError }] =
    useCreateBookMutation({});

  const [photo, setPhoto] = useState<string | undefined>();

  const onSubmit = async (data: CreateBookProps) => {
    const response = createBook(data);
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-2">
        <InputWrapper
          labelFor="title"
          label="Enter the book title ✻"
          error={errors.title?.message}
        >
          <Input
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
          className="col-span-2"
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
          error={errors.author?.message}
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
            ratio={3 / 4}
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
          loading={createBookLoading}
          submitTitle="Create book"
          errors={errors || createBookError}
          errorTitle="Create book error"
        />
      </div>
    </form>
  );
};

export default CreateBook;
