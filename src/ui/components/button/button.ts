import { css, customElement, html, LitElement } from 'lit-element'

@customElement('app-button')
export class Button extends LitElement {
  static get styles() {
    return css`
      .button {
        font-size: inherit;
        border: 1px solid var(--primary-color);
        color: var(--primary-color);
        border-radius: 999px;
        padding: var(--small) var(--medium);
        cursor: pointer;
        transition: var(--fast-transition);
        outline: none;
      }

      .button:hover {
        color: var(--on-primary-color);
        background-color: var(--primary-color);
      }
    `
  }

  render() {
    return html`
      <button class="button"><slot /></button>
    `
  }
}
