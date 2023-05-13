import React, { useRef, useEffect } from 'react';
import style from './CameraStream.module.css';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Webcam from 'react-webcam';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const Model = ({ modelUrl }) => {
  const gltf = useLoader(GLTFLoader, modelUrl);
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};

const CameraStream = () => {
  const webcamRef = useRef(null);
  const modelUrl = '/models/chair/scene.gltf';

  useEffect(() => {
    if (webcamRef.current) {
      const updateTexture = () => {
        if (webcamRef.current.video.readyState === 4) {
          // Commented out since it's not used anywhere
          // const videoTexture = new THREE.CanvasTexture(webcamRef.current.video);
        } else {
          requestAnimationFrame(updateTexture);
        }
      };
      updateTexture();
    }
  }, [webcamRef]);

  return (
    <div className={style.app}>
      <Webcam ref={webcamRef} className={style.webcamBackground} />
      <Canvas className={style.canvasForeground}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <OrbitControls />
        <Model modelUrl={modelUrl} />
      </Canvas>
      <div>
        <h1>React Fiber + Three.js + Laptop Camera</h1>
      </div>
    </div>
  );
}

export default CameraStream;
