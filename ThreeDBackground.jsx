import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Cloud, Sky } from "@react-three/drei";

// Simple 3D background -- you can customize based on weather
export default function ThreeDBackground({ weather }) {
  return (
    <Canvas className="three-bg" camera={{ position: [0, 0, 10], fov: 60 }}>
      <ambientLight intensity={0.7} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Sky sunPosition={[100, 20, 100]} turbidity={10} />
        <Stars radius={100} depth={50} count={5000} factor={4} />
        <Cloud position={[0, 2, 0]} opacity={0.7} />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
