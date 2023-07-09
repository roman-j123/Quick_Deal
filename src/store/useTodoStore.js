import { ref } from 'vue';
import { defineStore } from "pinia";

export const useTodoStore = defineStore('todo', {
  state: () => ({
    id: ref(0),
    todoItem: {
      task: null,
      complited: false
    },
    todoList: [],
    todoListComplited: [],
  }),

  actions: {
    resetTodoItem() {
      this.todoItem.task = '';
      this.todoItem.complited = false;
    },
    addTodoTask(event) {
      console.log(event.target.todoInput.value);
      const task = {
        ...this.todoItem,
        id: ++this.id,
        task: event.target.todoInput.value,
      }
      this.todoList.push(task);
      event.target.todoInput.value = '';
      this.resetTodoItem();
    },
    removeTodoTask(taskId) {
      const filteredArr = this.todoList.filter(item => item.id !== taskId);
      this.todoList = filteredArr;
      console.log(`Удалить ${taskId}`)
    },
    compliteTodoTask(taskId) {
      const currentTask = this.todoList.find(item => item.id === taskId);
      currentTask.complited = !currentTask.complited;
      this.todoListComplited = this.todoList.filter(item => item.complited === true)
      console.log(`Выполнить ${taskId}`)
    },
    filterByComplited() {
      return
    }
  }
})