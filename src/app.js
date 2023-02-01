import { Header } from "./components/Header.js";
import { About } from "./components/About.js";
import { Experience } from "./components/Experience.js";

const root = document.getElementById("root");

const components = [Header, About, Experience];

components.forEach((comp) => new comp().mount(root));
