export class ProjCardComponent {
    constructor(exp) {
        this.exp = exp;
    }
    render() {
        const proj = document.createElement("div");
        const heading = document.createElement("p");
        const techStack = document.createElement("p");
        const ulList = document.createElement("ul");
        const visitLink = document.createElement("p");

        visitLink.classList.add("visit__internship__link");
        heading.classList.add("experience--heading");
        proj.classList.add("project");
        techStack.classList.add("tech--stack");

        heading.innerText = `${this.exp.title}`;
        visitLink.innerHTML = this.exp.link;
        techStack.innerHTML = this.exp.techstack;
        this.exp.points.forEach((exp) => {
            const expLi = document.createElement("li");
            expLi.append(`${exp}`);
            ulList.appendChild(expLi);
        });

        proj.appendChild(heading);
        proj.appendChild(techStack);
        proj.appendChild(ulList);
        proj.appendChild(visitLink);

        return proj;
    }
}
