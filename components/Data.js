export default class DataLists {
  constructor() {
    this.todoList = [
      { prio: "ALTA", title: "Item teste" },
      { prio: "MEDIA", title: "Item teste 2" },
    ];

    this.doneList = [];
  }

  addTodoList(prio, title) {
    const card = { prio: prio, title: title };
    this.todoList.push(card);
  }

  markAsDone(index) {
    const checkedItem = this.todoList.splice(index, 1)[0];
    this.doneList.push(checkedItem);
  }

  getTodoList() {
    return this.todoList;
  }
  getDonelist() {
    return this.doneList;
  }
}