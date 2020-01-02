import { html } from 'lit-element'
import './input'

export default {
  title: 'Input',
  component: 'app-input'
}

export const base = () =>
  html`
    <app-input value="hola" placeholder="Hola Mundo" @input="() => alert('hi')"></app-input>
  `
