import React, { Component } from 'react';

let defaultStyle = {
    color: 'blue'
};

export default class Summary extends Component {
    render() {
        let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
            return songs.concat(eachPlaylist.songs)
        }, [])
        let totalDuration = allSongs.reduce((sum, eachSong) => {
            return sum + eachSong.duration
        }, 0)
        return (
            <div style={{...defaultStyle, display:'block', width: '40%'}}>
                <h2>{Math.round(totalDuration/60)} Hours</h2>
            </div>
        )
    }
}