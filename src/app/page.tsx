"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Home() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // === BƯỚC 1: KHỞI TẠO SCENE ===
    const scene = new THREE.Scene();

    // === BƯỚC 2: KHỞI TẠO CAMERA ===
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = 5;

    // === BƯỚC 3: KHỞI TẠO RENDERER ===
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    mountRef.current.appendChild(renderer.domElement);

    // === BƯỚC 4: TẠO MESH (Hình Khối + Vật Liệu) ===
    const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const material = new THREE.MeshStandardMaterial({ 
      color: 0x00ffcc,  // Màu xanh diụ
      roughness: 0.1,
      metalness: 0.8
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // === BƯỚC 5: KHỞI TẠO ÁNH SÁNG ===
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4); 
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xffaaff, 150);
    pointLight1.position.set(3, 4, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 80);
    pointLight2.position.set(-3, -4, -3);
    scene.add(pointLight2);

    // === VÒNG LẶP ANIMATION ===
    let reqId: number;
    const animate = () => {
      reqId = requestAnimationFrame(animate);

      // Chuyển động xoay cơ bản
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();

    // === XỬ LÝ RESIZE MÀN HÌNH ===
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // === CLEANUP BỘ NHỚ ===
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(reqId);
      
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <div 
        ref={mountRef} 
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }} 
      />
      
      <div style={{ position: 'absolute', top: '30px', left: '40px', zIndex: 10, pointerEvents: 'none' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0, letterSpacing: '-0.5px' }}>
          Giai đoạn 1: Three.js Core
        </h1>
        <p style={{ marginTop: '0.8rem', opacity: 0.8, fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.6 }}>
          Mô hình khối xoay sử dụng trực tiếp Three.js thuần bên trong một React Component. 
          Bao gồm 5 thành phần chính tạo nên một thế giới 3D.
        </p>
        
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {['Scene', 'Camera', 'Renderer', 'Mesh', 'Light'].map((item) => (
            <span key={item} style={{ padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', fontSize: '0.9rem', color: '#00ffcc' }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
