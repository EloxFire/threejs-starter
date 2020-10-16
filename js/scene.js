var scene = new THREE.Scene(); //Scene
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / 800, 1, 500); //Camera
var renderer = new THREE.WebGLRenderer(); //Renderer

// Setting background color of scene
scene.background = new THREE.Color(0x121212);

var geometry = new THREE.TorusKnotBufferGeometry(0.8, 0.2, 64, 8);
var material = new THREE.MeshToonMaterial( { color: 0xffff00 } );
var torusKnot = new THREE.Mesh( geometry, material );


// Adding a light source
var light = new THREE.SpotLight( 0xffffff, 1 ); // soft white light
var light2 = new THREE.SpotLight( 0xffffff, 1 ); // soft white light

// Positioning
torusKnot.position.set(0, 0, 0);
light.position.set(4, 0, -1);
light2.position.set(-4, 0, 1);
camera.position.set(0, 0, -5);
camera.lookAt(0, 0, 0);
// Adding to scene
scene.add( torusKnot );
scene.add(light);
// scene.add(light2);

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
  torusKnot.rotation.y -= 0.02;
  // innerScreen.rotation.y -= 0.02;
}

animate();
