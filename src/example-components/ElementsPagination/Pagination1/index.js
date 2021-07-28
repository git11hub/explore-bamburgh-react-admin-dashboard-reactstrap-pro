import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Pagination size="sm">
          <PaginationItem disabled>
            <PaginationLink first href="#/" onClick={(e) => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'angle-double-left']} />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem disabled>
            <PaginationLink
              previous
              href="#/"
              onClick={(e) => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'chevron-left']} />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#/" onClick={(e) => e.preventDefault()}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#/" onClick={(e) => e.preventDefault()}>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#/" onClick={(e) => e.preventDefault()}>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#/" onClick={(e) => e.preventDefault()}>
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#/" onClick={(e) => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'chevron-right']} />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last href="#/" onClick={(e) => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'angle-double-right']} />
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </div>
      <div className="divider my-3" />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Pagination>
          <PaginationItem disabled>
            <PaginationLink first href="#/" onClick={(e) => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'angle-double-left']} />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem disabled>
            <PaginationLink
              previous
              href="#/"
              onClick={(e) => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'chevron-left']} />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#/" onClick={(e) => e.preventDefault()}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#/" onClick={(e) => e.preventDefault()}>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#/" onClick={(e) => e.preventDefault()}>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#/" onClick={(e) => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'chevron-right']} />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last href="#/" onClick={(e) => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'angle-double-right']} />
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </div>
      <div className="divider my-3" />
      <div className="d-flex align-items-center justify-content-center pagination-first flex-wrap">
        <Pagination size="lg" className="pagination-icons">
          <PaginationItem disabled>
            <PaginationLink first href="#/" onClick={(e) => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'angle-double-left']} />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem disabled>
            <PaginationLink
              previous
              href="#/"
              onClick={(e) => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'chevron-left']} />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#/" onClick={(e) => e.preventDefault()}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#/" onClick={(e) => e.preventDefault()}>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#/" onClick={(e) => e.preventDefault()}>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#/" onClick={(e) => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'chevron-right']} />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last href="#/" onClick={(e) => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'angle-double-right']} />
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </div>
    </>
  );
}
