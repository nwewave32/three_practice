"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Elevator from "../components/3DEL/Elevator";

const Main = () => {
  // const mainRef = useRef();
  // const loader = new GLTFLoader();

  // useLayoutEffect(() => {
  //   const renderer = new THREE.WebGLRenderer();
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   if (mainRef.current) mainRef.current.appendChild(renderer.domElement);

  //   const camera = new THREE.PerspectiveCamera(
  //     45,
  //     window.innerWidth / window.innerHeight,
  //     1,
  //     500
  //   );
  //   camera.position.set(0, 0, 100);
  //   camera.lookAt(0, 0, 0);

  //   const scene = new THREE.Scene();

  //   const light = new THREE.AmbientLight(0xffffff, 1); // 부드러운 전체 조명
  //   scene.add(light);
  //   function animate() {
  //     requestAnimationFrame(animate);
  //     renderer.render(scene, camera);
  //   }

  //   if (WebGL.isWebGL2Available()) {
  //     loader.load(
  //       "/very_dirty_furry_ball.glb",
  //       function (gltf) {
  //         const model = gltf.scene;
  //         model.position.set(0, 0, 0); // 모델의 위치 조정
  //         model.scale.set(10, 10, 10); // 모델의 크기 조정
  //         scene.add(model);
  //         // scene.add(gltf.scene);
  //         animate();
  //       },
  //       undefined,
  //       function (err) {
  //         console.log(err);
  //       }
  //     );
  //   } else {
  //     const warning = WebGL.getWebGL2ErrorMessage();
  //     document.body.appendChild(warning);
  //   }
  // }, []);

  return (
    // <Canvas
    //   camera={{
    //     position: [0, 1, 10],
    //   }}
    // >
    //   {/* <ambientLight /> */}
    //   <directionalLight color="green" position={[0, 0, 5]} intensity={1} />
    //   <Box position={[0, 0, 5]} />
    //   <BoxLoader />
    //   <gridHelper args={[10, 10]} />
    //   <axesHelper args={[8]} />
    //   <OrbitControls />
    // </Canvas>
    <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <axesHelper args={[10]} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <Elevator />
      <gridHelper args={[20, 20]} />
    </Canvas>
  );
};
//r3f에서 씬을 만들때 캔버스 위에 조명, 오브젝트
export default Main;
