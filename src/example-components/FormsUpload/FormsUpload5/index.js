import React, { useState } from 'react';

import { Card, Button } from 'reactstrap';

import { useDropzone } from 'react-dropzone';
import { useEffect } from 'react';

import { Check, X, User, Edit2 } from 'react-feather';

export default function LivePreviewExample() {
  const [files, setFiles] = useState([]);
  const {
    isDragActive,
    isDragAccept,
    isDragReject,
    open,
    getRootProps,
    getInputProps
  } = useDropzone({
    noClick: true,
    noKeyboard: true,
    multiple: false,
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  const thumbs = files.map((file) => (
    <div
      key={file.name}
      className="rounded-circle avatar-image overflow-hidden d-100 bg-neutral-success text-center font-weight-bold text-success d-flex justify-content-center align-items-center">
      <img
        className="img-fluid img-fit-container rounded-sm"
        src={file.preview}
        alt="..."
      />
    </div>
  ));

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <>
      <Card className="card-box mb-5">
        <div className="py-4 d-flex align-items-center justify-content-center">
          <div className="dropzone rounded-circle shadow-sm">
            <div {...getRootProps({ className: 'dropzone-upload-wrapper' })}>
              <input {...getInputProps()} />
              <div className="dropzone-inner-wrapper d-100 rounded-circle dropzone-avatar">
                <div className="avatar-icon-wrapper d-100 rounded-circle m-2">
                  <Button
                    color="link"
                    onClick={open}
                    className="avatar-button badge shadow-xxl btn-icon badge-position badge-position--bottom-right border-2 text-indent-0 d-30 badge-circle badge-success hover-scale-lg text-white">
                    <Edit2 className="w-50" />
                  </Button>

                  <div>
                    {isDragAccept && (
                      <div className="rounded-circle overflow-hidden d-100 bg-success text-center font-weight-bold text-white d-flex justify-content-center align-items-center">
                        <Check className="d-30" />
                      </div>
                    )}
                    {isDragReject && (
                      <div className="rounded-circle overflow-hidden d-100 bg-danger text-center font-weight-bold text-white d-flex justify-content-center align-items-center">
                        <X className="d-40" />
                      </div>
                    )}
                    {!isDragActive && (
                      <div className="rounded-circle overflow-hidden d-100 bg-second text-center font-weight-bold text-white-50 d-flex justify-content-center align-items-center">
                        <User className="d-30" />
                      </div>
                    )}
                  </div>

                  {thumbs.length > 0 && <div>{thumbs}</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
