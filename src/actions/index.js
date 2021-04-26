import axios from "axios";

export const REMOVE_BOOK = "REMOVE_BOOK";

export const SEARCH_BOOK_REQUEST = "SEARCH_BOOK_REQUEST";
export const SEARCH_BOOK_SUCCESS = "SEARCH_BOOK_SUCCESS";
export const SEARCH_BOOK_FAILURE = "SEARCH_BOOK_FAILURE";
export const CLEAR_SEARCH_BOOK_LIST = "CLEAR_SEARCH_BOOK_LIST";

export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILURE = "AUTH_FAILURE";

export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";

export const LOG_OUT = "LOG_OUT";

export const GET_CURRENT_USER_REQUEST = "GET_CURRENT_USER_REQUEST";
export const GET_CURRENT_USER_SUCCESS = "GET_CURRENT_USER_SUCCESS";
export const GET_CURRENT_USER_FAILURE = "GET_CURRENT_USER_FAILURE";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const CLEAR_ERROR = "CLEAR_ERROR";

export const ADD_BOOK_REQUEST = "ADD_BOOK_REQUEST";
export const ADD_BOOK_SUCCESS = "ADD_BOOK_SUCCESS";
export const ADD_BOOK_FAILURE = "ADD_BOOK_FAILURE";

export const BOOK_DETAILS_REQUEST = "BOOK_DETAILS_REQUEST";
export const BOOK_DETAILS_SUCCESS = "BOOK_DETAILS_SUCCESS";
export const BOOK_DETAILS_FAILURE = "BOOK_DETAILS_FAILURE";

export const GET_GENRE_REQUEST = "GET_GENRE_REQUEST";
export const GET_GENRE_SUCCESS = "GET_GENRE_SUCCESS";
export const GET_GENRE_FAILURE = "GET_GENRE_FAILURE";
export const SEND_REMOVE_GENRELIST = "SEND_REMOVE_GENRELIST";
export const SEND_ADD_GENRELIST = "SEND_ADD_GENRELIST";
export const REMOVE_GENRE = "REMOVE_GENRE";
export const REMOVE_GENRE2 = "REMOVE_GENRE2";
export const REMOVE_GENRE3 = "REMOVE_GENRE3";
export const ADD_GENRE = "ADD_GENRE";

export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const ADD_FAVORITE_REQ = "ADD_FAVORITE_REQ";

export const FAILURE_MESSAGE = "FAILURE_MESSAGE";
export const CLOSE_SUCCESS_MESSAGE = "CLOSE_SUCCESS_MESSAGE";

export const REQUEST_START = "REQUEST_START";
export const REQUEST_END = "REQUEST_END";

export const BOOK_BORROW_REQUEST = "BOOK_BORROW_REQUEST";
export const BOOK_BORROW_SUCCESS = "BOOK_BORROW_SUCCESS";
export const BOOK_BORROW_FAILURE = "BOOK_BORROW_FAILURE";

export const USER_EMAIL_SEARCH_SUCCESS = "USER_EMAIL_SEARCH_SUCCESS";
export const USER_EMAIL_SEARCH_FAILURE = "USER_EMAIL_SEARCH_FAILURE";

export const CHANGE_BORROW_STATUS = "CHANGE_BORROW_STATUS";

export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_FAILURE = "EDIT_USER_FAILURE";

// export const API = "http://localhost:8080/api";
export const API = "https://spring-react-library-service.herokuapp.com/api";

export const editUser = (
  id,
  firstName,
  lastName,
  email,
  password
) => async () => {
  return axios.put(API + `/user/update/${id}`, {
    firstName,
    lastName,
    email,
    password,
  });
};

export const changeStatus = (id, status) => async (dispatch) => {
  const key = localStorage.getItem("loginToken");
  const headers = {
    Authorization: key,
  };
  dispatch({type: CHANGE_BORROW_STATUS});
  return axios.put(API + `/borrow/auth/${id}?status=${status}`, {}, {headers});
};

export const closeSuccessMessage = () => {
  return {
    type: CLOSE_SUCCESS_MESSAGE,
  };
};

export const requestStart = () => {
  return {
    type: REQUEST_START,
  };
};
export const requestEnd = () => {
  return {
    type: REQUEST_END,
  };
};

export const removeFavorite = (user_id, props) => async (dispatch) => {
  const key = localStorage.getItem("loginToken");
  const headers = {
    Authorization: key,
  };
  return axios
    .delete(API + `/user/auth/favorite/subtract/${user_id}/${props.id}`, {
      headers,
    })
    .then((payload) => {
      dispatch({
        type: REMOVE_FAVORITE,
        payload,
        props,
      });
    });
};

export const addFavorite = (user_id, props) => async (dispatch) => {
  const key = localStorage.getItem("loginToken");
  const headers = {
    Authorization: key,
  };
  return axios
    .put(API + `/user/auth/favorite/add/${user_id}/${props.id}`, {}, {headers})
    .then((payload) => {
      dispatch({
        type: ADD_FAVORITE,
        payload,
        props,
      });
    });
};

export const borrowBook = (user, props) => async (dispatch) => {
  dispatch({
    type: BOOK_BORROW_REQUEST,
  });
  const userObj = {
    id: user.id,
  };
  const bookObj = {
    id: props.id,
  };
  const key = localStorage.getItem("loginToken");
  const headers = {
    Authorization: key,
  };
  return axios
    .post(
      API + "/borrow/auth/add",

      {
        user: userObj,
        book: bookObj,
      },
      {headers}
    )
    .then((payload) => {
      dispatch({
        type: BOOK_BORROW_SUCCESS,
        payload,
        props,
      });
    });
};

export const addGenre = (genre) => {
  return {
    type: ADD_GENRE,
    payload: {
      genre,
    },
  };
};

export const removeGenre = (item) => {
  return {
    type: REMOVE_GENRE,
    payload: {
      item,
    },
  };
};

// usuwanie usunietych gatunków
export const removeGenre2 = (item) => {
  return {
    type: REMOVE_GENRE2,
    payload: {
      item,
    },
  };
};
// usuwanie dodanych gatunków
export const removeGenre3 = (item) => {
  return {
    type: REMOVE_GENRE3,
    payload: {
      item,
    },
  };
};

export const removeaddfetchGenre = (idList, genres) => async (dispatch) => {
  const key = localStorage.getItem("loginToken");
  const headers = {
    Authorization: key,
  };
  const ids = idList.map((item) => item.id);
  const config = {
    headers,
    data: {ids},
  };
  dispatch({
    type: SEND_REMOVE_GENRELIST,
  });
  dispatch({
    type: SEND_ADD_GENRELIST,
  });
  dispatch({
    type: REQUEST_START,
  });
  return axios
    .delete(API + "/bookGenre/auth/delete", {...config})
    .then(async () => {
      return axios.post(
        API + "/bookGenre/auth/add",
        {
          genres,
        },
        {headers}
      );
    })
    .then(async () => {
      return axios
        .get(API + "/bookGenre/auth/search/all", {headers})
        .then((payload) => {
          dispatch({
            type: GET_GENRE_SUCCESS,
            payload,
          });
        });
    })
    .catch((err) => {
      dispatch({
        type: FAILURE_MESSAGE,
        err,
      });
    })
    .finally(() =>
      dispatch({
        type: REQUEST_END,
      })
    );
};

// export const sendRemoveListGenre = (idList) => async (dispatch) => {
//   const key = localStorage.getItem("loginToken");
//   const headers = {
//     Authorization: key,
//   };
//   const ids = idList.map((item) => item.id);
//   dispatch({
//     type: SEND_REMOVE_GENRELIST,
//   });
//   return axios.delete(API + "/bookGenre/auth/delete", {data: {ids}}, {headers});
// };

export const sendNewsListGenre = (genres) => async (dispatch) => {
  const key = localStorage.getItem("loginToken");
  const headers = {
    Authorization: key,
  };
  dispatch({
    type: SEND_ADD_GENRELIST,
  });
  return axios.post(
    API + "/bookGenre/auth/add",
    {
      genres,
    },
    {headers}
  );
};

export const fetchGenres = () => async (dispatch) => {
  const key = localStorage.getItem("loginToken");
  const headers = {
    Authorization: key,
  };
  dispatch({
    type: REQUEST_START,
  });
  return axios
    .get(API + "/bookGenre/auth/search/all", {headers})
    .then((payload) => {
      dispatch({
        type: GET_GENRE_SUCCESS,
        payload,
      });
    })
    .catch((err) => {
      dispatch({
        type: FAILURE_MESSAGE,
        err,
      });
    })
    .finally(() =>
      dispatch({
        type: REQUEST_END,
      })
    );
};

export const fetchBooks = (number) => async (dispatch) => {
  dispatch({
    type: FETCH_BOOKS_REQUEST,
  });
  return axios
    .get(API + "/book/search/random", {params: {number}})
    .then((payload) => {
      dispatch({
        type: FETCH_BOOKS_SUCCESS,
        payload,
      });
    })
    .catch((err) => {
      dispatch({
        type: FAILURE_MESSAGE,
        err,
      });
    });
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};

export const removeBook = (id) => {
  return {
    type: REMOVE_BOOK,
    payload: {
      id,
    },
  };
};

// export const getUserLoginAction = (token) => async (dispatch) => {
//   dispatch({
//     type: GET_CURRENT_USER_REQUEST,
//   });
//   return axios
//     .get(API + "/user/sign-in", {
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     })
//     .then((payload) => {
//       // console.log(payload);
//       dispatch({
//         type: GET_CURRENT_USER_SUCCESS,
//         payload,
//       });
//     })
//     .catch((err) => {
//       // console.log(err);
//       dispatch({
//         type: GET_CURRENT_USER_FAILURE,
//         err,
//       });
//     });
// };

export const authUser = (email, password) => async (dispatch) => {
  dispatch({
    type: AUTH_REQUEST,
  });
  return axios
    .post(API + "/user/sign-in", {email, password})
    .then((payload) => {
      dispatch({
        type: AUTH_SUCCESS,
        payload,
      });
    })
    .catch((err) => {
      dispatch({
        type: FAILURE_MESSAGE,
        err,
      });
    });
};

export const addBook = (
  title,
  author,
  publisher,
  genres,
  count,
  description
) => async (dispatch) => {
  const key = localStorage.getItem("loginToken");
  const headers = {
    Authorization: key,
  };
  dispatch({
    type: ADD_BOOK_REQUEST,
  });
  return axios
    .post(
      API + "/book/auth/add",
      {
        title,
        author,
        publisher,
        genres,
        count,
        description,
      },
      {headers}
    )
    .then((payload) => {
      dispatch({
        type: ADD_BOOK_SUCCESS,
        payload,
      });
    })
    .catch((err) => {
      dispatch({
        type: FAILURE_MESSAGE,
        err,
      });
    });
};

export const registerUser = (firstName, lastName, email, password) => async (
  dispatch
) => {
  dispatch({
    type: REGISTER_REQUEST,
  });
  return axios
    .post(API + "/user/sign-up", {
      firstName,
      lastName,
      email,
      password,
    })
    .then((payload) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload,
      });
    })
    .catch((err) => {
      dispatch({
        type: FAILURE_MESSAGE,
        err,
      });
    });
};

export const cleanErrors = () => {
  return {
    type: CLEAR_ERROR,
  };
};

export const bookRequest = (id, title) => async (dispatch) => {
  dispatch({
    type: BOOK_DETAILS_REQUEST,
  });
  return axios
    .get(API + `/book/${id}/${title}`)
    .then((payload) => {
      dispatch({
        type: BOOK_DETAILS_SUCCESS,
        payload,
      });
    })
    .catch((err) => {
      dispatch({
        type: FAILURE_MESSAGE,
        err,
      });
    });
};

export const searchBook = (phrase) => async (dispatch) => {
  if (phrase.length >= 3) {
    dispatch({
      type: REQUEST_START,
    });
    return axios
      .get(API + "/book/search", {params: {phrase}})
      .then((payload) => {
        // dispatch({
        //   type: CLEAR_SEARCH_BOOK_LIST,
        // });
        dispatch({
          type: SEARCH_BOOK_SUCCESS,
          payload,
        });
        dispatch({
          type: REQUEST_END,
        });
      })
      .catch((err) => {
        dispatch({
          type: SEARCH_BOOK_FAILURE,
          err,
        });
        dispatch({
          type: REQUEST_END,
        });
      });
  }
  // else {
  //   return dispatch({
  //     type: CLEAR_SEARCH_BOOK_LIST,
  //   });
  // }
};

export const searchEmailUser = (email) => async (dispatch) => {
  if (email.length >= 3) {
    const key = localStorage.getItem("loginToken");
    const headers = {
      Authorization: key,
    };
    dispatch({
      type: REQUEST_START,
    });
    return axios
      .get(API + `/user/auth/search?email=${email}`, {headers})
      .then((payload) => {
        dispatch({
          type: USER_EMAIL_SEARCH_SUCCESS,
          payload,
        });
      })
      .catch((err) => {
        dispatch({
          type: USER_EMAIL_SEARCH_FAILURE,
          err,
        });
      })
      .finally(() =>
        dispatch({
          type: REQUEST_END,
        })
      );
  }
};

export const clearBookSearchList = () => {
  return {
    type: SEARCH_BOOK_REQUEST,
  };
};

// test below

// export const addBook=(title,author,publisher,bookType,amount)=>async(dispatch)=>{
//     dispatch({
//         type:ADD_BOOK_REQUEST
//     })
//     return axios.post('http://localhost:8080/api/book/add',{
//         title,
//         author,
//         publisher,
//         bookType,
//         amount
//     })
//     .then(payload=>{
//         console.log(payload);
//         dispatch({
//             type:ADD_BOOK_SUCCESS,
//             payload
//         })
//     })
//     .catch(err=>{
//         console.log(err.response.data.message);
//         console.log(err.response.data.details);
//         dispatch({
//             type:ADD_BOOK_FAILURE,
//             err
//         })
//     })
// }

export const getUserLoginAction = (id) => async (dispatch) => {
  const key = localStorage.getItem("loginToken");
  const headers = {
    Authorization: key,
  };
  dispatch({
    type: GET_CURRENT_USER_REQUEST,
  });
  return (
    axios
      .get(API + `/user/auth/search/${id}`, {headers})
      // .get(API + "/user/search", {params: {id: token}})
      .then((payload) => {
        dispatch({
          type: GET_CURRENT_USER_SUCCESS,
          payload,
        });
      })
      .catch((err) => {
        dispatch({
          type: FAILURE_MESSAGE,
          err,
        });
      })
  );
};
