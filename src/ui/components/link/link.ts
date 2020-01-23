import { html, LitElement, property } from 'lit-element'

export class Link extends LitElement {
  @property({ type: String })
  to!: string

  linkClick(event: Event) {
    event.preventDefault()
  }

  render() {
    return html`
      <a href="${this.to}" @click="${this.linkClick}"><slot></slot></a>
    `
  }
}

customElements.define('app-link', Link)
