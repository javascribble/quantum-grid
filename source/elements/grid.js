import html from '../templates/grid.js';

const { Component, template, define } = quantum;

export class Grid extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-grid', Grid);