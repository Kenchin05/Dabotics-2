const resultField = document.getElementById("result");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonText = e.target.innerText;

    if (buttonText === "=") {
      try {
        resultField.value = eval(resultField.value);
      } catch (error) {
        resultField.value = "Error";
      }
    } else if (buttonText === "C") {
      resultField.value = "";
    } else {
      resultField.value += buttonText;
    }
  });
});
