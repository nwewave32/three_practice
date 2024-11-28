import { useFrame } from "@react-three/fiber";
import { useState, useRef } from "react";

export default function Box(props) {
  const meshRef = useRef(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta;
  });

  return (
    <mesh
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      {...props}
    >
      <boxGeometry />
      <meshStandardMaterial color={hovered ? "hotpink" : "red"} />
    </mesh>
  );
}
