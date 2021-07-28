import React from 'react';

import { Card } from 'reactstrap';

import TextareaAutosize from 'react-autosize-textarea';
export default function LivePreviewExample() {
  return (
    <>
      <Card className="p-5 shadow-xxl">
        <TextareaAutosize
          className="form-control"
          placehlder="Write some lines here..."
        />
      </Card>
    </>
  );
}
