import React from 'react';

import './app-table-head.css';

const TableHead = () => {

  const headers = [
    { title: '#' },
    { title: 'First name' },
    { title: 'Last name' },
    { title: 'Hours' },
    { title: 'Rate' },
    { title: 'Total' },
    { title: '' }
  ];

  const head = headers.map(({title}) => {
    return(
      <th
        scope="col"
        key={title}
      >
        {title}
      </th>
    )
  });

  return(
    <thead>
      <tr>
        {head}
      </tr>
    </thead>
  )
};

export default TableHead;
