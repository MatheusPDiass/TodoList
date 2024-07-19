import newLabel from "./label.js";
import newButton from "./button.js";

import { clearList, renderDoneList, renderlist, dataLists } from "../index.js";

export default function newCard(prio, title, index) {
  const newDiv = document.createElement("div");
  newDiv.id = "itemCard";
  const priority = newLabel(prio, `priorityInfo ${prio}`);
  const titleCard = newLabel(title, "titleInfo");

  const divBtn = document.createElement("div");
  divBtn.id = "divBtn";
  const doneBtn = newButton("Feito", "doneBtn", index);
  const deleteBtn = newButton("Excluir", "deleteBtn", index);

  doneBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    dataLists.markAsDone(index);
    clearList();
    renderlist();
    renderDoneList();
  });

  deleteBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    dataLists.deleItem(index);
    clearList();
    renderlist();
    renderDoneList();
  });

  divBtn.append(doneBtn, deleteBtn);
  newDiv.append(priority, titleCard, divBtn);
  return newDiv;
}
