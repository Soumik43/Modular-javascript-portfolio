export class ExpCardComponent {
    constructor(exp) {
        this.exp = exp;
    }
    render() {
        const col = document.createElement("div");
        const heading = document.createElement("p");
        const techStack = document.createElement("p");
        const ulList = document.createElement("ul");
        const visitLink = document.createElement("p");

        visitLink.classList.add("visit__internship__link");
        heading.classList.add("experience--heading");
        col.classList.add("experience--col");

        heading.innerHTML = this.exp.company;
        visitLink.innerHTML = this.exp.link;
        techStack.innerHTML = this.exp.techstack;
        this.exp.points.forEach((exp) => {
            const expLi = document.createElement("li");
            expLi.append(`${exp}`);
            ulList.appendChild(expLi);
        });

        col.appendChild(heading);
        col.appendChild(techStack);
        col.appendChild(ulList);
        col.appendChild(visitLink);

        return col;
    }
}
