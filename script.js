const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");
const minus = document.querySelector(".minus-operator");
const plus = document.querySelector(".plus-operator");
const divide = document.querySelector(".divide-operator");
const multiply = document.querySelector(".multiply-operator");

let val = "";
let arr = Array.from(buttons).forEach((button) => {
  button.addEventListener("click", function (e) {
    console.log(e.target.innerHTML);

    if (e.target.innerHTML == "=") {
      val = eval(val);
      input.value = val;
    } else if (e.target.innerHTML == "AC") {
      val = "";
      input.value = val;
    } else if (e.target.innerHTML == "DE") {
      val = val.substring(0, val.length - 1);
      input.value = val;
    } else if (e.target == minus) {
      val += "-";
      input.value = val;
    } else if (e.target == multiply) {
      val += "*";
      input.value = val;
    } else if (e.target == divide) {
      val += " / ";
      input.value = val;
    } else {
      val += e.target.innerHTML;
      input.value = val;
    }
  });
});
