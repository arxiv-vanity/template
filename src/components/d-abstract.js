import { Template } from '../mixins/template';
import { body } from '../helpers/layout';

const T = Template('d-abstract', `
<style>
  :host {
    display: block;
    font-size: 23px;
    line-height: 1.7em;
    margin-bottom: 140px;
  }
  ${body('d-abstract')}
</style>

<slot></slot>
`);

export class Abstract extends T(HTMLElement) {

}
