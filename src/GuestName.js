import React from 'react';
import PropTypes from 'prop-types';

const GuestName = ({ name, isEditing, handleNameEdits }) => {
  if (isEditing) {
    return <input type="text" value={name} onChange={handleNameEdits}></input>;
  }
  return <span>{name}</span>;
};

GuestName.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  name: PropTypes.string,
  handleNameEdits: PropTypes.func.isRequired,
};

export default GuestName;
