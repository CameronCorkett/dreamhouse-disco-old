import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player'

import Track from './Track';

import logo from '../../images/disco-chat-logo.png'

import { fetchPlaylist, nextTrack, togglePlay } from '../actions/musicActions'

const select = function(store, ownProps) {
  const { account, music } = store
  if (_.isEmpty(music.music)) {
    music.music.tracks = {}
    music.music.tracks.items = []
  }
  return {
    account: account.account,
    tracks: music.music.tracks.items,
    playlist: music.music,
    currentTrack: music.currentTrack,
    isPlaying: music.playing,
    currentTrackIndex: music.currentTrackIndex
  }
}


class Music extends Component {
  constructor(props) {
    super(props)
    this.onKeyDown = this.handleKeyDown.bind(this)
  }

  componentDidMount() {
    this.props.fetchPlaylist()
    this.timer = setInterval(() => this.props.fetchPlaylist(), 5000)
    document.body.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    document.body.removeEventListener('keydown', this.onKeyDown)
  }

  handleKeyDown(e) {

    switch (e.keyCode) {
      case 32: { // space
        this.props.togglePlay()
        e.preventDefault()
        break
      }
      case 39: { // right arrow
        this.props.nextTrack()
        e.preventDefault()
        break
      }
      default: {
      }
    }
  }

  render() {
    let { displayNumber, number, roomName, orgName } = this.props.account
    if (!displayNumber || displayNumber === '' ||
        displayNumber === undefined || displayNumber === 'null') {
      displayNumber = number.slice()
      number = ''
    }

    let nowPlayingTrack = this.props.tracks.length > this.props.currentTrackIndex ?
                          this.props.tracks[this.props.currentTrackIndex] : null
    let upNextTrack = this.props.tracks.length > this.props.currentTrackIndex + 1 ?
                      this.props.tracks[this.props.currentTrackIndex + 1] : null

    let tracks = _.map(this.props.tracks.slice(this.props.currentTrackIndex + 2), (track) => {
      return <Track
        key={ track.track.id + track.added_at }
        track={ track.track }
      />
    }).reverse()

    let playingClass = this.props.isPlaying ? 'playing' : 'paused'
    let playingText  = this.props.isPlaying ? 'Now Playing' : 'Paused'


    return (
      <div className='main demo' onKeyDown={ this.handleKeyDown }>

        <header>
          <a href='#' className='logo'>
            <img src={ logo } alt='Smiley face'/>
            <h1>Dreamhouse<strong>Disco</strong></h1>
          </a>
          <div id="audio-player">
            <ReactPlayer
              url={ this.props.currentTrack }
              playing={ this.props.isPlaying }
              controls={ false }
              height={ 0 }
              width={ 0 }
              onEnded={ () => this.props.nextTrack() }
            />
        </div>
          <p className='byline'>a demo app running on <a href='https://www.heroku.com/' className='logo-heroku'>Heroku</a></p>
        </header>

        <div className='playlist-container'>
          <div className='player'>
            <div className='container'>
              { nowPlayingTrack &&
                <div>
                  {/* Could we swap out the h2 content to reflect the track status?
                      It could swap between "Now Playing" and "Paused"
                   */}
                  <h2>{ playingText }</h2>
                 {/* For below: Add className of 'playing' or 'paused' */}
                  <div className={ `track now-playing ${playingClass}` }>
                    <div id="track-controls">
                      <img src={ nowPlayingTrack.track.album.images[0].url } alt={ nowPlayingTrack.track.album.name }/>
                      <a className="track-play" onClick={ () => this.props.togglePlay() }>Play</a>
                      <a className="track-pause" onClick={ () => this.props.togglePlay() }>Pause</a>
                      <a className="track-next" onClick={ () => this.props.nextTrack() }>Next</a>
                    </div>
                    <span className='track-title'>{ nowPlayingTrack.track.name }</span>
                    <span className='track-artist'>{ nowPlayingTrack.track.artists[0].name }</span>
                    <svg id="now-playing-icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><style>{ `.st0{fill:#048EC6;}.st1{fill:none;stroke:#FFFFFF;stroke-width:1.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}` }</style><circle className="st0" cx="25" cy="25" r="25"/><polygon className="st1" points="11.9,19.1 11.9,31.4 19.3,31.4 26,38.1 26,11.9 19.5,19.2 "/><path id="audio-inner" className="st1" d="M29.7,21.2c2.2,0,4,1.8,4,4s-1.8,4-4,4"/><path id="audio-outer" className="st1" d="M31.7,17c3.7,0.9,6.4,4.2,6.4,8.2s-2.7,7.3-6.4,8.2"/></svg>
                  </div>
                </div>
              }
              { upNextTrack &&
                <div>
                  <h2>Up next</h2>
                  <div className='track on-deck'>
                    <img src={ upNextTrack.track.album.images[0].url } alt={ upNextTrack.track.album.name }/>
                    <span className='track-title'>{ upNextTrack.track.name }</span>
                    <span className='track-artist'>{ upNextTrack.track.artists[0].name }</span>
                  </div>
                </div>
              }
            </div>
          </div>
          <div className='playlist'>
            <ol className='tracks'>
              { tracks }
            </ol>
            <footer>
              <div className='track-count'><span>{ tracks.length }</span> tracks</div>
              <div className='request-track'>
                <div className='sms-number'>
                  <span>text a track to </span>
                  <strong>{ displayNumber }</strong>
                  <span className='alt-number'>{ number }</span>
                </div>
                <div className='fb-bot'>
                  <p>request a track via <a href='https://www.facebook.com/dreamhousedisco'>fb.me/dreamhousedisco</a></p>
                  <small>You are in the <strong>{ roomName.toUpperCase() }</strong></small>
                </div>
                <div className='chatter-bot'>
                  <p>request a track via <a href={ '"https://' + { orgName } + '-dev-ed.lightning.force.com"' }>chatter on force.com</a></p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(select, { fetchPlaylist, nextTrack, togglePlay })(Music);
