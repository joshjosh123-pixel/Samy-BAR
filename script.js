// Inizializza la scena 3D con Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, 400);
document.getElementById('3d-scene').appendChild(renderer.domElement);

// Aggiungi un cubo rappresentante il bar
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// Controlli per ruotare con il mouse
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Animazione
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Ridimensiona la scena
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / 400;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, 400);
});
