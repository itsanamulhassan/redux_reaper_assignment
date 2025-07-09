import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useRef, type ChangeEvent, type FC } from "react";
type CropState = {
  step: string;
  restore: string;
  [key: string]: unknown;
};

interface FileInputProps {
  setPhoto: (photo: string) => void;
  id?: string;
  photo: string | undefined;
  setCropState: (cropState: any | unknown) => void;
  placeholder?: string;
}
const FileInput: FC<FileInputProps> = ({
  setPhoto,
  id,
  photo,
  setCropState,
  placeholder,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = function () {
        if (reader.result) {
          setPhoto(reader.result as string);
          setCropState((prevState: CropState) => ({
            ...prevState,
            step: photo !== reader.result ? "crop" : "done",
            restore: reader.result as string | ArrayBuffer | null,
          }));
        }
      };
    }
  };
  const onChooseImg = () => {
    inputRef?.current?.click();
  };
  return (
    <div>
      <input
        accept="image/*"
        type="file"
        name="file"
        id={id}
        onChange={handleOnChange}
        className="hidden"
        ref={inputRef}
      />

      <Button
        onClick={onChooseImg}
        type="button"
        size="sm"
        variant="outline"
        className="relative h-[36px] text-muted-foreground font-normal mt-[10px] w-full justify-start"
      >
        {photo ? photo.slice(0, 25) : placeholder || "Choose Photo"}

        {photo && (
          <HoverCard>
            <HoverCardTrigger className="absolute top-1/2 border bg-success/50 text-success-foreground py-0.5 px-1.5 rounded-sm -translate-y-1/2 right-1">
              Done
            </HoverCardTrigger>
            <HoverCardContent
              className="w-[150px] h-[150px] justify-center flex items-center"
              side="left"
            >
              <img className="w-full rounded-md" src={photo} alt="" />
            </HoverCardContent>
          </HoverCard>
        )}
      </Button>
    </div>
  );
};

export default FileInput;
