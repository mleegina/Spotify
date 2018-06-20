import React, { Component } from 'react';
import './App.css';
import Summary from './components/Summary';
import Filter from './components/Filter';
import Playlist from './components/Playlist';
import queryString from 'query-string';


let fakeServerData = {
  user: {
    name: 'Gina',
    playlists: [
      {
        name: 'Throwbacks',
        songs: [
          {name: 'Vibe', duration: 1345},
          {name: 'Girls', duration: 4533},
          {name: 'Hello', duration: 7000}
        ]
      }
    ]
  }
};

class App extends Component {
    constructor() {
      super();
      this.state = {
        serverData: {},
        filterString: ''
      }
    }
  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    fetch('https://api.spotify.com/v1/me',{
      headers: {'Authorization': 'Bearer ' + accessToken}
    }).then((response) => response.json())
    .then(data =>console.log(data))
  }

  render() {

    let playlistToRender = this.state.serverData.user ? this.state.serverData.user.playlists
    .filter(playlist =>
      playlist.name.toLowerCase().includes(
        this.state.filterString.toLowerCase())
      ) : []
    return (
      <div className="App">
        
      {this.state.serverData.user ? 
        <div>
          <h1>{ this.state.serverData.user.name}'s Home</h1>

          <Summary playlists={playlistToRender} />

          <Filter onTextChange={text => this.setState({filterString: text})}/>

          {playlistToRender.map(playlist =>
            <Playlist playlist={playlist}/>
            )}

        </div> : <button onClick={()=>window.location='http://localhost:8888/login'} 
        style={{padding: '20px', fontSize:'50px', marginTop: '40px'}}> Sign in with Spotify</button>
      }


      </div>
    );
  }
}

export default App;
