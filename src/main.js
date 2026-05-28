import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js' 

// 1. Create the app instance first
const app = createApp(App);

// 2. Tell the app to use the router
app.use(router);

// 3. Wait for the router to be ready, then mount
router.isReady().then(() => {
  app.mount('#app');
});