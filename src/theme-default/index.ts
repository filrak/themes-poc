import Vue from 'vue'
import App from './App.vue';
import Home from './pages/Home.vue';
import Hello from './components/Hello.vue'

export interface VueStorefrontThemeConfig {
  entry: any,
  pages: any,
  components: any
}

class VueStorefrontTheme {
  constructor(public entry: any, public components: any, public pages: any) {}
  public register () : any {
    for(let name in this.components) {
      Vue.component(this.components[name].name, this.components[name])
    }
    for(let name in this.pages) {
      console.log(this.pages[name])
      Vue.component(this.pages[name].name, this.pages[name])
    }
  }
}

export const Theme = new VueStorefrontTheme(
  App, 
  { Hello }, 
  { Home }
)
