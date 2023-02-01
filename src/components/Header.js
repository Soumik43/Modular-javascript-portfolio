import { MountComponent } from "./MountComponent.js";
import AnchorImage from "./AnchorImage.js";
import { navbarData } from "../data/data.js";

export class Header extends MountComponent {
    render() {
        const header = document.createElement("header");
        const logo = new AnchorImage("assets/logos/Soumik-logos_black.png", "#", "navbar__logo").getAnchorImage();
        const navbar = document.createElement("nav");
        navbar.className = "header__nav";
        const ulList = document.createElement("ul");
        for (let i = 0; i < navbarData.length; i++) {
            const liList = document.createElement("li");
            const aTag = document.createElement("a");
            aTag.href = `#${navbarData[i]}`;
            aTag.append(`${navbarData[i]}`);
            liList.appendChild(aTag);
            ulList.appendChild(liList);
        }
        navbar.appendChild(ulList);
        header.appendChild(logo);
        header.appendChild(navbar);
        return header;
    }
}
