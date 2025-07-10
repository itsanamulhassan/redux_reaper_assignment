import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// const baseUrl = "https://library-management-system-theta-wheat.vercel.app/api";
const baseUrl = "http://localhost:8888/api";

const baseQuery = fetchBaseQuery({
  baseUrl,
});
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: baseQuery,
  endpoints: () => ({}),
  tagTypes: ["book", "borrow", "summary"],
});
