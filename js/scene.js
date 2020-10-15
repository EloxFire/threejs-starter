var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
var renderer = new THREE.WebGLRenderer();

var purpleMaterial = new THREE.MeshBasicMaterial({color: 0x9146FF});
var greenMaterial = new THREE.MeshBasicMaterial({color: 0x86de58});
var redMaterial = new THREE.MeshBasicMaterial({color: 0xab443c});

var geometry = new THREE.BoxGeometry();

var cube1 = new THREE.Mesh(geometry, purpleMaterial);
var cube2 = new THREE.Mesh(geometry, greenMaterial);
var cube3 = new THREE.Mesh(geometry, redMaterial);

cube1.position.set(-5, 1, -5);
cube2.position.set(5, 1, -5);
cube3.position.set(0, -1, 0)

scene.add(cube1, cube2, cube3);



camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


function animate() {
  requestAnimationFrame( animate );
  rotate();
  renderer.render( scene, camera );
}

function rotate(){
  cube1.rotation.x += 0.05;
  cube2.rotation.y += 0.01;
  cube3.rotation.x += 0.01;
  cube3.rotation.y += 0.02;
}


animate();
