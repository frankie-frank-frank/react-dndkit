import React, {useState} from 'react';
import {DndContext, DragEndEvent} from '@dnd-kit/core';

import Droppable from './Droppable';
import Draggable from './Draggable';

function App() {
  const [isDropped, setIsDropped] = useState(false);
  const [draggableNote, setDraggableNote] = useState<string>("Drag me")
  const draggableMarkup = ( <Draggable>{draggableNote}</Draggable> );
  
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyItems: 'center', gap: "2rem"}}>
      {!isDropped ? draggableMarkup : null}
      <Droppable>
        {isDropped ? draggableMarkup : 'Drop here'}
      </Droppable>
      </div>
    </DndContext>
  );
  
  function handleDragEnd(event: DragEndEvent) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }
}
export default App
