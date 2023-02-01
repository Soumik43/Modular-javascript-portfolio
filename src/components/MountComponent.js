import { generateUniqueId } from "../utils/utils.js";

export class MountComponent {
    #isMounted;
    constructor() {
        this.#isMounted = false;
        // this.id = generateUniqueId({ prefix: this.constructor.name.toLowerCase() });
    }

    mount(el) {
        if (this.#isMounted) {
            console.warn("Already mounted");
        }
        if (el) el.appendChild(this.render());
        else document.body.appendChild(this.render());
    }
}
