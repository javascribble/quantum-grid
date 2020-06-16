import { Quantum, define } from '../../references/quantum.js';
import { grid } from '../templates/grid.js';

export class Grid extends Quantum {
    constructor() {
        super(grid);
    }
}

define(Grid);