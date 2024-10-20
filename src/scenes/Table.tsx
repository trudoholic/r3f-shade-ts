import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Experience } from "./components/Experience"
// import { Interface } from "./components/Interface"

function Table() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 3, 8], fov: 42 }}>
        <color attach="background" args={["#ececec"]} />
        {/*<color attach="background" args={["#008000"]} />*/}
        <Experience />
        {/*<Environment preset="city" />*/}
        <Environment preset="apartment" />
        <axesHelper />
      </Canvas>
      {/*<Interface />*/}
    </>
  );
}

export default Table
