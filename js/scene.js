var scene = new THREE.Scene(); //Scene
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500); //Camera
var renderer = new THREE.WebGLRenderer({alpha: true}); //Renderer

scene.background = new THREE.Color(0x121212);

// Addig a plane
var planeGeometry = new THREE.PlaneGeometry(5, 20);
var planeMaterial = new THREE.MeshPhysicalMaterial({color: 0x9146FF, side: THREE.DoubleSide});
var plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.position.set(0, 0, 0);

scene.add(plane);

// Setting size on the screen (full screen here)
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio( window.devicePixelRatio );
// Adding scene to the DOM
// Actually render things
document.body.appendChild( renderer.domElement );
function animate() {
  requestAnimationFrame( animate );
  rotate();
  renderer.render( scene, camera );
}

function rotate(){
  plane.rotation.x += 0.02;
}
animate();
