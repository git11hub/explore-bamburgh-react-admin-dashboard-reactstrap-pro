import React from 'react';

import { Card } from 'reactstrap';

import TextareaAutosize from 'react-autosize-textarea';
export default function LivePreviewExample() {
  return (
    <>
      <Card className="p-5 shadow-xxl">
        <TextareaAutosize
          className="form-control"
          style={{ maxHeight: 150, boxSizing: 'border-box' }}
          defaultValue={'Write something here... Max height is set to 150px'}
        />
      </Card>
    </>
  );
}
