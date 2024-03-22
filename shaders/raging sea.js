export const fragmentShader = `
    void main() {
        gl_FragColor = vec4(0.5, 0.8, 1.0, 1.0);
    }
`;

export const vertexShader = `
    void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;
        gl_Position = projectedPosition;
    }
`;