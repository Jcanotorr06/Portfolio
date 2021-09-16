import {Suspense} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import React, { useRef } from 'react'
import { useGLTF, ContactShadows, Environment } from '@react-three/drei'

const Mesh = (props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/brain.gltf')
    useFrame(({clock, mouse}) =>{
        const t = clock.getElapsedTime();
        group.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 5
        group.current.rotation.x = Math.cos(t / 4) / 3
        group.current.rotation.y = 0.3*t
        group.current.position.y = (1 + Math.sin(t / 1.5)) / 10
        
    })
    return (
        <group ref={group} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[17.57, 2.86, -0.26]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.98, 1.98, 1.98]}>
            <group name="frontal" position={[3.26, 0, 2.88]}>
                <mesh
                name="frontal_01_-_Default_0"
                geometry={nodes['frontal_01_-_Default_0'].geometry}
                material={materials.Shiny}
                position={[-12.15, -0.13, -4.33]}
                rotation={[0, 0, 0.01]}
                scale={0.1}
                />
            </group>
            </group>
        </group>
        </group>
    </group>
    )
}

const Brain = () =>{
    return(
        <Canvas shadows className="min-h-screen bg-transparent inset-0 min-w-screen" style={{position:'absolute'}} resize={true}>
            <ambientLight intensity={0.1} />
            <pointLight intensity={0.8} position={[0,100,100]} />
            <Suspense fallback={null}>
                <Mesh/>
                <Environment preset="night" />
                <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, -0.9]} opacity={0.25} width={10} height={10} blur={2.5} far={2} />
            </Suspense>
        </Canvas>
    )
}

export default Brain
