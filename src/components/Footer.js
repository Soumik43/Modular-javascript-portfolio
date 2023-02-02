import { MountComponent } from "./MountComponent.js";
import { footer } from "../../data/data.js";

export class Footer extends MountComponent {
    render() {
        const footerContainer = document.createElement("footer");
        const hr = document.createElement("hr");
        const footerDetail = document.createElement("p");
        const nav = document.createElement("nav");

        footer.forEach((ele) => {
            const aTag = document.createElement("a");
            aTag.href = ele.link;
            aTag.target = "_blank";
            aTag.innerHTML = ele.data;
            nav.appendChild(aTag);
        });

        hr.className = "solid";
        footerContainer.className = "footer--col";
        footerDetail.className = "footer__detail";
        nav.className = "footer__nav";

        footerDetail.innerText = "@Soumik. All rights reserved.";

        document.getElementById("root").appendChild(hr);

        footerContainer.appendChild(footerDetail);
        footerContainer.appendChild(nav);

        return footerContainer;
    }
}
