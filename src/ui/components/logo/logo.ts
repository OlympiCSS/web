import { css, customElement, html, LitElement } from 'lit-element'

@customElement('app-logo')
export class Logo extends LitElement {
  static get styles() {
    return css`
      :root {
        --cutout: 48%; /* 50%, fix for Chrome clip-path */
      }

      .semi {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        position: absolute;
        border: 15px solid var(--color);
      }

      .blue .semi {
        --color: var(--primary-color);
      }

      .red .semi {
        --color: var(--quinary-color);
      }

      .black .semi {
        --color: var(--quaternary-color);
      }

      .gold .semi {
        --color: var(--secondary-color);
      }

      .green .semi {
        --color: var(--tertiary-color);
      }

      .logo {
        display: flex;
        flex-wrap: wrap;
        width: var(--logo-width, 600px);
        justify-content: center;
      }

      .ring {
        --size: 200px;

        position: relative;
        width: var(--size);
        height: var(--size);
      }

      .first {
        clip-path: inset(0 var(--cutout) 0 0);
      }
      .second {
        clip-path: inset(0 0 0 var(--cutout));
      }

      .ontop {
        z-index: 5;
      }
      .onbottom {
        z-index: -5;
      }

      .rotate45 {
        transform: rotate(45deg);
      }

      .up {
        transform: translateY(-75px);
      }

      .animated {
        transform-origin: 50% 0;
        animation: move 2.5s ease-in-out;
      }

      @keyframes move {
        0% {
          transform: rotate(-35deg) translateY(-75px);
        }

        30% {
          transform: rotate(80deg) translateY(-75px);
        }

        50% {
          transform: rotate(-25deg) translateY(-75px);
        }

        70% {
          transform: rotate(55deg) translateY(-75px);
        }

        90% {
          transform: rotate(-5deg) translateY(-75px);
        }

        100% {
          transform: rotate(0deg) translateY(-75px);
        }
      }
    `
  }

  render() {
    return html`
      <div class="logo">
        <div class="ring blue">
          <div class="first semi ontop"></div>
          <div class="second semi onbottom"></div>
        </div>
        <div class="ring black">
          <div class="first semi rotate45"></div>
          <div class="second semi rotate45 ontop"></div>
        </div>
        <div class="ring red">
          <div class="first semi rotate45 ontop"></div>
          <div class="second semi rotate45"></div>
        </div>
        <div class="ring gold up">
          <div class="first semi"></div>
          <div class="second semi"></div>
        </div>
        <div class="ring green up animated">
          <div class="first semi"></div>
          <div class="second semi"></div>
        </div>
      </div>
    `
  }
}
