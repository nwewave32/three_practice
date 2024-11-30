import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
export default function BoxLoader() {
  const gltf = useLoader(GLTFLoader, "/very_dirty_furry_ball.glb");
  console.log(gltf.scene);

  return <primitive object={gltf.scene} />;
}
