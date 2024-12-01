import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

const Elevator = () => {
  const [targetFloor, setTargetFloor] = useState(0); // 목표 층
  const [moving, setMoving] = useState(false); // 움직이는 중 여부
  const FLOOR_HEIGHT = 5; // 층당 높이

  const ElevatorBox = () => {
    const boxRef = useRef();

    useFrame(() => {
      if (boxRef.current && moving) {
        const currentY = boxRef.current.position.y;
        const targetY = targetFloor * FLOOR_HEIGHT;
        const distance = Math.abs(currentY - targetY);
        console.log("##currentY", currentY);
        console.log("##targetY", targetY);
        if (distance > 0.01) {
          // 부드럽게 이동
          boxRef.current.position.y += (targetY - currentY) * 0.1;
          console.log("##1");
        } else {
          // 목표 지점에 도달했을 때
          boxRef.current.position.y = targetY; // 위치 고정
          setMoving(false); // 움직임 멈춤
          console.log("##2");
        }
      }
    });

    return (
      <mesh ref={boxRef} position={[0, 0, 0]}>
        <boxGeometry args={[2, 3, 2]} />
        <meshStandardMaterial color={moving ? "green" : "red"} />
      </mesh>
    );
  };

  const handleButtonClick = (floor) => {
    if (!moving && floor !== targetFloor) {
      // 움직이지 않을 때만 목표 층 변경
      setTargetFloor(floor);
      setMoving(true); // 움직임 시작
    }
  };

  useEffect(() => {
    console.log("##targetFloor", targetFloor);
  }, [targetFloor]);
  return (
    <>
      <ElevatorBox />

      <group>
        {[-1, 0, 1, 2].map((floor) => (
          <mesh
            key={floor}
            position={[3, floor * FLOOR_HEIGHT, 0]}
            onClick={() => handleButtonClick(floor)}
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color={floor === targetFloor ? "yellow" : "blue"}
            />
          </mesh>
        ))}
      </group>
    </>
  );
};

export default Elevator;
