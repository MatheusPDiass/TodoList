import newCard from "./components/card.js";
import DataLists from "./components/Data.js";

const dataLists = new DataLists();

export function renderlist() {
  const section = document.getElementById("todoList");
  let i = 0;
  dataLists.getTodoList().forEach(function (item) {
    const itemCard = newCard(item.prio, item.title, i);
    i++;
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
  clear();
});

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  clear();
});

renderlist();
