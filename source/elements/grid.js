import { Component, template } from '../../references/quantum.js';
import html from '../templates/grid.js';

export class Grid extends Component {
    constructor() {
        super();
    }

    static template = template(html);

    static attributes = [];
}

customElements.define('quantum-grid', Grid);