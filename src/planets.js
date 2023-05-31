import { useFrame,extend,useThree } from '@react-three/fiber'; //we will rotate the shape with each frame that passes using this frame hook
import { useRef,useState} from "react"; // this we wil use for the rotation to refrence the location of the shape
import { useLoader } from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Stars } from '@react-three/drei';
extend({OrbitControls: OrbitControls})

export const Planets =() =>{

    
    const sunRef = useRef();
    const mercuryRef = useRef();
    const venusRef = useRef();
    const earthRef = useRef();
    const marsRef = useRef();
    const jupiterRef = useRef();
    const saturnRef = useRef();
    const uranusRef = useRef();
    const neptuneRef = useRef();
    const particlesRef = useRef();

    const {camera, gl} = useThree();

    const [currentTimePassed,setTime] = useState(0);

    useFrame((state, delta)=>{ // delta is the amount of time that passes between each frame. 
        sunRef.current.rotation.y += delta;

        mercuryRef.current.position.x = Math.sin(currentTimePassed * 1.2);
        mercuryRef.current.position.z = Math.cos(currentTimePassed * 1.2);
        mercuryRef.current.rotation.y += delta;

        venusRef.current.position.x =  Math.sin(currentTimePassed * 1) * 1.5;
        venusRef.current.position.z =  Math.cos(currentTimePassed * 1) * 1.5;
        venusRef.current.rotation.y += delta;

        earthRef.current.position.x =  Math.sin(currentTimePassed * 0.75) * 3;
        earthRef.current.position.z =  Math.cos(currentTimePassed * 0.75) * 3;
        earthRef.current.rotation.y += delta;

        marsRef.current.position.x =  Math.sin(currentTimePassed * 0.6) * 3.6;
        marsRef.current.position.z =  Math.cos(currentTimePassed * 0.6) * 3.6;
        marsRef.current.rotation.y += delta;

        jupiterRef.current.position.x =  Math.sin(currentTimePassed * 0.4) * 4.2;
        jupiterRef.current.position.z =  Math.cos(currentTimePassed * 0.4) * 4.2;
        jupiterRef.current.rotation.y += delta;

        saturnRef.current.position.x =  Math.sin(currentTimePassed * 0.4) * 5.7;
        saturnRef.current.position.z =  Math.cos(currentTimePassed * 0.4) * 5.7;
        saturnRef.current.rotation.y += delta;

        uranusRef.current.position.x =  Math.sin(currentTimePassed * 0.25) * 6.8;
        uranusRef.current.position.z =  Math.cos(currentTimePassed * 0.25) * 6.8;
        uranusRef.current.rotation.y += delta;

        neptuneRef.current.position.x =  Math.sin(currentTimePassed * 0.2) * 8;
        neptuneRef.current.position.z =  Math.cos(currentTimePassed * 0.2) * 8;
        neptuneRef.current.rotation.y += delta;
        

        setTime(currentTimePassed+delta);
        
    })
    
    const sunModel = useLoader(GLTFLoader,'./sun.glb');
    const mercuryModel = useLoader(GLTFLoader,'./mercury.glb');
    const venusModel = useLoader(GLTFLoader,'./venus.glb');
    const earthModel = useLoader(GLTFLoader,'./earth.glb');
    const marsModel = useLoader(GLTFLoader,'./mars.glb');
    const jupiterModel = useLoader(GLTFLoader,'./jupiter.glb');
    const saturnModel = useLoader(GLTFLoader,'./saturn.glb');
    const neptuneModel = useLoader(GLTFLoader,'./neptune.glb');
    const uranusModel = useLoader(GLTFLoader,'./uranus.glb');

    return (
        <>
       
        <OrbitControls args={[camera,gl.domElement]}/>
        <spotLight position={[0, 0, 0]} intensity={1}/>
        <directionalLight position={[-1, -9, -7]} intensity={4}/>

        <Stars/>
        <primitive 
        position-x ={0} 
        ref={sunRef} 
        object={sunModel.scene} 
        scale={0.05}/>
        
        <primitive
        position-y={0} 
        position-x={1} 
        ref={mercuryRef} 
        object={mercuryModel.scene} 
        scale={0.04}/>

        <primitive
        position-y = {0} 
        position-x ={2} 
        ref={venusRef} 
        object={venusModel.scene} 
        scale={0.05}/>

        <primitive
        position-y ={0} 
        position-x ={3}
        rotation-y ={2} 
        ref={earthRef} 
        object={earthModel.scene} 
        scale={0.07}/>

        <primitive
        position-y = {0} 
        position-x={3.6}
        ref={marsRef}
        object={marsModel.scene}
        scale={0.05}
        />

        <primitive
        position-y = {0} 
        position-x={4.2}
        ref={jupiterRef}
        object={jupiterModel.scene}
        scale={0.2}
        /> 

        <primitive
        position-y = {0} 
        position-x={5.7}
        ref={saturnRef}
        object={saturnModel.scene}
        scale={0.002}
        />

        <primitive
        position-y = {0} 
        position-x={6.8}
        ref={uranusRef}
        object={uranusModel.scene}
        scale={0.2}
        />

        <primitive
        position-y = {0} 
        position-x={8}
        ref={neptuneRef}
        object={neptuneModel.scene}
        scale={0.2} 
        /> 
    
    </>
    )
}
export default Planets;