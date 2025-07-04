import { apiSlice } from "../rootApi/apiSlice";

const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Create new book
    createBook: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
    // Get all the books
    getBooks: builder.query({
      query: ({ search, page, sort, size, fields, order }) => ({
        url: `/books?search=${search}&page=${page || 1}&size=${
          size || 10
        }&sort=${sort || ""}&order=${order || "asc"}&fields=${fields}`,
      }),
      providesTags: ["book"],
    }),
    // Get single book by id
    getSingleBook: builder.query({
      query: (id) => ({
        url: `books/${id}`,
      }),
      providesTags: ["book"],
    }),
    // Update book by id
    updateBook: builder.mutation({
      query: ({ id, body }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["book"],
    }),
    // Delete book by id
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

export const {
  useCreateBookMutation,
  useGetBooksQuery,
  useGetSingleBookQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
