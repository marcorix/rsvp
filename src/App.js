import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import MainContainer from './MainContainer';

class App extends Component {
  state = {
    isFiltered: false,
    pendingGuest: '',
    guests: [
      {
        name: 'Clara',
        isConfirmed: false,
        isEditing: false,
      },
      {
        name: 'Paola',
        isConfirmed: true,
        isEditing: false,
      },
      {
        name: 'Giulia',
        isConfirmed: false,
        isEditing: false,
      },
    ],
  };

  toggleGuestPropertyAt = (property, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property],
          };
        }
        return guest;
      }),
    });

  toggleConfirmationAt = (indexToChange) => {
    this.toggleGuestPropertyAt('isConfirmed', indexToChange);
  };

  toggleEditingAt = (indexToChange) => {
    this.toggleGuestPropertyAt('isEditing', indexToChange);
  };

  removeGuestAt = (index) => {
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1),
      ],
    });
  };

  setNameAt = (name, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            name,
          };
        }
        return guest;
      }),
    });

  toggleFilter = () => {
    this.setState({ isFiltered: !this.state.isFiltered });
  };

  handleNameInput = (e) => {
    this.setState({ pendingGuest: e.target.value });
  };

  newGuestSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
        },
        ...this.state.guests,
      ],
      pendingGuest: '',
    });
  };

  getTotalInvited = () => this.state.guests.length;

  getAttendingGuests = () =>
    this.state.guests.reduce(
      (total, guest) => (guest.isConfirmed ? total + 1 : total),
      0
    );

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;
    return (
      <div className="App">
        <Header
          pendingGuest={this.state.pendingGuest}
          handleNameInput={this.handleNameInput}
          newGuestSubmitHandler={this.newGuestSubmitHandler}
        />
        <MainContainer
          toggleFilter={this.toggleFilter}
          isFilter={this.state.isFiltered}
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          guests={this.state.guests}
          toggleConfirmationAt={this.toggleConfirmationAt}
          toggleEditingAt={this.toggleEditingAt}
          removeGuestAt={this.removeGuestAt}
          setNameAt={this.setNameAt}
          isFiltered={this.state.isFiltered}
          pendingGuest={this.state.pendingGuest}
        />
      </div>
    );
  }
}

export default App;
