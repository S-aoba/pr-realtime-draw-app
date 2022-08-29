import React from 'react'
import { Stage, Layer, Rect, Circle } from 'react-konva'
import './App.css'
const App: React.FC = () => {
  return (
    <div className="App">
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect x={100} y={500} width={50} height={50} fill="red" draggable />
          <Circle x={200} y={200} stroke="black" radius={50} draggable />
        </Layer>
      </Stage>
    </div>
  )
}

export default App
