import { html, LitElement, property } from 'lit-element'
import { navigator } from 'lit-element-router'

@navigator
export class Link extends LitElement {
  @property({ type: String })
  to!: string

  linkClick(event: Event) {
    event.preventDefault()
    // @ts-ignore
    this.navigate(this.to)
  }

  render() {
    return html`
      <a href="${this.to}" @click="${this.linkClick}"><slot /></a>
    `
  }
}

customElements.define('app-link', Link)
