import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import "./ParticleHead.css";

const ParticleModel = () => {
  const meshRef = useRef();

  useEffect(() => {
    gsap.to(meshRef.current.rotation, {
      y: Math.PI * 2,
      duration: 5,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshBasicMaterial color="white" wireframe />
    </mesh>
  );
};

const ParticleHead = () => {
  return (
    <div className="particlehead" style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <ParticleModel />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ParticleHead;
