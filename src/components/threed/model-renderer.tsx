import { Canvas } from "@react-three/offscreen";
import KeyBoardHR from "../ui/keyboard";
import { OrbitControls } from "@react-three/drei";
import { Suspense, lazy } from "react";

const Scene = lazy(() => import("./scene"));

const worker = new Worker(new URL("./worker", import.meta.url), {
    type: "module",
});

export default function ModelRenderer() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Canvas
                    worker={worker}
                    fallback={<Scene />}
                    className="w-full h-full">
                    <KeyBoardHR />
                    <OrbitControls
                        enableZoom={false}
                        autoRotate={true}
                        autoRotateSpeed={0.5}
                    />
                    <directionalLight position={[20, 15, 5]} />
                </Canvas>
            </Suspense>
        </div>
   ) 
}
