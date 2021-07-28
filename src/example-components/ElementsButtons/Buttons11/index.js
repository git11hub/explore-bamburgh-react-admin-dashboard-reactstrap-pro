import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UncontrolledTooltip, Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button
          color="facebook"
          className="btn-icon btn-pill d-60 p-0 m-2"
          id="FacebookBtnTooltip1567">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['fab', 'facebook']}
              className="font-size-lg"
            />
          </span>
        </Button>
        <UncontrolledTooltip target="FacebookBtnTooltip1567">
          Facebook
        </UncontrolledTooltip>
        <Button
          color="twitter"
          className="btn-icon btn-pill d-60 p-0 m-2"
          id="btnTwitterTooltip567">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['fab', 'twitter']}
              className="font-size-lg"
            />
          </span>
        </Button>
        <UncontrolledTooltip target="btnTwitterTooltip567">
          Twitter
        </UncontrolledTooltip>
        <Button
          color="google"
          className="btn-icon btn-pill d-60 p-0 m-2"
          id="btnGoogleTooltip567">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['fab', 'google']}
              className="font-size-lg"
            />
          </span>
        </Button>
        <UncontrolledTooltip target="btnGoogleTooltip567">
          Google
        </UncontrolledTooltip>

        <Button
          color="instagram"
          className="btn-icon btn-pill d-60 p-0 m-2"
          id="btnInstagramTooltip567">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['fab', 'instagram']}
              className="font-size-lg"
            />
          </span>
        </Button>
        <UncontrolledTooltip target="btnInstagramTooltip567">
          Instagram
        </UncontrolledTooltip>

        <Button
          color="pinterest"
          className="btn-icon btn-pill d-60 p-0 m-2"
          id="PinterestTooltip1567">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['fab', 'pinterest']}
              className="font-size-lg"
            />
          </span>
        </Button>
        <UncontrolledTooltip target="PinterestTooltip1567">
          Pinterest
        </UncontrolledTooltip>

        <Button
          color="youtube"
          className="btn-icon btn-pill d-60 p-0 m-2"
          id="YoutubeTooltip1567">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['fab', 'youtube']}
              className="font-size-lg"
            />
          </span>
        </Button>
        <UncontrolledTooltip target="YoutubeTooltip1567">
          Youtube
        </UncontrolledTooltip>
      </div>
      <div className="divider my-3" />

      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button
          color="slack"
          className="btn-icon d-40 p-0 m-2"
          id="SlackTooltip1567">
          <FontAwesomeIcon icon={['fab', 'slack']} className="font-size-sm" />
        </Button>
        <UncontrolledTooltip target="SlackTooltip1567">
          Slack
        </UncontrolledTooltip>

        <Button
          color="dribbble"
          className="btn-icon d-50 p-0 m-2"
          id="btnDribbbleTooltip567">
          <FontAwesomeIcon
            icon={['fab', 'dribbble']}
            className="font-size-lg"
          />
        </Button>
        <UncontrolledTooltip target="btnDribbbleTooltip567">
          Dribbble
        </UncontrolledTooltip>
        <Button
          color="github"
          className="btn-icon d-60 p-0 m-2"
          id="btnGithubTooltip567">
          <FontAwesomeIcon icon={['fab', 'github']} className="font-size-lg" />
        </Button>
        <UncontrolledTooltip target="btnGithubTooltip567">
          Github
        </UncontrolledTooltip>
        <Button
          color="discord"
          className="btn-icon d-70 p-0 m-2"
          id="btnDiscordTooltip567">
          <FontAwesomeIcon icon={['fab', 'discord']} className="font-size-xl" />
        </Button>
        <UncontrolledTooltip target="btnDiscordTooltip567">
          Discord
        </UncontrolledTooltip>
      </div>
    </>
  );
}
