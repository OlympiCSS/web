import { customElement, html, LitElement } from 'lit-element'

@customElement('olympicss-app')
export class App extends LitElement {
  render() {
    return html`
      <app-home route="home"></app-home>
    `
  }
}
