import React,{useState,useEffect} from 'react'
import {Canvas} from '@react-three/fiber'
import css from '../styles/ModelPage.module.css'
import {Easy3DContext} from '../context/Easy3dContext';

import Floor from '../components/threeJsComponents/Floor';
import LightBulb from '../components/threeJsComponents/LightBulb';
import Box from '../components/threeJsComponents/Box';
import Controls from '../components/threeJsComponents/OrbitControls';
import Button from '../components/Button';
import {useContext} from 'react'

function modelPage() {
    const {models} = useContext(Easy3DContext);
    
    return (
        <>
            <div className="grid grid-cols-5">
                <div className={css.scene}>
                    <Canvas
                        shadows={true}
                        className={css.canvas}
                        camera={{
                          position: [0, 0, 10]
                        }}
                    >
                        <ambientLight color={"white"} intensity={0.3}/>
                        <LightBulb position={[0,3,0]}/>
                        <Box rotateXs={3} rotateY={0.2}/>
                        <Controls />
                        <Floor position={[0,-1,0]}/>
                    </Canvas>
                </div>
                <div className="col-span-1 grid grid-flow-row mx-auto border w-full items-start" style={{'height':'45vh'}}>
                    <div className='p-5'>
                        <h1 className="text-red-500 font-bold">{}</h1>
                        <Button text="Add to cart" color="bg-blue-500" padding="p-3"></Button>
                    </div>
                    
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                </div>
                    
            </div>
            <div className="grid grid-cols-3">
            
            </div>
        
        </>
        
    )
}

export default modelPage
