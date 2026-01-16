import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
const group = new THREE.Group();
group.position.y = 0.5;
group.scale.y = 1.5;
group.rotation.y = 0.5;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 }),
);
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
);
cube2.position.x = -1.5;
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff }),
);
cube3.position.x = 1.5;
group.add(cube3);

// Axes helper
const axesHelper = new THREE.AxesHelper(2); // 2 is the length of the axes helper
scene.add(axesHelper);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// camera.position.x = 1;
// camera.position.y = 1;
camera.position.z = 3;
scene.add(camera);

// camera.lookAt(mesh.position);

// mesh.position.normalize(); // normalize the position vector to have a length of 1

// distance between the center of the scene and the object's position
// console.log('Length: ', mesh.position.length());

// distance between the object's position and the camera's position
// console.log('Distance: ', mesh.position.distanceTo(camera.position));

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
