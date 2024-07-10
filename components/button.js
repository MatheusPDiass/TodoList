export default function newButton(text, id) {
  const button = document.createElement("button");
  button.innerText = text;
  button.id = id;
  return button;
}
