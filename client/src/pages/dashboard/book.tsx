import { DataTable } from "@/components/data-table";
import data from "../../app/dashboard/data.json";
import PageWrapper from "@/components/common/wrapper/page-wrapper";
const Book = () => {
  return (
    <PageWrapper>
      <DataTable data={data} />
    </PageWrapper>
  );
};

export default Book;
