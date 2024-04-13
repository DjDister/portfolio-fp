import { useGLTF } from "@react-three/drei";

export function Desk() {
  const { scene } = useGLTF("/desk_model.glb");

  return <primitive object={scene} />;
}
