import React from "react";
import {Book, BookPage, LoaderWrapper} from "./Loader.elements";

const Loader = () => {
  return (
    <LoaderWrapper>
      <Book>
        <BookPage />
        <BookPage />
        <BookPage />
      </Book>
    </LoaderWrapper>
  );
};

export default Loader;
