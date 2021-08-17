import $ from "jquery";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import styles from "../css/style.css";

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
if (module.hot) {
  module.hot.accept(function (err) {
    console.log(err);
  });
}
