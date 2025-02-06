import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Tshirts = ({ isMobile }) => {
  const tshirt = useGLTF("./tshirt-white/tshirt.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <primitive
        object={tshirt.scene}
        scale={isMobile ? 0.5 : 1.2}
        position={isMobile ? [0, -2, 0] : [0, -3.7, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

export const TshirtCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 200px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={10}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Use the correctly named component */}
        <Tshirts isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default TshirtCanvas;