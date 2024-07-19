export default class DataLists {
  constructor() {
    this.todoList = [
      { prio: "ALTA", title: "Beber 2L de água" },
      { prio: "NORMAL", title: "Fazer compras da semana" },
      { prio: "BAIXA", title: "Corar o cabelo" },
    ];

    this.doneList = [
      { prio: "ALTA", title: "Tirar o Lixo" },
      { prio: "ALTA", title: "Passear com cachorro" },
    ];
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

  deleItem(index) {
    this.todoList.splice(index, 1)[0];
  }
}
