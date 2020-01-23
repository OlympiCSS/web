import { customElement, html, LitElement } from 'lit-element'
import { router } from 'lit-element-router'

@customElement('olympicss-app')
@router
export class App extends LitElement {
  private route = ''

  static get routes() {
    return [
      {
        name: 'home',
        pattern: ''
      },
      {
        name: 'not-found',
        pattern: '*'
      }
    ]
  }

  router(route: string) {
    this.route = route
  }

  render() {
    return html`
      <app-outlet active-route=${this.route}>
        <app-home route="home"></app-home>
        <app-not-found route="not-found"></app-not-found>
      </app-outlet>
    `
  }
}
