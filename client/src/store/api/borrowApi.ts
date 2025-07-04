import { apiSlice } from "../rootApi/apiSlice";

const borrowApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Create borrow book
    createBorrow: builder.mutation({
      query: (body) => ({
        url: "/borrow",
        method: "POST",
        body,
      }),
      invalidatesTags: ["borrow"],
    }),
  }),
});

export const { useCreateBorrowMutation } = borrowApi;
