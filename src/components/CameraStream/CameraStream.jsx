import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Webcam from 'react-webcam';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Vector2, Raycaster } from 'three';

const Model = ({ modelUrl, position }) => {
  const gltf = useLoader(GLTFLoader, modelUrl);
  return <primitive object={gltf.scene} scale={0.4} position={position} />;
};

const Scene = () => {
  const { camera, scene } = useThree();
  const [modelPosition, setModelPosition] = useState([0, 0, 0]);
  const modelUrl = '/models/chair/scene.gltf';

  const handleMouseMove = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const mouse = new Vector2(
      (x / window.innerWidth) * 2 - 1,
      -(y / window.innerHeight) * 2 + 1
    );

    const raycaster = new Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      setModelPosition(intersects[0].point);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return <Model modelUrl={modelUrl} position={modelPosition} />;
};

const CameraStream = () => {
  const webcamRef = useRef(null);

  return (
    <div className="app">
      <Webcam ref={webcamRef} className="webcamBackground" />
      <Canvas className="canvasForeground">
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <OrbitControls />
        <Scene />
      </Canvas>
      <div>
        <h1>React Fiber + Three.js + Laptop Camera</h1>
      </div>
    </div>
  );
}

export default CameraStream;
