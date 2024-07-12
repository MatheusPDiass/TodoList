import newLabel from "./label.js";
import newButton from "./button.js";
import DataLists from "./Data.js";
import { clearList, renderlist } from "../index.js";

const dataLists = new DataLists();

export default function newCard(prio, title, index) {
  const newDiv = document.createElement("div");
  newDiv.id = "itemCard";
  const priority = newLabel(prio, "priorityInfo");
  const titleCard = newLabel(title, "titleInfo");

  const divBtn = document.createElement("div");
  divBtn.id = "divBtn";
  const doneBtn = newButton("Feito", "doneBtn", index);
  const deleteBtn = newButton("Excluir", "deleteBtn", index);

  doneBtn.addEventListener("click", () => {
    dataLists.markAsDone(index);
    console.log(dataLists.getDonelist());
    clearList();
    renderlist();
  });

  divBtn.append(doneBtn, deleteBtn);
  newDiv.append(priority, titleCard, divBtn);
  return newDiv;
}
