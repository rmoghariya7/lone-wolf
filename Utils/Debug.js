import * as THREE from "three";
import Experience from "../experience/Experience";
import dat from "dat.gui";

export default class Debug {
  constructor() {
    this.active = window.location.pathname === "/debug";

    if (this.active) {
      document.querySelector("a").style.display = "none";
      this.ui = new dat.GUI();
    }
  }
}
