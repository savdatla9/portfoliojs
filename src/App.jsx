import React, { useRef } from 'react';

import * as THREE from 'three';
// import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
// import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

import { 
  Canvas, useFrame, 
  // extend, useLoader 
} from '@react-three/fiber';

// import { 
  // OrbitControls, 
  // MeshReflectorMaterial 
// } from '@react-three/drei';

import './App.css';
// import typewriter from './assets/fonts/Typewriter_Bold.json';
// import helvetiker from "three/examples/fonts/helvetiker_regular.typeface.json";

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
  // extend({ TextGeometry });

  const Donut = () => {
    const dummy = new THREE.Object3D();
    const donutRef = useRef();
  
    useFrame(({ clock }) => {
      const time = clock.getElapsedTime();
      donutRef.current.rotation.x = Math.sin(time/4);
      donutRef.current.rotation.y = Math.sin(time/2);
      let i = 0;
      const amount = 10;
      const offset = (amount - 1)/2;
  
      for (let x=0; x<amount; x++) {
        for (let y=0; y<amount; y++) {
          for (let z=0; z<amount; z++) {
            dummy.position.set(offset-x, offset-y, offset-z);
            dummy.rotation.y = Math.sin(x / 2 + time) + Math.sin(y / 3 + time) + Math.sin(z / 4 + time);
            dummy.rotation.z = dummy.rotation.y * 3;
            dummy.updateMatrix();
  
            donutRef.current.setMatrixAt(i++, dummy.matrix);
          };
          donutRef.current.instanceMatrix.needsUpdate = true;
        };
      };
    });
    
    return(
      <instancedMesh ref={donutRef} args={[null, null, 1000]} scale={0.25} position={[3, 0, 0]}>
        <torusGeometry args={[8, 0.2, 10, 100]} />
        <meshPhongMaterial color='silver' />
      </instancedMesh>
    );
  };

  // const Title = () => {
  //   const fonts = new FontLoader().parse(helvetiker);

  //   return(
  //     <group>
  //       <mesh position={[-2.9,0,0]} rotation={[0, Math.PI/8, 0]} scale={[0.5, 0.5, 0.1]}>
  //         <textGeometry args={
  //           ["SAI AKHIL", {
  //             font: fonts, size:1, height: 1, curveSegments: 10,
  //             bevelEnabled: true, bevelThickness: 0.75,
  //             bevelSize: 0.05, bevelOffset: 0, bevelSegments: 2
  //           }]
  //         }/>
  //         <meshLambertMaterial color={'dodgerblue'}/>
  //       </mesh>

  //       <mesh position={[-2.9,-0.75,0]} rotation={[0, Math.PI/8, 0]} scale={[0.5, 0.5, 0.1]}>
  //         <textGeometry args={
  //           ["VARMA DATLA", {
  //             font: fonts, size:1, height: 1, curveSegments: 10,
  //             bevelEnabled: true, bevelThickness: 0.75,
  //             bevelSize: 0.05, bevelOffset: 0, bevelSegments: 2
  //           }]
  //         }/>
  //         <meshLambertMaterial color={'dodgerblue'}/>
  //       </mesh>
  //     </group>
  //   );
  // };
  
  return (
    <div>
      <div style={{position: 'absolute', left: '2.5vw', top: '7.5vh', zIndex: '500'}}>
        <div style={{fontSize: '45px', fontWeight: '400'}}>Hi There...</div>
        <div style={{fontSize: '35px', fontWeight: '600'}}>Sai Akhil Varma Datla</div>
      </div>
      <Canvas style={{height: '40vh', width: '98.5vw'}} shadows dpr={[1, 2]} camera={{ fov: 50, near: 1, far: 20 }}>
        <directionalLight position={[2, 5, 1]} color='dodgerblue' />
        <ambientLight intensity={0.15} color='white' />
        <Donut />
        {/* <OrbitControls /> */}
        {/* <Title /> */}
        {/* <mesh castShadow receiveShadow scale={5} position={[0, -1.7, 0]} rotation={[Math.PI/2, 0, 0]}>
          <planeGeometry />
          <MeshReflectorMaterial color='grey' side={THREE.DoubleSide} />
        </mesh> */}
      </Canvas>
    </div>
  );
};

export default App;