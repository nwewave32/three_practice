"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import Box from "../components/3DEL/Box";
import BoxLoader from "../components/3DEL/BoxLoader";

const Main = () => {
  const mainRef = useRef();

  useLayoutEffect(() => {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mainRef.current) mainRef.current.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      500
    );
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    if (WebGL.isWebGL2Available()) {
      animate();
    } else {
      const warning = WebGL.getWebGL2ErrorMessage();
      document.body.appendChild(warning);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Canvas
        camera={{
          position: [0, 1, 10],
        }}
      >
        <ambientLight />
        <Box position={[1, 0, 2]} />
        <BoxLoader />
        <gridHelper args={[10, 10]} />
        <axesHelper args={[8]} />
        <OrbitControls />
      </Canvas>
    </main>
  );
};

const MainContainer = styled.main`
  background-color: pink;
  width: 100vw;
  height: 100vh;
`;

const GreetText = styled.div`
  position: absolute;
  top: 10px;
  width: 100%;
  text-align: center;
  z-index: 100;
  display: block;
  color: #fff;
`;

export default Main;
