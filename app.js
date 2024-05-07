/* Created by Tivotal */

let display = document.querySelector(".display");
let btns = document.querySelectorAll(".buttons span");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.getAttribute("class") === "clr") {
      display.value = "";
    } else if (btn.getAttribute("class") === "equal") {
      display.value = eval(display.value);
    } else {
      display.value = display.value + btn.innerText;
    }
  });
});
