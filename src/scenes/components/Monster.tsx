const Eyes = ({ pos }) =>  {
  return (
    <mesh position={pos}>
      <sphereGeometry args={[0.1]} />
      <meshStandardMaterial color="black" roughness={0} />
    </mesh>
  )
}

const Horns = ({ pos }) => {
  return (
    <mesh position={pos}>
      <coneGeometry args={[1.2, 5]} />
      <meshStandardMaterial color="black" metalness={1} roughness={0} />
    </mesh>
  )
}

const Face = () => {
  return (
    <mesh>
      <sphereGeometry args={[2, 100, 100]} />
      <meshStandardMaterial color="red" />
    </mesh>
  )
}

export const Monster = () => {
  return (
    <>
      <Face />
      <Horns pos={[-2, 2, -3]} />
      <Horns pos={[2, 2, -3]} />
      <Eyes pos={[-0.4, 0.2, 3]} />
      <Eyes pos={[0.4, 0.2, 3]} />
    </>
  )
}
