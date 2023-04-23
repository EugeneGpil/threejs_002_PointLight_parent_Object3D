import * as T from 'three';
import {MapControls} from "three/addons/controls/MapControls";

export default (canvas) => {
  const renderer = new T.WebGLRenderer({
    canvas,
  })
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new T.Scene();
  const camera = new T.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;
  camera.position.y = 5;
  camera.position.x = 5;
  scene.add(camera)

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  const cylinderGeometry = new T.CylinderGeometry(1, 1, 2, 6);
  const cylinderMaterial = new T.MeshStandardMaterial({color: 0xffff00});
  const cylinder1 = new T.Mesh(cylinderGeometry, cylinderMaterial);
  cylinder1.position.y = 1
  scene.add(cylinder1);

  const cylinder2Parent = new T.Object3D()
  cylinder2Parent.position.y = 1
  scene.add(cylinder2Parent)

  const cylinder2 = new T.Mesh(cylinderGeometry, cylinderMaterial)
  cylinder2.position.x = 5
  cylinder2.position.z = 5
  cylinder2Parent.add(cylinder2)

  const cylinder3Parent = new T.Object3D()
  cylinder2.add(cylinder3Parent)

  const cylinder3 = new T.Mesh(cylinderGeometry, cylinderMaterial)
  cylinder3.position.x = 2.5
  cylinder3.position.z = 2.5
  cylinder3Parent.add(cylinder3)

  const mapControls = new MapControls(camera, canvas);

  // const spotLight = new T.SpotLight(0xFFFFFF, 1, 0, Math.PI / 180 * 30)
  // spotLight.position.set(2, 2, 2)
  // scene.add(spotLight);

  const createPointLight = (x, z) => {
    const pointLight = new T.PointLight(0xFFFFFF, 1.5, 100);
    pointLight.position.x = x;
    pointLight.position.y = 2.5;
    pointLight.position.z = z;
    scene.add(pointLight);
  }

  // createPointLight(1.5, 1.5)
  // createPointLight(1.5, -1.5)
  // createPointLight(-1.5, 1.5)
  // createPointLight(-1.5, -1.5)
  createPointLight(0, 0)

  // const pointLightHelper = new T.PointLightHelper(pointLight)
  // scene.add(pointLightHelper)

  const planeGeometry = new T.PlaneGeometry(26, 26, 1, 1)
  const planeMaterial = new T.MeshStandardMaterial({color: 0xFFFFFF})
  const plane = new T.Mesh(planeGeometry, planeMaterial);
  plane.rotateX(Math.PI / 180 * 270)
  scene.add(plane)

  const xyzHelper = new T.AxesHelper(10);
  scene.add(xyzHelper)

  const netHelper = new T.GridHelper(26, 26)
  scene.add(netHelper)

  // const ambientLight = new T.AmbientLight(0xFFFFFF, 0.2)
  // scene.add(ambientLight)



  const animate = () => {
    requestAnimationFrame(animate);

    cylinder1.rotateY(Math.PI / 180 * 0.2)

    cylinder2Parent.rotateY(- Math.PI / 180 * 0.4)
    cylinder2.rotateY(Math.PI / 180 * 0.6)

    cylinder3Parent.rotateY( - Math.PI / 180 * 0.6 - Math.PI / 180 * 0.2)
    cylinder3.rotateY(- Math.PI / 180 * 0.6)

    renderer.render(scene, camera);
  }
  animate()
}
