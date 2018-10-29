import Vue from 'vue'

export interface VueStorefrontThemeConfig {
  entry: any,
  pages: any,
  components: any
}

export class VueStorefrontTheme {
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