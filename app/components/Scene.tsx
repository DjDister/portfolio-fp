import { useGLTF } from "@react-three/drei";

export function Desk() {
  const { scene } = useGLTF("/untitled2.glb");

  return <primitive object={scene} />;
}

// export function Camera() {
//   const { nodes, materials } = useGLTF("/level-react-draco.glb");
//   const [spring, api] = useSpring(
//     () => ({ "rotation-z": 0, config: { friction: 40 } }),
//     []
//   );
//   useEffect(() => {
//     let timeout;
//     const wander = () => {
//       api.start({ "rotation-z": Math.random() });
//       timeout = setTimeout(wander, (1 + Math.random() * 2) * 800);
//     };
//     wander();
//     return () => clearTimeout(timeout);
//   }, []);
//   return (
//     <a.group
//       position={[-0.58, 0.83, -0.03]}
//       rotation={[Math.PI / 2, 0, 0.47]}
//       {...spring}
//     >
//       <mesh geometry={nodes.Camera.geometry} material={nodes.Camera.material} />
//       <mesh geometry={nodes.Camera_1.geometry} material={materials.Lens} />
//     </a.group>
//   );
// }
