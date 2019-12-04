import { css, customElement, html, LitElement } from 'lit-element'

@customElement(`app-button`)
export class Button extends LitElement {
  render() {
    css`
      .button {
        --button-color: var(--surface-color);
        border: 1px solid var(--primary-color);
        color: var(--primary-color);
        border-radius: 999px;
        padding: var(--small) var(--medium);
      }
    `

    return html`
      <button class="button"><slot /></button>
    `
  }
}
