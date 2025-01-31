import React, { useEffect } from "react";
import * as THREE from "three";
import Modernizr from "modernizr"; // Importing Modernizr

const ParticleEffect = () => {
  useEffect(() => {
    if (!Modernizr.webgl) {
      alert("Your browser doesn't support WebGL");
      return;
    }

    let mouseX = 0,
      mouseY = 0;
    let camera, scene, renderer, p;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    // Set up the camera
    camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    camera.position.z = 300;

    // Create a new scene
    scene = new THREE.Scene();

    // Create the particle geometry and material
    const p_geom = new THREE.Geometry();
    const p_material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.9,
    });

    // Loading manager
    const manager = new THREE.LoadingManager();
    manager.onProgress = (item, loaded, total) => {
      // console.log(item, loaded, total);
    };

    // Load the 3D model (if needed)
    const loader = new THREE.OBJLoader(manager);
    loader.load(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/40480/head.obj",
      (object) => {
        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            const scale = 8;
            child.geometry.vertices.forEach((vertex) => {
              p_geom.vertices.push(
                new THREE.Vector3(
                  vertex.x * scale,
                  vertex.y * scale,
                  vertex.z * scale
                )
              );
            });
          }
        });
        scene.add(p);
      }
    );

    p = new THREE.Points(p_geom, p_material);

    // Set up the WebGL renderer
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // Append the renderer's canvas to the DOM
    document.querySelector(".particlehead").appendChild(renderer.domElement);

    // Event listeners
    const onWindowResize = () => {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const onMouseMove = (event) => {
      mouseX = (event.clientX - windowHalfX) / 2;
      mouseY = (event.clientY - windowHalfY) / 2;
    };

    // Add event listeners
    window.addEventListener("resize", onWindowResize, false);
    document
      .querySelector(".particlehead")
      .addEventListener("mousemove", onMouseMove, false);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Camera movement based on mouse position
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", onWindowResize);
      document
        .querySelector(".particlehead")
        .removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <div className="particlehead" />;
};

export default ParticleEffect;
