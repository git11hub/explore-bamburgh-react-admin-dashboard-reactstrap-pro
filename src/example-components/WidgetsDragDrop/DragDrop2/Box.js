import React from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';

import { Button } from 'reactstrap';

const Box = ({ connectDragSource }) =>
  connectDragSource(
    <div>
      <Button size="lg" color="warning">
        Drag me
      </Button>
    </div>
  );
export default DragSource(
  ItemTypes.BOX,
  {
    beginDrag: () => ({})
  },
  (connect) => ({
    connectDragSource: connect.dragSource()
  })
)(Box);
