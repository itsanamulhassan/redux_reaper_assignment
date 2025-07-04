import { apiSlice } from "../rootApi/apiSlice";

const summaryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: () => ({
        url: "/summary",
      }),
      providesTags: ["summary"],
    }),
  }),
});

export const { useGetSummaryQuery } = summaryApi;
