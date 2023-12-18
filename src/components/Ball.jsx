// import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'
// import gsap from 'gsap'
import { Canvas } from '@react-three/fiber'
import Cube from './Cube'

const Ball = () => {
  return (
    <div className='mexh'>
      <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
        <OrbitControls autoRotate enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Cube />
      </Canvas>
    </div>
  )
}

export default Ball

// const scene = new THREE.Scene()

// // Create Our Sphere
// const geometer = new THREE.SphereGeometry(3, 64, 64)
// // Material is how the geometery would look like
// const material = new THREE.MeshStandardMaterial({
//   color: '#00ff83',
// })

// // canvas background color
// scene.background = new THREE.Color('#241f1f')
// // Sizes
// const sizes = {
//   width: window.innerWidth,
//   height: window.innerHeight,
// }

// // mesh is the combination of the geomaetery and the material
// const mesh = new THREE.Mesh(geometer, material)
// scene.add(mesh)
// // Light
// const light = new THREE.PointLight(0xffffff, 30, 100)
// light.position.set(0, -10, 10)
// // light.intensity = 1.25
// light.castShadow = true
// scene.add(light)

// // Camera is where to set it up 'where it will look at'
// const camera = new THREE.PerspectiveCamera(
//   45,
//   sizes.width / sizes.height,
//   0.1,
//   100
// )
// camera.position.z = 20
// scene.add(camera)

// //  Renderer
// const canvas = document.querySelector('.webgl')
// const renderer = new THREE.WebGL1Renderer({ canvas })
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(10)
// renderer.render(scene, camera)

// // controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true
// controls.enablePan = false
// controls.enableZoom = false
// controls.autoRotate = true
// controls.autoRotateSpeed = 5

// // Resizes
// window.addEventListener('resize', () => {
//   // console.log(window.innerWidth)
//   sizes.width = window.innerWidth
//   sizes.height = window.innerHeight
//   // Uppdate camer
//   camera.aspect = sizes.width / sizes.height
//   camera.updateProjectionMatrix()
//   renderer.setSize(sizes.width, sizes.height)
// })

// const loop = () => {
//   controls.update()
//   // mesh.position.x += 0.05
//   renderer.render(scene, camera)
//   window.requestAnimationFrame(loop)
// }
// loop()

// // Timeline magic
// const tl = gsap.timeline({ defaults: { rotation: 0 } })
// tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 })

// tl.fromTo('nav', { y: '-1000%' }, { y: '0%' })
// tl.fromTo('.title', { opacity: 0 }, { opacity: 1 })

// // Mouse Animation color
// let mouseDown = false
// let rgb = []
// window.addEventListener('mousedown', () => (mouseDown = true))
// window.addEventListener('mouseup', () => (mouseDown = true))
// window.addEventListener('mousemove', (e) => {
//   e.preventDefault()
//   if (mouseDown) {
//     rgb = [
//       Math.round((e.pageX / sizes.width) * 255),
//       Math.round((e.pageY / sizes.height) * 255),
//       150,
//     ]
//     let newColor = new THREE.Color(`rgb(${rgb.join(',')})`)
//     gsap.to(mesh.material.color, {
//       r: newColor.r,
//       g: newColor.g,
//       b: newColor.b,
//     })
//   }
// })
