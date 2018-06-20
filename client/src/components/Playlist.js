import React, { Component } from 'react';

export default class Playlist extends Component {
    render() {
        let playlist = this.props.playlist;
        return (
            <div style={{display:'inline-block', width: '20%'}}>
                <h1>{playlist.name}</h1>
                <ul>
                    {playlist.songs.map(song => 
                    <li>{song.name}</li>
                    )}
                    </ul>
            </div>
        )

    }
}