import React, { useState } from 'react';

import { Card, CardHeader, Button } from 'reactstrap';

import { useDropzone } from 'react-dropzone';
import { useEffect } from 'react';

import { Upload, Check, X, User } from 'react-feather';

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
      className="rounded avatar-image overflow-hidden d-140 bg-neutral-success text-center font-weight-bold text-success d-flex justify-content-center align-items-center">
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
        <CardHeader>
          <div className="card-header--title text-center d-block">
            <small>Users</small>
            <b>Update Profile Avatar</b>
          </div>
        </CardHeader>
        <div className="py-4 d-flex align-items-center justify-content-center">
          <div className="dropzone rounded shadow-xxl">
            <div {...getRootProps({ className: 'dropzone-upload-wrapper' })}>
              <input {...getInputProps()} />
              <div className="dropzone-inner-wrapper d-140 rounded dropzone-avatar">
                <div className="avatar-icon-wrapper d-140 rounded m-2">
                  <Button
                    color="link"
                    onClick={open}
                    className="avatar-button badge shadow-sm btn-icon badge-position badge-position--top-right border-2 text-indent-0 d-40 badge-circle badge-second text-white">
                    <Upload className="d-20" />
                  </Button>

                  <div>
                    {isDragAccept && (
                      <div className="rounded overflow-hidden d-140 bg-success text-center font-weight-bold text-white d-flex justify-content-center align-items-center">
                        <Check className="d-40" />
                      </div>
                    )}
                    {isDragReject && (
                      <div className="rounded overflow-hidden d-140 bg-danger text-center font-weight-bold text-white d-flex justify-content-center align-items-center">
                        <X className="d-60" />
                      </div>
                    )}
                    {!isDragActive && (
                      <div className="rounded overflow-hidden d-140 bg-neutral-dark text-center font-weight-bold text-black-50 d-flex justify-content-center align-items-center">
                        <User className="d-50" />
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
