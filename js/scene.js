var scene = new THREE.Scene(); //Scene
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / 800, 1, 500); //Camera
var renderer = new THREE.WebGLRenderer({alpha: true}); //Renderer

dxPerFrame = 0.02;

// Setting background color of scene
// scene.background = new THREE.Color(0xffffff);
renderer.setClearColor( 0x000000, 0 ); // the default

// var geometry = new THREE.TorusKnotBufferGeometry(0.8, 0.2, 64, 8);
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshPhysicalMaterial({ color: 0x3b3bee });
var torusKnot = new THREE.Mesh( geometry, material );


// Adding a light source
var light = new THREE.SpotLight( 0xffffff, 1 ); // soft white light
var light2 = new THREE.SpotLight( 0xffffff, 1 ); // soft white light

// Positioning
torusKnot.position.set(0, 0, 0);
light.position.set(0, 2, -3);
light2.position.set(-2, 2, 5);
camera.position.set(0, 2, -5);
camera.lookAt(-1.3, -0.1, 0);
// Adding to scene
scene.add( torusKnot );
scene.add(light);
// scene.add(light2);

// Setting size on the screen (full screen here)
renderer.setSize( window.innerWidth, 800 );
// Adding scene to the DOM
// Actually render things
document.body.appendChild( renderer.domElement );

onRender = function() {
};

function animate() {
  requestAnimationFrame( animate );
  rotate();
  torusKnot.position.y += dxPerFrame; // move ball
  if(torusKnot.position.y >=  1) dxPerFrame = -0.02; // if we're too far right, move towards the left
  if(torusKnot.position.y <= -2) dxPerFrame =  0.02; // if we're too far left, move towards the right again

  // setTimeout(move(), 1000);
  renderer.render( scene, camera );
}

function rotate(){
  torusKnot.rotation.y -= 0.02;
  // innerScreen.rotation.y -= 0.02;
}


animate();
