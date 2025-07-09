import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { fallback } from "@/constants/common/fallback";
import formatter from "@/helper/formatter";
import { getPropertyValues } from "@/helper/get-property-values";
import { cn } from "@/lib/utils";
import { AlertCircle, Loader } from "lucide-react";
import type { FC } from "react";
import type { ZodError } from "zod";
import PageTransition from "../effect/page-transition";
import { Button } from "@/components/ui/button";

interface SubmitErrorWrapperProps {
  errors: ZodError & any;
  loading: boolean;
  className?: string;
  submitTitle: string;
  errorTitle: string;
  direction?: "horizontal" | "vertical";
}

const Submit: FC<SubmitErrorWrapperProps> = ({
  errors: error,
  loading,
  className,
  submitTitle,
  errorTitle,
  direction = "horizontal",
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 justify-between items-center mt-6 w-full",
        className,
        direction === "vertical" && "flex-col"
      )}
    >
      <div
        className={cn(
          "flex justify-start w-full md:max-w-[300px]",
          direction === "vertical" && "justify-center"
        )}
      >
        {error && Object?.keys(error)?.length > 0 && "data" in error ? (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{errorTitle}</AlertTitle>
            <AlertDescription>
              {error?.data?.message?.toLowerCase() === "not found"
                ? fallback.error
                : error?.data?.message?.toLowerCase() === "validation failed"
                ? "Validation failed"
                : formatter({
                    type: "sentences",
                    sentences: error?.data?.message,
                  }) || fallback.error}
            </AlertDescription>
          </Alert>
        ) : (
          <>
            {error &&
              Object?.keys(error)?.length > 0 &&
              getPropertyValues<string>(error, "message").length > 0 && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>{errorTitle}</AlertTitle>
                  <AlertDescription>
                    {(getPropertyValues<string[]>(
                      error,
                      "message"
                    )[0] as string[]) || fallback.error}
                  </AlertDescription>
                </Alert>
              )}
          </>
        )}
      </div>
      <div className="flex justify-end w-1/2">
        <PageTransition>
          <Button
            className="duration-300 transition-all"
            disabled={loading}
            type="submit"
          >
            {loading && <Loader />}
            {submitTitle}
          </Button>
        </PageTransition>
      </div>
    </div>
  );
};

export default Submit;
