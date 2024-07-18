import newLabel from "./label.js";

export default function doneListCard(prio, title) {
  const newDiv = document.createElement("div");
  newDiv.id = "itemCard";
  const priority = newLabel(prio, `priorityInfo ${prio}`);
  const titleCard = newLabel(title, "titleInfo");
  const hr = document.createElement("hr");

  newDiv.append(priority, titleCard, hr);
  return newDiv;
}
