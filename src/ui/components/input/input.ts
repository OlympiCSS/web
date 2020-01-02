import { css, customElement, html, LitElement, property } from 'lit-element'

@customElement('app-input')
export class Input extends LitElement {
  /**
   * @event input
   */

  @property({ type: String })
  placeholder: string = ''

  @property({ type: String })
  value: string = ''

  static get styles() {
    return css`
      .input {
        font-size: inherit;
        border: 1px solid var(--primary-color);
        color: var(--primary-color);
        border-radius: 999px;
        padding: var(--small) var(--medium);
        cursor: pointer;
        transition: var(--fast-transition);
        outline: none;
      }
    `
  }

  render() {
    return html`
      <input class="input" .value="${this.value}" .placeholder="${this.placeholder}" @input="${this.handleInput}"><slot /></input>
    `
  }

  private handleInput(event: Event) {
    const customEvent = new CustomEvent('input', {
      detail: {
        value: (event.target as HTMLInputElement).value
      }
    })
    this.dispatchEvent(customEvent)
  }
}
