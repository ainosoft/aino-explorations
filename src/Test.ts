import { injectable } from "tsyringe";
import { WebComponent } from "./Decorator";

@injectable()
@WebComponent({
    selector: 'test-class'
})
export class Test extends HTMLParagraphElement{
    constructor(){
        super();
        console.log("In test class");
    }
}

