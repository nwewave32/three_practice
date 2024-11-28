/// <reference types="react" />
/// <reference types="@react-three/fiber" />

declare namespace JSX {
  interface IntrinsicElements {
    gridHelper: ReactThreeFiber.Object3DNode<
      THREE.GridHelper,
      typeof THREE.GridHelper
    >;
    axesHelper: ReactThreeFiber.Object3DNode<
      THREE.AxesHelper,
      typeof THREE.AxesHelper
    >;
  }
}
