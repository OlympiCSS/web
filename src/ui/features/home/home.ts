import { css, customElement, html, LitElement } from 'lit-element'

@customElement('app-home')
export class Home extends LitElement {
  static get styles() {
    return css``
  }

  render() {
    return html`
      <main><h1>Hello world</h1></main>
    `
  }
}
