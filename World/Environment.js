import * as THREE from "three";
import Experience from "../experience/Experience";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.setSunLight();
    this.setEnvironment();
  }

  setSunLight() {
    const sunLight = new THREE.DirectionalLight(0xffffff, 4);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.set(1024, 1024);
    sunLight.shadow.camera.far = 15;
    sunLight.shadow.bias = 0.05;
    sunLight.position.set(3, 3, -2.25);
    this.scene.add(sunLight);
  }

  setEnvironment() {
    this.environmentMap = {};
    this.environmentMap.intensity = 2.4;
    this.environmentMap.texture =
      this.experience.resources.items.environmentMapTexture;
    this.environmentMap.texture.encoding = THREE.sRGBEncoding;
    this.scene.environment = this.environmentMap.texture;

    this.environmentMap.updateMaterials = () => {
      this.scene.traverse((child) => {
        if (
          child instanceof THREE.Mesh &&
          child.material instanceof THREE.MeshStandardMaterial
        ) {
          child.material.envMap = this.environmentMap.texture;
          child.material.envMapIntensity = this.environmentMap.intensity;
          child.material.needsUpdate = true;
        }
      });
      this.environmentMap.updateMaterials();
    };
  }
}
