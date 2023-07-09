<template>
  <form action="" class="addForm" @submit.prevent="store.addTodoTask">
    <input type="text" name="todoInput" id="todoInput" class="addForm__input" placeholder="Что нужно сделать?">
    <button class="addForm__button button button_add">Добавить задачу</button>
  </form>
  <h2 v-if="!store.todoList.length">
    Список задач пуст
  </h2>
  <ul class="todoList" v-for="(item, index) in store.todoList" :key="index">
    <li class="todoList__item item" :class="item.complited === false
      ? ''
      : 'item_complited'">
      <h2 class="item__title">{{ item.task }}</h2>
      <div class="item__buttons">
        <button class="button button_complite" id="compliteButton" @click="store.compliteTodoTask(item.id)">
          {{ item.complited ? 'Отменить' : 'Выполнить' }}</button>
        <button class="button button_remove" id="removeButton" @click="store.removeTodoTask(item.id)">
          Удалить</button>
      </div>
    </li>
  </ul>
</template>
<script>
import { useTodoStore } from '../store/useTodoStore.js';

export default {
  name: 'TasksView',
  setup() {
    const store = useTodoStore();
    return {
      store
    }
  }
}
</script>
<style>
.todoList {
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}

.todoList__item {
  margin: 0 0 10px 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  box-sizing: border-box;
}

.item {
  width: 100%;
}

.item__title {
  margin: 0;
}

.item__buttons {
  min-width: 150px;
  display: flex;
  justify-content: space-between;
}

.item_complited {
  background-color: #ccfcc7;
}

.addForm {
  width: 100%;
  margin: 0 0 10px 0;
  display: flex;
  justify-content: center;
}

.addForm__input {
  min-height: 54px;
  padding: 10px;
  margin: 0 10px 0 0;
  width: 80%;
  font-size: 1.5em;
  border-radius: 10px;
  border: 1px solid #2c3e50;
  outline: none;
  box-sizing: border-box;
}


.button {
  min-height: 30px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
}

.button_remove {
  background-color: #ff6666;
  color: #ffffff;
}
</style>