import Home from "./views/Home/Home";
import About from "./views/About/About";
import Experience from "./views/Experience/Experience";

var routes = [
  {
    path: "/index",
    name: "Home",
    component: Home,
    visible: true
  },
  {
    path: "/about",
    name: "About",
    component: About,
    visible: true
  },
  {
    path: "/experience",
    name: "Experience",
    component: Experience,
    visible: true
  }
];

export default routes;
