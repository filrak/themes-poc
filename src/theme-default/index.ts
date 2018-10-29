import App from './App.vue';
import Home from './pages/Home.vue';
import Hello from './components/Hello.vue'
import { VueStorefrontTheme } from '../VSTheme'

export const Theme = new VueStorefrontTheme(
  App, 
  { Hello }, 
  { Home }
)
