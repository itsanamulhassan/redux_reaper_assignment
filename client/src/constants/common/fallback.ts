interface IFallbackProps {
  notFound: string;
  amount: string;
  nSlashA: string;
  quantity: string;
  error: string;
  querySize: number;
  sortOrder: "asc" | "dsc";
  photo: string;
}
export const fallback: IFallbackProps = {
  notFound: "Not found",
  amount: "0.00",
  nSlashA: "N/A",
  quantity: "0",
  error: "Something went wrong! try again",
  querySize: 999999999999999,
  sortOrder: "asc",
  photo: "../../../../public/not_available.png",
};
