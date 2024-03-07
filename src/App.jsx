import React from 'react';

import * as THREE from 'three';

import { 
  Canvas, useFrame, useThree,
  // useLoader 
} from '@react-three/fiber';
import { OrbitControls, SpotLight, useDepthBuffer } from '@react-three/drei';

import './App.css';

// function MovingSpot({ vec = new THREE.Vector3(), ...props }) {
//   const light = React.useRef();

//   const viewport = useThree((state) => state.viewport);
  
//   useFrame((state) => {
//     light.current.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.1)
//     light.current.target.updateMatrixWorld()
//   });
  
//   return <SpotLight castShadow ref={light} penumbra={1} distance={6} angle={0.35} attenuation={5} anglePower={4} intensity={2} {...props} />
// };

function App() {
  // const moonImg = useLoader(THREE.TextureLoader, '/moon.jpg');

  // console.log(moonImg);

  // const depthBuffer = useDepthBuffer({ frames: 1 });

  return (
    <div>
      <Canvas style={{height: '45vh', width: '99vw'}} shadows dpr={[1, 2]} camera={{ fov: 50, near: 1, far: 20 }}>
        <color attach="background" args={['#202020']} />
      
        <fog attach="fog" args={['#202020', 5, 20]} />
      
        <directionalLight position={[2, 5, 1]} color='white' />

        <ambientLight intensity={0.15} />
        
        <spotLight position={[-4, 10, 0]} color="red" penumbra={1} distance={10} angle={0.35} attenuation={5} anglePower={5} intensity={2} />
      
        <spotLight position={[2, 10, 0]} color="dodgerblue" penumbra={1} distance={10} angle={0.35} attenuation={5} anglePower={5} intensity={2} />

        <OrbitControls />

        <mesh castShadow receiveShadow scale={[0.5, 0.85, 0.5]}>
          <octahedronGeometry />

          <meshPhongMaterial color='grey' />
        </mesh>
      </Canvas>
    </div>
  );
};

export default App;