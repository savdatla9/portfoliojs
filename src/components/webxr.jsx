import React from 'react';

import 'aframe';

import { Entity, Scene } from 'aframe-react';
import { Row, Col } from 'react-bootstrap';

export const WebXR = ({xr}) => {
    return (
        <Row>
            {xr==='ar' && <Col xs={12} sm={6}>
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
                        width: '50vw', height: '50vh', margin: '2%', zIndex: 500,
                        background: 'transparent', borderRadius: '5px',
                    }}
                ></model-viewer>
            </Col>}

            {xr==='vr' && <Col xs={12} sm={6}>
                <div style={{
                    width: '50vw', height: '50vh', margin: '2%', zIndex: 50,
                    background: 'transparent', borderRadius: '5px',
                }}>
                    <Scene>
                        <Entity geometry={{primitive: 'torus'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}} />
                        <Entity light={{type: 'point'}} />
                        <Entity gltf-model={{src: '/models/laptop.gltf'}} />
                        <Entity text={{value: 'Hello, WebVR!'}} />
                    </Scene>
                </div>
            </Col>}
        </Row>
    );
};

export default WebXR;
