import { html, LitElement } from 'lit-element'
import { outlet } from 'lit-element-router'

@outlet
export class Outlet extends LitElement {
  render() {
    return html`
      <slot></slot>
    `
  }
}

customElements.define('app-outlet', Outlet)
