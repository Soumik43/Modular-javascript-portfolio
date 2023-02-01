import { about } from "../data/data.js";
import { MountComponent } from "./MountComponent.js";

export class About extends MountComponent {
    render() {
        const main = document.createElement("main");
        const detailCol = document.createElement("div");
        const nameDetail = document.createElement("p");
        const introDetail = document.createElement("p");
        const buttonRow = document.createElement("div");
        const resumeButton = document.createElement("button");
        const contactButton = document.createElement("button");
        const img = document.createElement("img");
        const resumeAtag = document.createElement("a");
        const contactAtag = document.createElement("a");

        detailCol.classList.add("details--col");
        nameDetail.classList.add("name__details");
        introDetail.classList.add("introduction__details");
        buttonRow.classList.add("button--row");
        resumeButton.classList.add("button", "button__resume");
        contactButton.classList.add("button", "button__talk");
        img.id = "soumik__pic";
        resumeAtag.classList.add("resume__redirect");
        contactAtag.classList.add("talk__redirect");

        nameDetail.append("Hi, my name is Soumik");
        introDetail.innerHTML = about.description;
        resumeAtag.href = about.resumeLink;
        resumeAtag.target = "_blank";
        contactAtag.href = about.email;
        contactAtag.target = "_blank";
        resumeAtag.append("Resume");
        contactAtag.append(`Let's talk`);
        resumeButton.appendChild(resumeAtag);
        contactButton.appendChild(contactAtag);
        img.src = about.image;
        img.loading = "lazy";
        img.alt = "Soumik's Picture";

        buttonRow.appendChild(resumeButton);
        buttonRow.appendChild(contactButton);
        detailCol.appendChild(nameDetail);
        detailCol.appendChild(introDetail);
        detailCol.appendChild(buttonRow);

        main.appendChild(detailCol);
        main.appendChild(img);

        return main;
    }
}
