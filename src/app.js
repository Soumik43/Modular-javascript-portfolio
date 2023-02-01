import { Header } from "./components/Header.js";
import { About } from "./components/About.js";

const root = document.getElementById("root");

let API_URL = `${window.location.protocol}//${window.location.host}/src/tasks/personal-website/`;
if (window.location.host === "soumik43.github.io/") {
    API_URL = window.location;
}

const components = [Header, About];

components.forEach((comp) => {
    new comp().mount(root);
});
