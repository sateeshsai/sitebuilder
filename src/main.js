import App from './App.svelte'
import "@picocss/pico";
import './app.css'

const app = new App({
  target: document.getElementById('app'),
  intro: true
})

export default app
