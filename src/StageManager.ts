import { Test } from "./Test";
import { injectable } from "tsyringe";


@injectable()
export class StageManager{
    constructor(test:Test){
        console.log("In StageManager class");

        const selector = document.querySelector("a");
        console.log(selector);
        
        selector?.addEventListener('click', () => {
           alert("Hello");
        });
    }
}

