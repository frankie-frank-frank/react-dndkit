import React, { ReactNode } from 'react';
import {useDroppable} from '@dnd-kit/core';

function Droppable(props: {children: ReactNode}) {
  const {isOver, setNodeRef} = useDroppable({
    id: 'droppable',
  });
  
  return (
    <div ref={setNodeRef} style={{ color: isOver ? 'green' : undefined,}}>
      {props.children}
    </div>
  );
}

export default Droppable