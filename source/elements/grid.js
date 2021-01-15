import html from '../templates/grid.js';

export class Grid extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-grid', Grid);