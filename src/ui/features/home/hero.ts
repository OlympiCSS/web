import { css, customElement, html, LitElement } from 'lit-element'

@customElement('app-hero')
export class Hero extends LitElement {
  static get styles() {
    return css`
      .hero {
        display: flex;
        justify-content: center;

        position: relative;
        min-height: 100vh;
      }

      .header {
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: var(--large);
      }

      .introduction {
        margin-top: var(--large);
        max-width: var(--content-width);
      }

      .flames {
        display: flex;
        position: absolute;
        min-width: 2500px;
        height: 150vh;
        z-index: -1;
      }
    `
  }

  render() {
    return html`
      <header class="hero">
        <div>
          <section class="header">
            <app-logo></app-logo>
            <app-title>OlympiCSS</app-title>
            <app-text><em>Like</em> OlympiCSS but for CSS</app-text>
          </section>
          <section class="introduction">
            <app-text>
              Compete with other <strong>web designers</strong> coding the same website in 45 minutes. Explain the reasoning behind the
              choices you make with <strong>layout</strong>, <strong>styling</strong> and <strong>markup</strong>. Let’s learn together!
            </app-text>
          </section>
        </div>
        <app-flames class="flames"></app-flames>
      </header>
    `
  }
}
