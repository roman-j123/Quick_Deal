import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import TasksView from './views/TasksView.vue';
import HomeView from './views/HomeView.vue';
const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TasksView,
    }
  ],
  history: createWebHistory(),
})

const pinia = createPinia();
createApp(App).use(pinia).use(router).mount('#app')
