import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DualListBox from 'react-dual-listbox';
const options = [
  {
    label: 'Earth',
    options: [{ value: 'luna', label: 'Moon' }]
  },
  {
    label: 'Mars',
    options: [
      { value: 'phobos', label: 'Phobos' },
      { value: 'deimos', label: 'Deimos' }
    ]
  },
  {
    label: 'Jupiter',
    options: [
      { value: 'io', label: 'Io' },
      { value: 'europa', label: 'Europa' },
      { value: 'ganymede', label: 'Ganymede' },
      { value: 'callisto', label: 'Callisto' }
    ]
  }
];

export default class LivePreviewExample extends Component {
  state = {
    selected: ['one']
  };

  onChange = (selected) => {
    this.setState({ selected });
  };

  render() {
    const { selected } = this.state;

    return (
      <>
        <div className="p-5">
          <DualListBox
            options={options}
            selected={selected}
            onChange={this.onChange}
            canFilter
            filterCallback={(option, filterInput) => {
              if (filterInput === '') {
                return true;
              }

              return new RegExp(filterInput, 'i').test(option.label);
            }}
            filterPlaceholder="Filter..."
            icons={{
              moveLeft: <FontAwesomeIcon icon={['fas', 'chevron-left']} />,
              moveAllLeft: [
                <FontAwesomeIcon key={0} icon={['fas', 'chevron-left']} />,
                <FontAwesomeIcon key={1} icon={['fas', 'chevron-left']} />
              ],
              moveRight: <FontAwesomeIcon icon={['fas', 'chevron-right']} />,
              moveAllRight: [
                <FontAwesomeIcon key={0} icon={['fas', 'chevron-right']} />,
                <FontAwesomeIcon key={1} icon={['fas', 'chevron-right']} />
              ],
              moveDown: <FontAwesomeIcon icon={['fas', 'chevron-down']} />,
              moveUp: <FontAwesomeIcon icon={['fas', 'chevron-up']} />
            }}
          />
        </div>
      </>
    );
  }
}
