import { css, customElement, html, LitElement } from 'lit-element'

@customElement('app-flames')
export class Flames extends LitElement {
  static get styles() {
    return css`
      :host {
        width: 100%;
        height: 100%;
      }

      .svg {
        width: 100%;
        height: 100%;
      }
    `
  }

  render() {
    return html`
      <svg class="svg" viewBox="0 0 1440 1092" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1446.94 -82.7579C1446.94 -82.7579 952.065 31.7897 694.832 -112.5C437.598 -256.79 0.00012207 -328 0.00012207 -328V164.742H1446.94V-82.7579Z"
          fill="#A8E1FF"
        />
        <path
          d="M1446.94 -82.7579C1446.94 -82.7579 1087.21 161 733.015 -18.4999C378.816 -198 0.00012207 -128.474 0.00012207 -128.474V201H1446.94V-82.7579Z"
          fill="#70CDFF"
        />
        <path
          d="M0.00012207 420.408C0.00012207 420.408 359.725 231.929 713.923 370.722C1068.12 509.515 1446.94 455.757 1446.94 455.757V201H0.00012207V420.408Z"
          fill="#70CDFF"
        />
        <path d="M1427 310.404C1427 310.404 934.5 370.847 678.5 294.711C422.5 218.575 -13 181 -13 181V441H1427V310.404Z" fill="#FCB131" />
        <path
          d="M1427 310.404C1427 310.404 934.5 370.847 678.5 294.711C422.5 218.575 -13 181 -13 181V441H1427V310.404Z"
          fill="url(#paint0_linear)"
        />
        <path d="M0 520.596C0 520.596 492.5 460.153 748.5 536.289C1004.5 612.425 1440 650 1440 650V390H0V520.596Z" fill="#FCB131" />
        <path
          d="M0 520.596C0 520.596 492.5 460.153 748.5 536.289C1004.5 612.425 1440 650 1440 650V390H0V520.596Z"
          fill="url(#paint1_linear)"
        />
        <path d="M1427 310.14C1427 310.14 1069 438.875 716.5 344.077C364 249.278 -13 285.996 -13 285.996V460H1427V310.14Z" fill="#F3C06D" />
        <path
          d="M-13 575.914C-13 575.914 345 476.34 697.5 549.664C1050 622.989 1427 594.588 1427 594.588V460H-13V575.914Z"
          fill="#e0992f"
        />
        <path d="M0 448.242C0 448.242 492.5 562.79 748.5 418.5C1004.5 274.21 1440 203 1440 203V695.742H0V448.242Z" fill="#E09696" />
        <path d="M1427 846.5C1427 846.5 934.5 731.952 678.5 876.242C422.5 1020.53 -13 1091.74 -13 1091.74V599H1427V846.5Z" fill="#E09696" />
        <path d="M0 448.242C0 448.242 358 692 710.5 512.5C1063 333 1440 402.526 1440 402.526V732H0V448.242Z" fill="#E25252" />
        <path d="M1440 951.408C1440 951.408 1082 762.929 729.5 901.722C377 1040.52 0 986.757 0 986.757V732H1440V951.408Z" fill="#E25252" />
        <defs>
          <linearGradient id="paint0_linear" x1="707" y1="181" x2="707" y2="441" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint1_linear" x1="720" y1="650" x2="720" y2="390" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    `
  }
}
