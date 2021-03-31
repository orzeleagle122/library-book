import {
  REMOVE_BOOK,
  // SEARCH_FORM_VALUE,
  // FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  // FETCH_BOOKS_FAILURE,
  AUTH_SUCCESS,
  LOG_OUT,
  // GET_CURRENT_USER_REQUEST,
  GET_CURRENT_USER_SUCCESS,
  // GET_CURRENT_USER_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  AUTH_FAILURE,
  CLEAR_ERROR,
  SEARCH_BOOK_SUCCESS,
  SEARCH_BOOK_FAILURE,
  BOOK_DETAILS_FAILURE,
  BOOK_DETAILS_SUCCESS,
  MIN_THREE_CHAR,
  REMOVE_GENRE,
  REMOVE_GENRE2,
  REMOVE_GENRE3,
  ADD_GENRE,
  // GET_GENRE_REQUEST,
  GET_GENRE_SUCCESS,
  // GET_GENRE_FAILURE
  SEND_ADD_GENRELIST,
  SEND_REMOVE_GENRELIST,
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
  user: {
    userinfo: {
      id: 0,
      favoriteBooks: [],
      borrows: [],
    },
    userToken: null,
    isLogin: false,
  },
  loading: true,
  searchFormValue: "",
  showErrors: null,
};

//  const newStore={
//   test:[]
// }

// export const newreducer=(state=newStore,action)=>{
//   return state;
// }

//reducer(old-state,action) return update or old state
export const reducer = (state = initialStore, action) => {
  if (action.type === ADD_GENRE) {
    console.log(action.payload);
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
    };
  }
  if (action.type === MIN_THREE_CHAR) {
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
  if (action.type === BOOK_DETAILS_FAILURE) {
    return {
      ...state,
      bookDetails: action.err.response.data,
    };
  }
  if (action.type === BOOK_DETAILS_FAILURE) {
    return {
      ...state,
      // bookDetails: action.payload.data
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
  if (action.type === FETCH_BOOKS_SUCCESS) {
    // console.log(action.payload.data);
    return {
      ...state,
      books: action.payload.data,
      totalbooks: action.payload.data.length,
    };
  }
  if (action.type === GET_GENRE_SUCCESS) {
    console.log(action.payload.data);
    return {
      ...state,
      genreList: action.payload.data,
    };
  }
  if (action.type === AUTH_SUCCESS) {
    localStorage.setItem("loginToken", action.payload.data.id);
    return {
      ...state,
      user: {
        userinfo: action.payload.data,
        userToken: action.payload.data.id,
        isLogin: true,
      },
    };
  }
  if (action.type === LOG_OUT) {
    localStorage.removeItem("loginToken");
    return {
      ...state,
      user: {
        userinfo: null,
        userToken: null,
        isLogin: false,
      },
    };
  }
  if (action.type === GET_CURRENT_USER_SUCCESS) {
    return {
      ...state,
      user: {
        userinfo: action.payload.data,
        userToken: action.payload.data.id,
        isLogin: true,
      },
    };
  }
  if (action.type === REGISTER_SUCCESS) {
    localStorage.setItem("loginToken", action.payload.data.token);
    return {
      ...state,
      user: {
        userinfo: action.payload.data,
        userToken: action.payload.data.id,
        isLogin: true,
      },
    };
  }
  if (action.type === REGISTER_FAILURE) {
    return {
      ...state,
      showErrors: action.err.response.data.details,
    };
  }
  if (action.type === AUTH_FAILURE) {
    return {
      ...state,
      showErrors: action.err.response.data.details,
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
