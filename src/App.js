import React, { Component } from 'react';
import './App.css';
import GuestList from './GuestList';

class App extends Component {
  state = {
    guests: [
      {
        name: 'Clara',
        isConfirmed: false,
      },
      {
        name: 'Paola',
        isConfirmed: true,
      },
      {
        name: 'Giulia',
        isConfirmed: false,
      },
    ],
  };

  toggleConfirmationAt = (indexToChange) =>
    this.setState({
      guest: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            isConfirmed: !guest.isConfirmed,
          };
        }
        return guest;
      }),
    });

  getTotalInvited = () => this.state.guests.length;
  // getAttendingGuest = () =>
  // getUnconfirmedGuest = () =>

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form>
            <input type="text" value="Sofia" placeholder="Invite Someone" />
            <button type="submit" name="submit" value="submit">
              Submit
            </button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox" /> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <GuestList
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
          />
        </div>
      </div>
    );
  }
}

export default App;
