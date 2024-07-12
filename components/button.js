export default function newButton(text, classList, index) {
  const button = document.createElement("button");
  button.innerText = text;
  button.classList = classList;
  button.value = index;
  return button;
}
