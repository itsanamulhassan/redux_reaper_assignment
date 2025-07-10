import PageWrapper from "@/components/common/wrapper/page-wrapper";
import { DataTable } from "@/components/dashboard/book/book-table";
import { useGetBooksQuery } from "@/store/api/bookApi";
import { useState } from "react";

export type QueryProps = {
  search: string;
  sort?: string;
  order: "asc" | "desc";
  fields?: string;
  pagination: {
    page: number;
    size: number;
    total: number | null;
    totalPage: number | null;
  };
};
const Book = () => {
  const [query, setQuery] = useState<QueryProps>({
    search: "",
    order: "asc",
    pagination: {
      size: 10,
      page: 0,
      total: null,
      totalPage: null,
    },
  });
  const { data, isLoading, isFetching } = useGetBooksQuery(query, {
    refetchOnMountOrArgChange: true,
  });
  console.log(query);

  if (isLoading || isFetching) {
    return <h1>Books loading...</h1>;
  }

  return (
    <PageWrapper>
      <DataTable data={data?.data || []} query={{ query, setQuery }} />
    </PageWrapper>
  );
};

export default Book;
