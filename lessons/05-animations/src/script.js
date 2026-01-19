import * as THREE from "three";
import gsap from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

let time = Date.now();

// Animations
const tick = () => {
  // Time
  const currentTime = Date.now();

  /**
   * Animation will be smooth regardless of the frame rate
   * If the frame rate is high, the animation will be faster (144FPS: Object will rotate 144 times per second)
   * If the frame rate is low, the animation will be slower (60FPS: Object will rotate 60 times per second)
   * If using deltaTime, animation will be smooth at the same speed on all devices
   */
  // Frame rate independent animation (time between 2 frames)
  const deltaTime = currentTime - time;
  time = currentTime;
  console.log(deltaTime);

  // Update objects
  mesh.rotation.y += 0.001 * deltaTime;

  // Render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};
// tick();

// Different ways to animate using Clock in Three.js
// REFERENCE: https://threejs.org/docs/#Clock
const clock = new THREE.Clock();
const tick2 = () => {
  // Clock
  const elapsedTime = clock.getElapsedTime();
  console.log(elapsedTime);

  // Update objects
  // mesh.rotation.y = elapsedTime * Math.PI * 2;

  // mesh.position.y = Math.sin(elapsedTime);
  // mesh.position.x = Math.cos(elapsedTime);

  camera.position.y = Math.sin(elapsedTime);
  camera.position.x = Math.cos(elapsedTime);
  camera.lookAt(mesh.position);

  // Render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick2);
};
// tick2();

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
const tick3 = () => {
  // Render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick3);
};
tick3();
