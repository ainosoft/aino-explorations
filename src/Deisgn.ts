import { injectable } from "tsyringe";


@injectable()
export class Design extends HTMLDivElement {
    constructor(){
        super();
        this.addEventListener("click", function(){ 
            alert("Hello"); });  
    }
}
window.customElements.define('test-app',Design,{extends:'div'});