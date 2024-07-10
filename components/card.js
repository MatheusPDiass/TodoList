import newLabel from "./label.js";
import newButton from "./button.js";

export default function newCard(divId, prio, title, idBtn) {
  const newDiv = document.createElement("div");
  newDiv.id = divId;
  const priority = newLabel(prio, "priorityInfo");
  const titleCard = newLabel(title, "titleInfo");
  const doneBtn = newButton("Feito", "doneBtn");
  const deleteBtn = newButton("Excluir", "deleteBtn");

  newDiv.append(priority, titleCard, doneBtn, deleteBtn);
  return newDiv;
}
