import {
  Float,
  Environment,
  useGLTF,
  ContactShadows,
  PresentationControls,
  Html,
  Text,
} from "@react-three/drei"

export default function Experience() {
  const computer = useGLTF(
    "https://threejs-journey.com/resources/models/macbook_model.gltf"
  )
  return (
    <>
      <Environment preset="city" />
      <color args={["#241a1a"]} attach="background" />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            intensity={65}
            width={2.5}
            height={1.65}
            position={[0, 0, 0]}
            color={"#ff6900"}
            position={[0, 0.55, -1.15]}
            rotation={[-0.1, Math.PI, 0]}
          />
          <primitive object={computer.scene} position={[0, -1.2, 0]}>
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation={[-0.256, 0, 0]}
            >
              <iframe src="https://maxwellkirwin.co.uk" />
            </Html>
          </primitive>

          <Text
            fontSize={0.75}
            color="#fff"
            maxWidth={2}
            font="./bangers-v20-latin-regular.woff"
            position={[2, 0.75, 0.75]}
            rotation={[0, -1.25, 0]}
            textAlign={"left"}
          >
            Maxwell Kirwin
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows
        position={[0, -1.4, 0]}
        opacity={0.4}
        scale={5}
        blur={2.4}
      />
    </>
  )
}
