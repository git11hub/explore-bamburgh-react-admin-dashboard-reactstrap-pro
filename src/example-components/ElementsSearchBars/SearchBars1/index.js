import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormGroup,
  Input
} from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <FormGroup>
        <InputGroup size="sm" className="input-group-seamless mb-4">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <FontAwesomeIcon icon={['fas', 'search']} className="mx-auto" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Search terms..." type="search" />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup className="input-group-seamless mb-4">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <FontAwesomeIcon icon={['fas', 'search']} className="mx-auto" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Search terms..." type="search" />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup size="lg" className="input-group-seamless mb-4">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <FontAwesomeIcon icon={['fas', 'search']} className="mx-auto" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Search terms..." type="search" />
        </InputGroup>
      </FormGroup>

      <FormGroup>
        <InputGroup size="sm" className="input-group-seamless mb-4">
          <Input placeholder="Search terms..." type="search" />
          <InputGroupAddon addonType="append">
            <InputGroupText>
              <FontAwesomeIcon icon={['fas', 'search']} className="mx-auto" />
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>

      <FormGroup>
        <InputGroup size="sm" className="mb-4">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <FontAwesomeIcon icon={['fas', 'search']} className="mx-auto" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Search terms..." type="search" />
        </InputGroup>
      </FormGroup>

      <FormGroup className="mb-0">
        <InputGroup>
          <Input placeholder="Search terms..." type="search" />
          <InputGroupAddon addonType="append">
            <InputGroupText>
              <FontAwesomeIcon icon={['fas', 'search']} className="mx-auto" />
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </>
  );
}
