import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Loader({ path }) {
  const gltf = useLoader(GLTFLoader, path);
  console.log(gltf.scene);

  return <primitive object={gltf.scene} />;
}
