"use client";

import React from "react";
import { useGLTF } from "@react-three/drei";
import { useMediaQuery } from "@/lib/useMediaQuery";

export default function KeyBoardHR() {
  const nonMobile = useMediaQuery("(min-width: 640px)");
  const Medium = useMediaQuery("(min-width: 768px)");
  const Large = useMediaQuery("(min-width: 1024px)");
  const { scene } = useGLTF("/key_board.gltf");
  return (
    <>
      {nonMobile ? (
        Medium ? (
          Large ? (
            <mesh scale={[0.35, 0.35, 0.35]}>
              <primitive
                object={scene}
                rotation={[0, Math.PI / 2, Math.PI / 4]}
                zoom={0.5}
              />
            </mesh>
          ) : (
            <mesh scale={[0.29, 0.29, 0.29]}>
              <primitive
                object={scene}
                rotation={[0, Math.PI / 2, Math.PI / 4]}
                zoom={0.5}
              />
            </mesh>
          )
        ) : (
          <mesh scale={[0.25, 0.25, 0.25]}>
            <primitive
              object={scene}
              rotation={[0, Math.PI / 2, Math.PI / 4]}
              zoom={0.5}
            />
          </mesh>
        )
      ) : (
        <mesh scale={[0.31, 0.31, 0.31]}>
          <primitive object={scene} rotation={[0, Math.PI / 2, Math.PI / 4]} />
        </mesh>
      )}
    </>
  );
}

useGLTF.preload("/key_board.gltf");
