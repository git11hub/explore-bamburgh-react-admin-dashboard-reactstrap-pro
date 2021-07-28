import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
const columns = [
  {
    dataField: 'id',
    text: 'Product ID',
    sort: true
  },
  {
    dataField: 'name',
    text: 'Product Name',
    sort: true
  },
  {
    dataField: 'price',
    text: 'Product Price',
    sort: true
  }
];

const defaultSorted = [
  {
    dataField: 'name',
    order: 'desc'
  }
];

const products = [
  { id: 1, name: 'Item 1', price: 100 },
  { id: 2, name: 'Item 2', price: 102 },
  { id: 3, name: 'Item 3', price: 125 },
  { id: 4, name: 'Item 4', price: 574 },
  { id: 5, name: 'Item 5', price: 284 },
  { id: 6, name: 'Item 6', price: 368 }
];

export default function LivePreviewExample() {
  return (
    <>
      <div className="table-responsive-md">
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={products}
          columns={columns}
          defaultSorted={defaultSorted}
        />
      </div>

      <div className="table-responsive-md">
        <BootstrapTable
          keyField="id"
          data={products}
          columns={columns}
          filter={filterFactory()}
        />
      </div>
    </>
  );
}
