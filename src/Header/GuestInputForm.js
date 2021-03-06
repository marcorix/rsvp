import React from 'react';
import PropTypes from 'prop-types';

const GuestInputForm = (props) => (
  <form onSubmit={props.newGuestSubmitHandler}>
    <input
      type="text"
      value={props.pendingGuest}
      onChange={props.handleNameInput}
      placeholder="Invite Someone"
    />
    <button type="submit" name="submit" value="submit">
      Submit
    </button>
  </form>
);

GuestInputForm.propTypes = {
  pendingGuest: PropTypes.string.isRequired,
  handleNameInput: PropTypes.func.isRequired,
  newGuestSubmitHandler: PropTypes.func.isRequired,
};

export default GuestInputForm;
