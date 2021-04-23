import {
  REMOVE_BOOK,
  // SEARCH_FORM_VALUE,
  // FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  AUTH_SUCCESS,
  LOG_OUT,
  // GET_CURRENT_USER_REQUEST,
  GET_CURRENT_USER_SUCCESS,
  REGISTER_SUCCESS,
  CLEAR_ERROR,
  SEARCH_BOOK_SUCCESS,
  SEARCH_BOOK_FAILURE,
  BOOK_DETAILS_SUCCESS,
  CLEAR_SEARCH_BOOK_LIST,
  REMOVE_GENRE,
  REMOVE_GENRE2,
  REMOVE_GENRE3,
  ADD_GENRE,
  GET_GENRE_SUCCESS,
  // GET_GENRE_FAILURE
  SEND_ADD_GENRELIST,
  SEND_REMOVE_GENRELIST,
  FAILURE_MESSAGE,
  ADD_FAVORITE,
  ADD_BOOK_SUCCESS,
  CLOSE_SUCCESS_MESSAGE,
  REQUEST_START,
  REQUEST_END,
  BOOK_BORROW_SUCCESS,
  USER_EMAIL_SEARCH_SUCCESS,
  USER_EMAIL_SEARCH_FAILURE,
  REMOVE_FAVORITE,
} from "../actions";

//initial store
const initialStore = {
  books: [],
  bookDetails: [],
  searchbooks: [],
  genreList: [],
  genreRemoved: [],
  genreNews: [],
  totalbooks: 0,
  searchUsers: [],
  userBorrow: [],
  userFavorites: [],
  user: {
    userinfo: {
      id: 0,
      favoriteBooks: [],
      borrows: [],
      role: [
        {
          id: 0,
          name: "GUEST",
        },
      ],
    },
    userToken: null,
    isLogin: false,
  },
  loader: false,
  searchFormValue: "",
  showErrors: null,
  succesMessage: false,
};

//  const newStore={
//   test:[]
// }

// export const newreducer=(state=newStore,action)=>{
//   return state;
// }

//reducer(old-state,action) return update or old state
export const reducer = (state = initialStore, action) => {
  if (action.type === REQUEST_START) {
    return {
      ...state,
      loader: true,
    };
  }
  if (action.type === REQUEST_END) {
    return {
      ...state,
      loader: false,
    };
  }

  if (action.type === CLOSE_SUCCESS_MESSAGE) {
    return {
      ...state,
      succesMessage: false,
    };
  }
  if (action.type === ADD_BOOK_SUCCESS) {
    return {
      ...state,
      succesMessage: "The book has been added to the database!",
      showErrors: null,
    };
  }

  if (action.type === ADD_FAVORITE) {
    return {
      ...state,
      succesMessage: `${action.props.title} was liked!`,
      userFavorites: [...state.userFavorites, action.props],
    };
  }
  if (action.type === REMOVE_FAVORITE) {
    return {
      ...state,
      succesMessage: `${action.props.title} was disliked!`,
      userFavorites: [
        ...state.userFavorites.filter((item) => item.id !== action.props.id),
      ],
    };
  }
  if (action.type === BOOK_BORROW_SUCCESS) {
    return {
      ...state,
      succesMessage: `${action.props.title} has been borrowed!`,
      userBorrow: [...state.userBorrow, action.props],
    };
  }
  if (action.type === FAILURE_MESSAGE) {
    if (action.err.response === undefined) {
      alert("no backend connect");
      return {...state, loader: true};
    }
    return {
      ...state,
      showErrors: action.err.response.data.message,
      loader: false,
    };
  }

  if (action.type === ADD_GENRE) {
    // console.log(action.payload);
    return {
      ...state,
      genreNews: [...state.genreNews, action.payload.genre],
    };
  }
  if (action.type === REMOVE_GENRE) {
    return {
      ...state,
      genreList: [
        ...state.genreList.filter((item) => item.id !== action.payload.item.id),
      ],
      genreRemoved: [...state.genreRemoved, action.payload.item],
    };
  }
  if (action.type === REMOVE_GENRE2) {
    return {
      ...state,
      genreRemoved: [
        ...state.genreRemoved.filter(
          (item) => item.id !== action.payload.item.id
        ),
      ],
      genreList: [...state.genreList, action.payload.item],
    };
  }
  if (action.type === REMOVE_GENRE3) {
    return {
      ...state,
      genreNews: [
        ...state.genreNews.filter((item) => item !== action.payload.item),
      ],
    };
  }
  if (action.type === SEND_REMOVE_GENRELIST) {
    return {
      ...state,
      genreRemoved: [],
    };
  }
  if (action.type === SEND_ADD_GENRELIST) {
    return {
      ...state,
      genreNews: [],
      showErrors: null,
    };
  }
  if (action.type === CLEAR_SEARCH_BOOK_LIST) {
    return {
      ...state,
      searchbooks: [],
    };
  }
  if (action.type === BOOK_DETAILS_SUCCESS) {
    return {
      ...state,
      bookDetails: action.payload.data,
    };
  }
  if (action.type === SEARCH_BOOK_FAILURE) {
    return {
      ...state,
      searchbooks: [],
    };
  }
  if (action.type === SEARCH_BOOK_SUCCESS) {
    return {
      ...state,
      searchbooks: action.payload.data,
    };
  }
  if (action.type === USER_EMAIL_SEARCH_FAILURE) {
    return {
      ...state,
      searchUsers: [],
      showErrors: action.err.response.data.message,
    };
  }
  if (action.type === USER_EMAIL_SEARCH_SUCCESS) {
    return {
      ...state,
      searchUsers: action.payload.data,
    };
  }
  if (action.type === FETCH_BOOKS_SUCCESS) {
    // console.log(action.payload.data);
    return {
      ...state,
      books: action.payload.data,
      totalbooks: action.payload.data.length,
    };
  }
  if (action.type === GET_GENRE_SUCCESS) {
    // console.log(action.payload.data);
    return {
      ...state,
      genreList: action.payload.data,
      succesMessage: "Genre list updated!",
    };
  }
  if (action.type === AUTH_SUCCESS) {
    localStorage.setItem("loginToken", action.payload.data.jwtToken);
    localStorage.setItem("id", action.payload.data.id);
    return {
      ...state,
      succesMessage: `Welcome ${action.payload.data.firstName}!`,
      user: {
        userinfo: action.payload.data,
        userToken: action.payload.data.jwtToken,
        isLogin: true,
      },
    };
  }
  if (action.type === LOG_OUT) {
    localStorage.removeItem("loginToken");
    localStorage.removeItem("id");
    return {
      ...state,
      succesMessage: `You have been logged out!`,
      user: {
        userinfo: {
          id: 0,
          favoriteBooks: [],
          borrows: [],
        },
        userToken: null,
        isLogin: false,
      },
    };
  }
  if (action.type === GET_CURRENT_USER_SUCCESS) {
    const borrowedbooks = action.payload.data.borrows.map((item) => item.book);
    return {
      ...state,
      user: {
        userinfo: action.payload.data,
        userToken: action.payload.data.id,
        isLogin: true,
      },
      userBorrow: borrowedbooks,
      userFavorites: action.payload.data.favoriteBooks,
    };
  }
  if (action.type === REGISTER_SUCCESS) {
    localStorage.setItem("loginToken", action.payload.data.token);
    return {
      ...state,
      succesMessage: `Account created on email  ${action.payload.data.email}!`,
      user: {
        userinfo: action.payload.data,
        userToken: action.payload.data.id,
        isLogin: true,
      },
    };
  }

  if (action.type === CLEAR_ERROR) {
    return {
      ...state,
      showErrors: null,
    };
  }
  //  if(action.type===GET_TOTALS){
  //    return {
  //      ...state,
  //      totalbooks:state.books.length
  //    }
  //  }
  if (action.type === REMOVE_BOOK) {
    return {
      ...state,
      books: state.books.filter((item) => item.id !== action.payload.id),
      totalbooks: state.books.length - 1,
    };
  }
  //  if(action.type===SEARCH_FORM_VALUE){
  //  console.log(action.payload.searchFormValue);
  // return{
  //   ...state,
  //   books:state.books.title.include(action.payload.searchFormValue)
  // }
  //  }

  return state;
};
