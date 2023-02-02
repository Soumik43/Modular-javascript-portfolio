import { Header } from "./components/Header.js";
import { About } from "./components/About.js";
import { Experience } from "./components/Experience.js";
import { Projects } from "./components/Projects.js";
import { Footer } from "./components/Footer.js";

const root = document.getElementById("root");

const components = [Header, About, Experience, Projects, Footer];

components.forEach((comp) => new comp().mount(root));
