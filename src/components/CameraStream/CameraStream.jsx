import React, { useRef, useState, useEffect, useCallback } from 'react';
import style from './CameraStream.module.css';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, PositionalAudio, Html } from '@react-three/drei';
import Webcam from 'react-webcam';
import * as THREE from 'three';

const Model = ({ modelUrl, position }) => {
  const gltf = useLoader(GLTFLoader, modelUrl);
  return (
    <primitive object={gltf.scene} position={position} scale={0.4} />
  );
};

const CameraStream = () => {
  const webcamRef = useRef(null);
  const [modelPosition, setModelPosition] = useState([0, 0, 0]);

  const handleTouchMove = useCallback((event) => {
    // This is a simplified example. You'll need to map touch coordinates to your 3D space.
    setModelPosition([event.touches[0].clientX, event.touches[0].clientY, 0]);
  }, []);

  useEffect(() => {
    window.addEventListener('touchmove', handleTouchMove);
    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleTouchMove]);

  const modelUrl = '/models/chair/scene.gltf';

  return (
    <div className={style.app}>
      <Webcam ref={webcamRef} className={style.webcamBackground} />
      <Canvas className={style.canvasForeground}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <OrbitControls />
        <Model modelUrl={modelUrl} position={modelPosition} />
      </Canvas>
      <div>
        <h1>React Fiber + Three.js + Laptop Camera</h1>
      </div>
    </div>
  );
}

export default CameraStream;
