<template>
  <section class="todoist">
    <h1 class="todoist__title">Список задач</h1>
    <div class="todoist__stat stat">
      <p class="stat__text">На повестке дня: <span class="stat__all">{{ store.todoList.length }}</span>, из них выполнено:
        <span class="stat__done">{{ store.todoListComplited.length }}</span>
      </p>
    </div>
    <ul class="todoist__navigation navigation">
      <li class="navigation__item">
        <router-link :to="{ path: '/' }">
          На главную
        </router-link>
      </li>
      <li class="navigation__item">
        <router-link :to="{ name: 'tasks' }">
          Добавить задачи
        </router-link>
      </li>
    </ul>
    <router-view />
  </section>
</template>

<script>
import { useTodoStore } from './store/useTodoStore.js';
export default {
  name: 'App',
  setup() {
    const store = useTodoStore();
    return {
      store
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.todoist {
  margin: 0 auto;
  width: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.todoist__title {
  margin: 0;
  text-align: center;
}

.navigation {
  margin: 0;
  padding: 0;
  list-style: none;
}

.navigation__item {
  margin: 0 25px 0 0;
}

.navigation__item:last-child {
  margin: 0;
}

.todoist__navigation {
  margin: 0 0 10px 0;
  display: flex;
}

.stat__text {
  margin: 0 0 10px 0;
}
</style>
