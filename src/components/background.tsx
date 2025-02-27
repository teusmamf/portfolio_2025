import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useMotionValue, useSpring } from "framer-motion";

const AnimatedSphere: React.FC = () => {
  const sphereRef = useRef<any>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth interpolation for a more fluid motion
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    console.log("Background Loaded");
    const updateMousePosition = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth) * 2 - 1; // Normalize X
      const y = (clientY / window.innerHeight) * 2 - 1; // Normalize Y
      mouseX.set(x * 2); // Scale effect
      mouseY.set(y * 2);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [mouseX, mouseY]);

  // Update sphere position in Three.js
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.position.x = smoothX.get();
      sphereRef.current.position.y = smoothY.get();
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1.8, 100, 100]} scale={[2.5, 2.5, 2.5]} position={[0, 0, -3]}>
      <MeshDistortMaterial
        color="#0078ff"
        attach="material"
        distort={0.7} // More fluid distortion
        speed={3} // Adjust speed
        roughness={0.4}
      />
    </Sphere>
  );
};

const Background: React.FC = () => {
  return (
    <Canvas className="absolute inset-0 w-full h-full -z-10">
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1.5} /> {/* Increased Light */}
        <directionalLight position={[2, 2, 1]} intensity={2} />
        <AnimatedSphere />
      </Suspense>
    </Canvas>
  );
};

export default Background;
