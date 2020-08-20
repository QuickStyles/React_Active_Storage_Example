import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image_url: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    console.log(this)
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);
    fetch('http://localhost:3000/api/v1/users', {
      mode: 'cors',
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(payload => {
        console.log(this);
        this.setState(s => {
          return {
            name: payload.name,
            image_url: payload.profile_picture
          }
        })
      });
  }

  render() {
    return(
      <main>
        <div>
          <p>{this.state.name}</p>
          <img src={this.state.image_url} height='500px' width='500px' />
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type='text' name='name' />
            <input type='file' name='profile_picture' />
            <input type='submit' value='create user' />
          </div>
        </form>
      </main>
    )
  }
}
export default App;
