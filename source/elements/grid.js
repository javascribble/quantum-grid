import { Component } from '../../references/quantum.js';

export class Grid extends Component {
    constructor() {
        super();
    }

    static template = document.querySelector('#quantum-grid');

    static attributes = [];
}

customElements.define('quantum-grid', Grid);