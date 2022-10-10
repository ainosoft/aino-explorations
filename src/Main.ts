import "reflect-metadata";
import { container } from 'tsyringe';
import { Stage } from './Stage';


let main = container.resolve(Stage);