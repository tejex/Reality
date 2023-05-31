import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber';
import Planets from './planets';

function App() {
  return (
    <div className="h-full w-full">
      <div style={{ width: "100vw", height: "100vh" }}>
    <Canvas
        camera={ {
        fov: 300,
        near: 0.1,
        far: 300, 
        position: [-1, 0, 5],
        }}
    >
        <Planets/>
    </Canvas>
      </div>
    </div>  
  );
}

export default App;
