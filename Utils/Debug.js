import * as THREE from "three";
import Experience from "../experience/Experience";
import dat from "dat.gui";

export default class Debug {
  constructor() {
    this.active = true;

    if (this.active) {
      this.ui = new dat.GUI();
    }
  }
}
