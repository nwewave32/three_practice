//three.js로 무언가를 표현하려면 scene, camera 그리고 renderer가 필요합니다.
//이를 통해 카메라로 장면을 구현할 수 있습니다.
"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import Box from "../components/3DEL/Box";

const Main = () => {
  const mainRef = useRef();

  useLayoutEffect(() => {
    // const scene = new THREE.Scene();
    // const camera = new THREE.PerspectiveCamera(
    //   75,
    //   window.innerWidth / window.innerHeight,
    //   0.1,
    //   1000
    // );

    //field of view,aspect ratio, near , far
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

    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const points = [];
    points.push(new THREE.Vector3(-10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const line = new THREE.Line(geometry, material);
    scene.add(line);

    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    // camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
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
    // <MainContainer ref={mainRef}>
    //   <GreetText id="greet">Hello</GreetText>
    // </MainContainer>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ width: "50vw", height: "50vh" }}>
        <Canvas
          camera={{
            position: [0, 1, 10],
          }}
        >
          <ambientLight />
          <Box position={[0, 0, 0]} />

          <gridHelper args={[10, 10]} />
          <axesHelper args={[8]} />
          <OrbitControls />
        </Canvas>
      </div>
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
