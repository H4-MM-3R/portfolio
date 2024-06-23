"use client";

import { useGLTF } from "@react-three/drei";

export default function KeyBoardHR() {
    const { scene } = useGLTF("/key_board.glb");
    return (
        <>
            <mesh scale={[0.26, 0.26, 0.26]}>
                <primitive object={scene} rotation={[0, -Math.PI / 2, -Math.PI / 2]} />
            </mesh>
        </>
    );
}

useGLTF.preload("/key_board.glb");
