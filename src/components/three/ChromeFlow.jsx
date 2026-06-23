import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import { MathUtils } from 'three';

/**
 * Liquid-chrome flowing form — the studio's signature object.
 * A nod to "Five Rivers" / flow. Slowly morphs, tilts toward the cursor,
 * and drifts + shrinks as the hero scrolls away.
 */
export default function ChromeFlow({ reduced = false }) {
  const mesh = useRef();
  const mat = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const base = useRef(1);

  useEffect(() => {
    const setBase = () => {
      base.current = window.innerWidth < 820 ? 0.6 : 1;
    };
    setBase();
    // Track the cursor from the window so the canvas can stay click-through.
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('resize', setBase);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('resize', setBase);
    };
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    const p = Math.min(scrollY / (window.innerHeight * 1.15), 1); // hero scroll progress

    if (mesh.current) {
      const targetRotX = mouse.current.y * 0.2 + p * 1.4;
      const targetRotY = mouse.current.x * 0.3 + t * 0.05 + p * 0.7;
      mesh.current.rotation.x = MathUtils.lerp(mesh.current.rotation.x, targetRotX, 0.045);
      mesh.current.rotation.y = MathUtils.lerp(mesh.current.rotation.y, targetRotY, 0.045);

      const targetScale = base.current * MathUtils.lerp(1, 0.58, p);
      const s = MathUtils.lerp(mesh.current.scale.x, targetScale, 0.06);
      mesh.current.scale.setScalar(s);

      mesh.current.position.x = MathUtils.lerp(mesh.current.position.x, 1.7 + p * 1.6, 0.05);
      mesh.current.position.y = MathUtils.lerp(mesh.current.position.y, 0.2 + p * 0.5, 0.05);
    }

    if (mat.current && !reduced) {
      mat.current.distort = 0.3 + Math.sin(t * 0.45) * 0.06 + p * 0.12;
    }
  });

  return (
    <mesh ref={mesh} position={[1.7, 0.2, 0]}>
      <icosahedronGeometry args={[1.4, 64]} />
      <MeshDistortMaterial
        ref={mat}
        color="#d9dde3"
        metalness={0.5}
        roughness={0.2}
        distort={0.32}
        speed={reduced ? 0 : 1.4}
        envMapIntensity={1.2}
      />
    </mesh>
  );
}
