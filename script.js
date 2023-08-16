const submitButton = document.querySelector("input[type='submit']");

submitButton.addEventListener("click", function() {
  const textarea = document.querySelector("textarea");
  textarea.value = "";
});