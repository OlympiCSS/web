import { customElement, html, LitElement } from 'lit-element'

@customElement('app-home')
export class Home extends LitElement {
  render() {
    return html`
      <app-page>
        <app-hero slot="header"></app-hero>
      </app-page>
    `
  }
}
