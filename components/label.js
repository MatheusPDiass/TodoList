export default function label(text, id) {
  const newLabel = document.createElement("label");
  newLabel.innerText = text;
  newLabel.classList = id;
  return newLabel;
}
