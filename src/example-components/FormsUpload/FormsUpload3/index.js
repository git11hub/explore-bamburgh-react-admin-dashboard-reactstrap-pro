import React, { useState } from 'react';

import { Row, Col, Card, CardHeader, Alert } from 'reactstrap';

import { useDropzone } from 'react-dropzone';
import { useEffect } from 'react';

import { UploadCloud, Check, X } from 'react-feather';
import illustration1 from '../../../assets/images/illustrations/pack1/time.svg';

export default function LivePreviewExample() {
  const [files, setFiles] = useState([]);
  const {
    isDragActive,
    isDragAccept,
    isDragReject,
    getRootProps,
    getInputProps
  } = useDropzone({
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
    <Col md="3" className="p-2" key={file.name}>
      <div className="p-2 bg-white shadow-xxl border-dark card-box d-flex overflow-hidden rounded-sm">
        <img
          className="img-fluid img-fit-container rounded-sm"
          src={file.preview}
          alt="..."
        />
      </div>
    </Col>
  ));

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <>
      <Card className="card-box mb-5 mb-lg-0">
        <CardHeader>
          <div className="card-header--title">
            <small>Upload</small>
            <b>Complete Profile Verification</b>
          </div>
          <div className="card-header--actions">
            <div className="d-flex align-items-center justify-content-between flex-row">
              <div className="d-40 rounded-circle bg-primary text-white font-weight-bold d-flex justify-content-center align-items-center">
                1
              </div>
              <div
                className="divider bg-dark rounded-lg mx-2 border-1 border-dark"
                style={{ width: 20 }}
              />
              <div className="d-30 rounded-circle bg-gray-100 text-dark d-flex justify-content-center align-items-center">
                2
              </div>
              <div
                className="divider bg-dark rounded-lg mx-2 border-1 border-dark"
                style={{ width: 20 }}
              />
              <div className="d-30 rounded-circle bg-gray-100 text-dark d-flex justify-content-center align-items-center">
                3
              </div>
            </div>
          </div>
        </CardHeader>
        <div className="p-4">
          <Row>
            <Col
              lg="7"
              className="d-flex align-items-center justify-content-center">
              <div className="divider-v divider-v-lg d-none d-lg-block" />
              <div className="p-3">
                <img
                  src={illustration1}
                  className="d-block"
                  style={{ height: 100 }}
                  alt="..."
                />
                <div className="pl-3">
                  <div className="font-weight-bold pt-3 pb-1 font-size-lg text-capitalize">
                    Personal ID Verification
                  </div>
                  <div className="text-black-50">
                    This verification step required you to upload your national
                    identity card
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="5">
              <div className="dropzone">
                <div
                  {...getRootProps({ className: 'dropzone-upload-wrapper' })}>
                  <input {...getInputProps()} />
                  <div className="dropzone-inner-wrapper dropzone-inner-wrapper-alt">
                    {isDragAccept && (
                      <div>
                        <div className="d-100 btn-icon mb-3 hover-scale-rounded bg-success shadow-success-sm rounded-lg text-white">
                          <Check className="d-50" />
                        </div>
                        <div className="font-size-xs text-success">
                          We're ready to start!
                        </div>
                      </div>
                    )}
                    {isDragReject && (
                      <div>
                        <div className="d-100 btn-icon mb-3 hover-scale-rounded bg-danger shadow-danger-sm rounded-lg text-white">
                          <X className="d-50" />
                        </div>
                        <div className="font-size-xs text-danger">
                          These files are not images!
                        </div>
                      </div>
                    )}
                    {!isDragActive && (
                      <div>
                        <div className="d-90 btn-icon mb-3 hover-scale-rounded bg-white shadow-light-sm rounded-lg text-first">
                          <UploadCloud className="d-40" />
                        </div>
                        <div className="font-size-sm">
                          Drag and drop images here
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="card-footer p-3 bg-secondary">
          <div>
            <div className="font-weight-bold mb-3 text-uppercase text-dark font-size-sm text-center">
              Uploaded Files
            </div>
            {thumbs.length <= 0 && (
              <div className="text-first text-center font-size-sm">
                Uploaded demo images previews will appear here!
              </div>
            )}
            {thumbs.length > 0 && (
              <div>
                <Alert color="success" className="text-center mb-3">
                  You have uploaded <b>{thumbs.length}</b> files!
                </Alert>
                <Row className="no-gutters">{thumbs}</Row>
              </div>
            )}
          </div>
        </div>
      </Card>
    </>
  );
}
