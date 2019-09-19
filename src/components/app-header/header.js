import React from 'react';
import PropTypes from 'prop-types';

import './header.css';

const Header = ({ label, amount }) => {
  return (
    <div>
      <h3>{ label }</h3>
      <p>total employees - { amount }</p>
    </div>
  )
};

Header.propTypes = {
  label: PropTypes.string,
  amount: PropTypes.number
};

export default Header;
