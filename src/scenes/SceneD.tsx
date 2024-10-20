import {Canvas} from '@react-three/fiber'
import {Sphere} from '@react-three/drei'

const SceneD = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.2} />
      <directionalLight intensity={0.5} />
      {/*<Layout />*/}
      <Sphere args={[1, 16, 16]}>
        <meshLambertMaterial attach="material" color="white" />
      </Sphere>
    </Canvas>
  )
}
export default SceneD
