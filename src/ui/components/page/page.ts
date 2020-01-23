import { css, customElement, html, LitElement } from 'lit-element'

@customElement('app-page')
export class Page extends LitElement {
  static get styles() {
    return css`
      .content {
        margin: 0 auto;
        width: var(--content-width);
      }
    `
  }

  render() {
    return html`
      <main>
        <slot name="header"></slot>
        <div class="content">
          <slot></slot>
        </div>
        <slot name="footer"></slot>
      </main>
    `
  }
}
