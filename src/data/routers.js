export const routers = {
  home: "/",
  account: "/account",
  borrowed: "/borrowed",
  search: "/search",
  // paginacja
  searchPagination: "/search/:id",
  login: "/login",
  register: "/register",
  favorite: "/favorite",
  book: "/book/:id/:title",
  user: "/user",

  // admin routers
  addBook: "/admin/add",
  addGenre: "/admin/genre",
  changeStatus: "/admin/status",
  userborrowed: "/admin/user/:user",
};
