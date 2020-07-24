import html from '../templates/grid.js';

export class Grid extends quantum.Component {
    constructor() {
        super();
    }

    static template = quantum.template(html);
}

quantum.define('quantum-grid', Grid);