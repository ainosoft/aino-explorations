/**
 * customElements.get() this method returns the defined class constructor.
 */
 export function WebComponent(options: { selector: string }): any {
    return (targetClassObject: any) => {
        {
            const selector = targetClassObject.elselector = options.selector;
            console.log("selector:", selector);
            window.customElements.define(selector, targetClassObject, { extends: "p" });

            if (customElements.get(selector) == undefined) {
                console.log('custom element is not define');
            }
            else {
                console.log('custom element is define');
            }

        }
    }
}