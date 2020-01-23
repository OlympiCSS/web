import { css, customElement, html, LitElement } from 'lit-element'

@customElement('app-text')
export class Text extends LitElement {
  static get styles() {
    return css`
      p {
        margin-bottom: 1.15rem;
      }
    `
  }

  render() {
    return html`
      <p><slot></slot></p>
    `
  }
}
