import { css, customElement, html, LitElement, property } from 'lit-element'

@customElement('app-title')
export class Title extends LitElement {
  @property({ type: String })
  type!: 'document' | 'section'

  static get styles() {
    return css`
      h1,
      h2,
      h3,
      h4,
      h5 {
        margin: 2.75rem 0 1.05rem;
        font-family: var(--title-font);
        font-weight: 900;
        line-height: 1.15;
      }

      h1 {
        margin-top: 0;
        font-size: 3.052em;
      }

      h2 {
        font-size: 2.441em;
      }

      h3 {
        font-size: 1.953em;
      }

      h4 {
        font-size: 1.563em;
      }

      h5 {
        font-size: 1.25em;
      }
    `
  }

  getTitle() {
    const documentTitle = html`
      <h1><slot></slot></h1>
    `
    const sectionTitle = html`
      <h2><slot></slot></h2>
    `
    switch (this.type) {
      case 'document':
        return documentTitle
      case 'section':
        return sectionTitle
      default:
        return documentTitle
    }
  }

  render() {
    return this.getTitle()
  }
}
