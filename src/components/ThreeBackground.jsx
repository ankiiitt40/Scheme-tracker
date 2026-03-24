import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';

const BackgroundElement = () => {
  const mesh = useRef();

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      mesh.current.rotation.x = clock.getElapsedTime() * 0.2;
      mesh.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1.5, 64, 64]} ref={mesh}>
        <MeshDistortMaterial
          color="#6366F1"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 -z-20 h-screen w-full opacity-40 dark:opacity-60 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
        <BackgroundElement />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
