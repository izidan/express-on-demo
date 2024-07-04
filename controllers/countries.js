import { Controller } from 'express-on/controller';
import Model from '../models/countries.js';

export class CountriesController extends Controller {
    constructor() {
        super(Model)
    }
}

export default CountriesController;