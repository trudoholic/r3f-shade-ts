import {Canvas} from '@react-three/fiber'
import {OrbitControls, Environment} from '@react-three/drei'
import {Monster} from "./components/Monster"

const Illusion = () => {
  return (
    <Canvas>

      <ambientLight intensity={0.65} />
      <spotLight position={[60, 60, 30]} />
      <pointLight position={[0, -10, 10]} intensity={0.5} />
      <directionalLight position={[0, -7, 0]} intensity={0.5} />

      <Monster />
      <OrbitControls maxDistance={5} />
      <Environment preset="apartment" background />
    </Canvas>
  )
}
export default Illusion
