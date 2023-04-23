import * as T from 'three';

export default (canvas) => {
  const renderer = new T.WebGLRenderer({
    canvas,
  })

  const scene = new T.Scene();
  const camera = new T.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  scene.add(camera)

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  const geometry = new T.CylinderGeometry(5, 5, 20, 32);
  const material = new T.MeshBasicMaterial({color: 0xffff00});
  const cylinder = new T.Mesh(geometry, material);
  scene.add(cylinder);

  const animate = () => {
    requestAnimationFrame(animate);
  }
  animate()
}
