import { useGLTF } from '@react-three/drei'
export default function Model(props) {
  const model = useGLTF('/chair.glb')

  return (
    <mesh>
      <ambientLight />
      <primitive object={model.scene} />
    </mesh>
  )
}
