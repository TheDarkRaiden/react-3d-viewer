import React, { Suspense } from 'react';  // Add Suspense from React
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({ url }) {
  const { scene } = useGLTF(url);  // Load the GLTF model
  return <primitive object={scene} scale={1} />;
}

function ModelViewer() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov:5 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={5} />
      <Suspense fallback={null}>
        <Model url="/donut.glb" /> 
      </Suspense>
      <OrbitControls enableZoom={true} enableRotate={true} enablePan={true} />
    </Canvas>
  );
}

export default ModelViewer;

