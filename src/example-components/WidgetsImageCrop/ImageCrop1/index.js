import React, { Component } from 'react';

import { Row, Col, CustomInput, Button, Alert } from 'reactstrap';

import Cropper from 'react-cropper';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';

const src = stock3;

export default class LivePreviewExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src,
      cropResult: null
    };
    this.cropImage = this.cropImage.bind(this);
    this.onChange = this.onChange.bind(this);
    this.useDefaultImage = this.useDefaultImage.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({ src: reader.result });
    };
    reader.readAsDataURL(files[0]);
  }

  cropImage() {
    if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
      return;
    }
    this.setState({
      cropResult: this.cropper.getCroppedCanvas().toDataURL()
    });
  }

  useDefaultImage() {
    this.setState({ src });
  }

  render() {
    return (
      <>
        <div className="d-flex align-items-center flex-column justify-content-center">
          <div className="pb-4">
            <CustomInput
              type="file"
              id="exampleCustomFileBrowser"
              onChange={this.onChange}
              name="customFile"
              label="Upload new image"
            />
            <div className="divider w-100 my-4" />
            <Button
              color="primary"
              size="lg"
              className="m-2"
              onClick={this.useDefaultImage}>
              Use Default Image
            </Button>
            <Button
              size="lg"
              className="m-2"
              color="danger"
              onClick={this.cropImage}>
              Crop Image
            </Button>
          </div>
          <Cropper
            style={{ height: 400, width: '100%' }}
            preview=".img-preview"
            guides={false}
            src={this.state.src}
            ref={(cropper) => {
              this.cropper = cropper;
            }}
          />
        </div>
        <div className="divider my-4" />
        <Row className="align-items-center justify-content-center">
          <Col md="6">
            <div className="font-weight-bold text-center font-size-xl mb-4">
              Cropping Result
            </div>
            {!this.state.cropResult && (
              <Alert
                className="alerts-alternate text-center p-4 m-4"
                color="warning">
                Click the crop button!
              </Alert>
            )}
            {this.state.cropResult && (
              <div
                className="shadow-xxl m-4 rounded-lg overflow-hidden w-100 img-preview d-flex justify-content-center"
                style={{ height: 340 }}>
                <img
                  className="rounded-lg img-fit-container"
                  src={this.state.cropResult}
                  alt="..."
                />
              </div>
            )}
          </Col>
          <Col md="6">
            <div className="font-weight-bold text-center font-size-xl mb-4">
              Preview
            </div>
            <div
              className="shadow-xxl m-4 rounded-lg overflow-hidden w-100 d-flex justify-content-center"
              style={{ height: 340 }}>
              <div className="rounded-lg img-fit-container img-preview" />
            </div>
          </Col>
        </Row>
      </>
    );
  }
}
