import "reflect-metadata";
import { container, injectable } from "tsyringe";
import { StageManager } from "./StageManager";

@injectable()
export class Main{
    constructor(stageManager:StageManager){
        console.log("In Main class");
    }
}

let main = container.resolve(Main);
