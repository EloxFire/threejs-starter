# Welcome to this note file !

###### Contains important vocabulary and code blocks in order to use THREE.JS correctly



**Index**

[TOC]



## Vocabulary

#### 1 - THREE objects :

- **Scene() :** Create à scene object 

  ```javascript
  var scene = new THREE.Scene();
  ```

- **PerspectiveCamera(PoV, Ratio, Near, Far) : ** Create a simple camera object

  ```javascript
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 500)
  ```

- **WebGLRenderer() : ** Renderer of the scene

  ```javascript
  var renderer = new THREE.WebGLRenderer();
  ```

- **MeshBasicMaterial (Color object): ** Create a material (color for example), can be applied on a geometry. 

  ```js
  var purpleMaterial = new THREE.MeshBasicMaterial(0x9146FF)
  ```

- **BoxGeometry() : ** Contain all informations about a geometry (points, faces, …)

  ```js
  var cubeGeometry = new THREE.BoxGeometry();
  ```

- **Mesh(geometry, material) :** Takes a geometry and a material and mix them together to give the actual object that will be rendered

  ```js
  var cube = new Mesh(cubeGeometry, purpleMaterial);
  ```

- **Color() :** To set a color for every elements that are not Geometry objects

  ```js
  //Set scene background color
  var scene = new THREE.Scene();
  scene.background = THREE.Color(0x121212);
  ```

#### 2 - Placements and animations

- Space in scene :

  ![](/home/enzo/Documents/GIMP/GridThreejsNotes.png)

- Mesh position :

  ```js
  cube.position.set(-2, 0, 1);
  // Set position of Mesh 'cube' at x=-2, y=0, z=1
  ```

- Mesh position animation :

  ```js
  cube.position.z -= 0.01; //Animation value > 1 = very very very very fast :)
  ```

- Mesh rotation :

  ```js
  cube.rotate.x += 0.01;
  cube.rotate.z -= 0.02;
  ```

#### 3 - Usefull things

- Make canvas background transparent :

  ```js
  var renderer = new THREE.WebGLRenderer({aplha: true});
  renderer.setClearColor(0x000000, 0);
  ```

- Set scene background to specific color :

  ```js
  var Scene = new THREE.Scene();
  scene.background = new THREE.Color(0x121212);
  ```

  

