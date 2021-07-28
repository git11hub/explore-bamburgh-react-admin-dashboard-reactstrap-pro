import React from 'react';

import { Table } from 'reactstrap';

import { useTable } from 'react-table';
import makeData from './makeData';

function ReactTable({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  // Render the UI for your table
  return (
    <div className="table-responsive-md">
      <Table bordered striped hover {...getTableProps()}>
        <thead>
          {headerGroups.map((group) => (
            <tr {...group.getHeaderGroupProps()}>
              {group.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot className="font-weight-bold">
          {footerGroups.map((group) => (
            <tr {...group.getFooterGroupProps()}>
              {group.headers.map((column) => (
                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </Table>
    </div>
  );
}

export default function LivePreviewExample() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        Footer: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
            Footer: 'First Name'
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
            Footer: 'Last Name'
          }
        ]
      },
      {
        Header: 'Info',
        Footer: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
            Footer: 'Age'
          },
          {
            Header: 'Visits',
            accessor: 'visits',
            Footer: (info) => {
              // Only calculate total visits if rows change
              const total = React.useMemo(
                () =>
                  info.rows.reduce((sum, row) => row.values.visits + sum, 0),
                [info.rows]
              );

              return <>Total: {total}</>;
            }
          },
          {
            Header: 'Status',
            accessor: 'status',
            Footer: 'Status'
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
            Footer: 'Profile Progress'
          }
        ]
      }
    ],
    []
  );

  const data = React.useMemo(() => makeData(20), []);

  return (
    <>
      <ReactTable columns={columns} data={data} />
    </>
  );
}
