import { css, customElement, html, LitElement } from 'lit-element'

@customElement('app-not-found')
export class NotFound extends LitElement {
  static get styles() {
    return css``
  }

  render() {
    return html`
      <h1>Not found</h1>
    `
  }
}
