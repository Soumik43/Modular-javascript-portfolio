import { Header } from "./components/Header.js";
import { About } from "./components/About.js";

const root = document.getElementById("root");

const components = [Header, About];

components.forEach((comp) => {
    new comp().mount(root);
});
