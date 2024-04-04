import React from 'react';

import 'aframe';
import { Entity, Scene } from 'aframe-react';

import { Row, Col } from 'react-bootstrap';

import { UserState } from '../dataContext';

export const WebXR = () => {
    const {mode, theme } = UserState();
    
    return (
        <div style={theme===true ? {backgroundColor: '#242424'} : {backgroundColor: '#b0c4de'}}>
            {mode==='ar' && <div>
                <model-viewer
                    autoplay 
                    ar
                    ar-modes="webxr scene-viewer quick-look"
                    src={'/models/vr_headset.glb'}
                    loading="eager"
                    shadow-intensity="1"
                    auto-rotate 
                    camera-controls
                    style={{
                        width: '100vw', height: '50vh', margin: '1%',
                        zIndex: 500, background: 'transparent',
                    }}
                ></model-viewer>
            </div>}

            {mode==='vr' && <div>
                <div style={{
                    width: '100vw', height: '50vh', margin: '2%', 
                    zIndex: 50, background: 'transparent', 
                }}>
                    <Scene>
                        <Entity geometry={{primitive: 'torus'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}} />
                        <Entity light={{type: 'point'}} />
                        {/* <Entity gltf-model={{src: '/models/laptop.gltf'}} /> */}
                        <Entity text={{value: 'Hello, WebVR!'}} />
                    </Scene>
                </div>
            </div>}
        </Row>
    );
};

export default WebXR;
