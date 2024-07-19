import newCard from "./components/card.js";
import DataLists from "./components/Data.js";
import doneListCard from "./components/doneListCard.js";

export const dataLists = new DataLists();

export function renderlist() {
  const section = document.getElementById("todoList");
  let index = 0;
  dataLists.getTodoList().forEach(function (item) {
    const itemCard = newCard(item.prio, item.title, index);
    index++;
    section.append(itemCard);
  });
}

export function renderDoneList() {
  const section = document.getElementById("doneList");
  dataLists.getDonelist().forEach(function (item) {
    const itemCard = doneListCard(item.prio, item.title);
    section.append(itemCard);
  });
}

function clear() {
  const prio = document.getElementById("prioOptions");
  const title = document.getElementById("cardTitle");

  prio.value = "BAIXA";
  title.value = "";
}

export function clearList() {
  const itemCard = document.querySelectorAll("#itemCard");
  itemCard.forEach((item) => {
    item.remove();
  });
}

const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  const prio = document.getElementById("prioOptions").value;
  const title = document.getElementById("cardTitle").value;
  dataLists.addTodoList(prio, title);
  clearList();
  renderlist();
  renderDoneList();
  clear();
});

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  clear();
});

renderlist();
renderDoneList();
