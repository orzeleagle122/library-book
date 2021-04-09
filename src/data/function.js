import $ from "jquery";

export const goTop = () => {
  $("html, body").animate({scrollTop: 0}, "300");
};
