import { MountComponent } from "./MountComponent.js";
import { projects } from "../../data/data.js";
import { ProjCardComponent } from "./ProjCardComponent.js";

export class Projects extends MountComponent {
    render() {
        const section = document.createElement("div");
        const title = document.createElement("p");

        title.append("Projects");
        section.classList.add("section");
        section.id = "projects";

        section.appendChild(title);

        projects.forEach((proj) => {
            const expDiv = document.createElement("div");
            expDiv.className = "project";
            const cardComp = new ProjCardComponent(proj).render();
            expDiv.appendChild(cardComp);
            section.appendChild(expDiv);
        });

        return section;
    }
}
