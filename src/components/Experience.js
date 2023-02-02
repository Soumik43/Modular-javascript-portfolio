import { MountComponent } from "./MountComponent.js";
import { experience } from "../../data/data.js";
import { ExpCardComponent } from "./ExpCardComponent.js";

export class Experience extends MountComponent {
    render() {
        const section = document.createElement("div");
        const title = document.createElement("p");

        title.append("Experience");
        section.classList.add("section");
        section.id = "experience";

        section.appendChild(title);

        experience.forEach((exp) => {
            const expDiv = document.createElement("div");
            expDiv.className = `${exp.name}__experience`;
            const cardComp = new ExpCardComponent(exp).render();
            expDiv.appendChild(cardComp);
            const img = document.createElement("img");
            img.src = exp.imageLink;
            img.loading = "lazy";
            img.id = `${exp.name}__logo`;
            expDiv.appendChild(img)
            section.appendChild(expDiv);
        });

        return section;
    }
}
