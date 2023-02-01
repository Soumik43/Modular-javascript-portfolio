export default class AnchorImage {
    constructor(imagePath, networkPath, className) {
        this.imagePath = imagePath;
        this.networkPath = networkPath;
        this.className = className;
    }
    getAnchorImage() {
        const anchorDiv = document.createElement("a");
        const imageDiv = document.createElement("img");
        imageDiv.src = this.imagePath;
        imageDiv.className = this.className;
        imageDiv.loading = "lazy";
        anchorDiv.href = this.networkPath;
        anchorDiv.appendChild(imageDiv);
        return anchorDiv;
    }
}
