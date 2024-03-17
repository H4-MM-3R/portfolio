"use client";

import { OrbitControls } from "@react-three/drei";
import KeyBoardHR from "../ui/keyboard";

export default function Scene() {
    return (
        <>
            <KeyBoardHR />
            <OrbitControls
                enableZoom={false}
                autoRotate={true}
                autoRotateSpeed={0.5}
            />
            <directionalLight position={[20, 15, 5]} />
        </>
    );
}
