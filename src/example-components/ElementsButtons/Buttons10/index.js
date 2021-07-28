import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button color="facebook" className="m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['fab', 'facebook']}
              className="font-size-lg"
            />
          </span>
          <span className="btn-wrapper--label">Facebook</span>
        </Button>
        <Button color="twitter" className="m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['fab', 'twitter']}
              className="font-size-lg"
            />
          </span>
          <span className="btn-wrapper--label">Twitter</span>
        </Button>
        <Button color="google" className="m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['fab', 'google']}
              className="font-size-lg"
            />
          </span>
          <span className="btn-wrapper--label">Google</span>
        </Button>
        <Button color="instagram" className="m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['fab', 'instagram']}
              className="font-size-lg"
            />
          </span>
          <span className="btn-wrapper--label">Instagram</span>
        </Button>
        <Button color="pinterest" className="m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['fab', 'pinterest']}
              className="font-size-lg"
            />
          </span>
          <span className="btn-wrapper--label">Pinterest</span>
        </Button>
        <Button color="youtube" className="m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['fab', 'youtube']}
              className="font-size-lg"
            />
          </span>
          <span className="btn-wrapper--label">Youtube</span>
        </Button>
        <Button color="slack" className="m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon icon={['fab', 'slack']} className="font-size-lg" />
          </span>
          <span className="btn-wrapper--label">Slack</span>
        </Button>
        <Button color="dribbble" className="m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['fab', 'dribbble']}
              className="font-size-lg"
            />
          </span>
          <span className="btn-wrapper--label">Dribbble</span>
        </Button>
        <Button color="github" className="m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['fab', 'github']}
              className="font-size-lg"
            />
          </span>
          <span className="btn-wrapper--label">Github</span>
        </Button>
      </div>
    </>
  );
}
