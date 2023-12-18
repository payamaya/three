import { Canvas } from '@react-three/fiber'
import Model from './Model'
import { OrbitControls, Stage } from '@react-three/drei'

const Chair = () => {
  return (
    <Canvas>
      <Stage environment={'city'} intensity={1}>
        <Model className='Model' />
        {/* <Environment preset='sunset' /> */}
        <OrbitControls enableZoom={false} />
      </Stage>
    </Canvas>
  )
}

export default Chair
