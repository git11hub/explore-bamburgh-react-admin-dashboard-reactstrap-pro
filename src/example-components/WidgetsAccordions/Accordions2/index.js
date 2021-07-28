import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardHeader, Collapse, Button } from 'reactstrap';

export default function LivePreviewExample() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="accordion mb-5">
        <Card className={clsx('card-box', { 'panel-open': isOpen })}>
          <Card>
            <CardHeader>
              <div className="panel-title">
                <div className="accordion-toggle">
                  <Button
                    color="link"
                    size="lg"
                    className="d-flex align-items-center justify-content-between"
                    onClick={toggle}>
                    <span>Collapse heading 1</span>
                    <FontAwesomeIcon
                      icon={['fas', 'angle-up']}
                      className="font-size-xl accordion-icon"
                    />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <Collapse isOpen={isOpen}>
              <div className="p-5">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </div>
            </Collapse>
          </Card>
        </Card>
      </div>
    </>
  );
}
