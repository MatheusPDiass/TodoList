import newLabel from "./label.js";

export default function doneListCard(prio, title) {
  const newDiv = document.createElement("div");
  newDiv.id = "itemCard";
  newDiv.classList = "doneItemCard";
  const priority = newLabel(prio, `priorityInfo ${prio}`);
  const titleCard = newLabel(title, "titleInfo doneCardTitle");

  newDiv.append(priority, titleCard);
  return newDiv;
}
