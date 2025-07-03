import { Button } from "@/components/ui/button";
import type { ErrorProps } from "@/types/public";
import { Link, useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError() as Partial<ErrorProps>;

  return (
    <section className="h-screen w-screen flex lg:flex-row flex-col justify-center items-center ">
      <div className="w-full lg:w-1/2 flex justify-center items-center my-6 lg:mb-0 flex-col">
        <img className="w-[200px] md:w-[300px]" src="/error.svg" alt="" />
        <div className="flex items-center mt-3 space-x-2">
          {error?.status && (
            <h3 className="text-destructive text-lg">{error?.status}</h3>
          )}
          {error?.statusText && (
            <h3 className="text-destructive text-lg">{error?.statusText}</h3>
          )}
        </div>
        {error?.error?.message && (
          <p className="text-sm text-destructive">
            {error?.error?.message.toLowerCase()}
          </p>
        )}
      </div>
      <div className="w-full lg:w-1/2 bg-secondary h-full lg:h-screen  flex flex-col justify-center items-center">
        <h4 className="text-secondary-foreground text-xl lg:text-3xl font-[300] text-center leading-7 lg:leading-10 tracking-tighter">
          "Oops! Something went wrong. <br /> Please try again later."
        </h4>
        <div className="flex gap-x-2 mt-8">
          <Link to="/">
            <Button className="text-secondary-foreground" variant="link">
              Back to home
            </Button>
          </Link>
          <Link to="/">
            <Button className="text-secondary-foreground" variant="link">
              Back to previous page
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
