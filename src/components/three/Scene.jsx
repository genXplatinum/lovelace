import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Lightformer, ContactShadows } from '@react-three/drei';
import ChromeFlow from './ChromeFlow';

/**
 * Fixed background canvas for the home hero. Studio lighting is built from
 * local Lightformers (no external HDR fetch) with a whisper of signal-blue
 * in the reflections.
 */
export default function Scene() {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <Canvas
      className="scene-canvas"
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      onCreated={({ gl }) => gl.setClearAlpha(0)}
    >
      <Suspense fallback={null}>
        {/* Direct studio lights so the form reads light even where the
            environment map is dark */}
        <ambientLight intensity={1.9} />
        <directionalLight position={[5, 6, 5]} intensity={3} />
        <directionalLight position={[-5, 0, 2]} intensity={1} color="#eaf0ff" />

        <ChromeFlow reduced={reduced} />

        <Environment resolution={256} frames={1}>
          {/* Bright surround highlights */}
          <Lightformer form="rect" intensity={1.2} position={[0, 0, 6]} scale={[18, 18, 1]} color="#ffffff" />
          <Lightformer form="rect" intensity={2.6} position={[0, 5, 2]} scale={[12, 5, 1]} color="#ffffff" />
          <Lightformer form="rect" intensity={1.4} position={[-6, -1, 3]} scale={[8, 10, 1]} color="#eef0f5" />
          <Lightformer form="rect" intensity={1.2} position={[6, 0, 3]} scale={[6, 10, 1]} color="#f2f3f6" />
          <Lightformer form="rect" intensity={1.0} position={[0, -5, 1]} scale={[12, 5, 1]} color="#e9ebf0" />
          {/* A whisper of signal-blue in the reflections */}
          <Lightformer form="ring" intensity={2} position={[4.5, 3, -2]} scale={3.5} color="#1e37f0" />
        </Environment>

        <ContactShadows
          position={[0, -1.85, 0]}
          opacity={0.32}
          scale={14}
          blur={2.7}
          far={4.2}
          color="#0e0f12"
        />
      </Suspense>
    </Canvas>
  );
}
