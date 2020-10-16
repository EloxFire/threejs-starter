/*
Setting up the scene :
Adding a scene, camera, renderer vars.
Thoses are the basiscs elements of threejs
Will never change in the beginning
*/
var scene = new THREE.Scene();
var threeScene = document.getElementById('canvas');
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
var renderer = new THREE.WebGLRenderer({canvas : threeScene});
// Setting scene background
scene.background = new THREE.Color(0x121212);

// MeshBasicMaterial are for adding colors to objects
var purpleMaterial = new THREE.MeshBasicMaterial({color: 0x9146FF});
var greenMaterial = new THREE.MeshBasicMaterial({color: 0x86de58});
var redMaterial = new THREE.MeshBasicMaterial({color: 0xab443c});

// This geometry is an object contain points and faces of the cube
var geometry = new THREE.BoxGeometry();

// Mesh takes object geometry and apply material to it.
var cube1 = new THREE.Mesh(geometry, purpleMaterial);
var cube2 = new THREE.Mesh(geometry, greenMaterial);
var cube3 = new THREE.Mesh(geometry, redMaterial);

// Set positions of cubes x,y,z (0, 0, 0 is the center of the scene)
cube1.position.set(-5, 1, -5);
cube2.position.set(5, 1, -5);
cube3.position.set(0, -1, 0)
// Adding our cubez to the scene
scene.add(cube1, cube2, cube3);
// Setting camera position
camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);
camera.focus = 1;
// Setting size on the screen (full screen here)
// renderer.setSize( window.innerWidth, window.innerHeight );
// renderer.setPixelRatio( window.devicePixelRatio );
// Adding scene to the DOM
document.body.appendChild( renderer.domElement );

// Actually render things
function animate() {
  requestAnimationFrame( animate );
  // You can add anything here like my rotate function
  rotate();
  renderer.render( scene, camera );
}

// For rotation of our cubes
function rotate(){
  cube1.rotation.x += 0.05;
  cube2.rotation.y += 0.01;
  cube3.position.z -= 0.19;
  cube3.rotation.y += 0.02;
  // camera.rotation.y += 0.01;
}


animate();
