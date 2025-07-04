import PageWrapper from "@/components/common/wrapper/page-wrapper";
import { DataTable } from "@/components/dashboard/book/book-table";
import { useGetBooksQuery } from "@/store/api/bookApi";
const Book = () => {
  const { data, isLoading: booksLoading } = useGetBooksQuery({});

  if (booksLoading) {
    return <h1>Books loading</h1>;
  }
  return (
    <PageWrapper>
      <DataTable data={data?.data || []} />
    </PageWrapper>
  );
};

export default Book;
