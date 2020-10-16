var scene = new THREE.Scene(); //Scene
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / 800, 1, 500); //Camera
var renderer = new THREE.WebGLRenderer(); //Renderer

// Setting background color of scene
scene.background = new THREE.Color(0x121212);

// Addig a cube
var cubeGeo = new THREE.BoxGeometry();
var purpleMaterial = new THREE.MeshPhysicalMaterial({color: 0x9146FF});
var cube = new THREE.Mesh(cubeGeo, purpleMaterial);


// Adding a light source
var light = new THREE.SpotLight( 0xffffff ); // soft white light
// Positioning
cube.position.set(0, 0, 0);
light.position.set(1, -2, -5);
camera.position.set(0, 0, -5);
camera.lookAt(0, 0, 0);
// Adding to scene
scene.add(cube);
scene.add(light);

// Setting size on the screen (full screen here)
renderer.setSize( window.innerWidth, 800 );
// Adding scene to the DOM
// Actually render things
document.body.appendChild( renderer.domElement );

function animate() {
  requestAnimationFrame( animate );
  rotate();
  renderer.render( scene, camera );
}

function rotate(){
  cube.rotation.x -= 0.02;
  cube.rotation.y -= 0.02;
}

animate();
