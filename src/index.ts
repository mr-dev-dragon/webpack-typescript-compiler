import { formData } from "./form";
const form = document.querySelector("form")!;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = formData(form);
  console.log(data);
});
