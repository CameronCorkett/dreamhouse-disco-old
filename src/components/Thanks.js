import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import logo from '../../images/disco-chat-logo.png'
import placeholder from '../../images/placeholder.png'
import trailhead from '../../images/logo-trailhead.png'
import enterprise from '../../images/logo-enterprise-dark.png'

const select = function(store, ownProps) {
  return {}
}


class Thanks extends React.Component {


  render() {
    return (
      <div className='main thanks'>

        <header>
          <a href='#' className='logo'>
            <img src={ logo } alt='Smiley face'/>
            <h1>Dreamhouse<strong>Disco</strong></h1>
          </a>
          <p className='byline'>a demo app running on <a href='https://www.heroku.com/' className='logo-heroku'>Heroku</a></p>
        </header>

        <div className='hero'>
          <div className='hero-thanks'>
            <h2>Thank you for checking out our demo app!</h2>
            <p>Enjoy this personalized playlist based on your submission</p>
            <a href='' className='spotify-cta'>listen on <span>Spotify</span></a>
          </div>
          <div className='player'>
            <div className='track submitted'>
              <img src={ placeholder } />
              <span className='track-title'>Tiny Cities Made of Ashes</span>
              <span className='track-artist'>Modest Mouse</span>
            </div>
          </div>
        </div>

        <div className='thanks-content'>
          <div className='playlist'>
            <ol className='tracks'>
              <li className='track'>
                <span className='track-artwork'>
                  <img src={ placeholder } />
                </span>
                <span className='track-title'>MMMBop</span>
                <span className='track-artist'>Hanson</span>
                <span className='track-time'>3:34</span>
              </li>
              <li className='track'>
                <span className='track-artwork'>
                  <img src={ placeholder } />
                </span>
                <span className='track-title'>MMMBop</span>
                <span className='track-artist'>Hanson</span>
                <span className='track-time'>3:34</span>
              </li>
              <li className='track'>
                <span className='track-artwork'>
                  <img src={ placeholder } />
                </span>
                <span className='track-title'>MMMBop</span>
                <span className='track-artist'>Hanson</span>
                <span className='track-time'>3:34</span>
              </li>
              <li className='track'>
                <span className='track-artwork'>
                  <img src={ placeholder } />
                </span>
                <span className='track-title'>MMMBop</span>
                <span className='track-artist'>Hanson</span>
                <span className='track-time'>3:34</span>
              </li>
              <li className='track'>
                <span className='track-artwork'>
                  <img src={ placeholder } />
                </span>
                <span className='track-title'>MMMBop</span>
                <span className='track-artist'>Hanson</span>
                <span className='track-time'>3:34</span>
              </li>
              <li className='track'>
                <span className='track-artwork'>
                  <img src={ placeholder } />
                </span>
                <span className='track-title'>MMMBop</span>
                <span className='track-artist'>Hanson</span>
                <span className='track-time'>3:34</span>
              </li>
              <li className='track'>
                <span className='track-artwork'>
                  <img src={ placeholder } />
                </span>
                <span className='track-title'>MMMBop</span>
                <span className='track-artist'>Hanson</span>
                <span className='track-time'>3:34</span>
              </li>
              <li className='track'>
                <span className='track-artwork'>
                  <img src={ placeholder } />
                </span>
                <span className='track-title'>MMMBop</span>
                <span className='track-artist'>Hanson</span>
                <span className='track-time'>3:34</span>
              </li>
              <li className='track'>
                <span className='track-artwork'>
                  <img src={ placeholder } />
                </span>
                <span className='track-title'>MMMBop</span>
                <span className='track-artist'>Hanson</span>
                <span className='track-time'>3:34</span>
              </li>
              <li className='track'>
                <span className='track-artwork'>
                  <img src={ placeholder } />
                </span>
                <span className='track-title'>MMMBop</span>
                <span className='track-artist'>Hanson</span>
                <span className='track-time'>3:34</span>
              </li>
            </ol>
          </div>

          <div className='form'>
            <h3>Enter for a chance to win _________!</h3>
            <form>
              <div className='input-group'>
                <input type='text' placeholder='First name*' id='' required />
              </div>
              <div className='input-group'>
                <input type='text' placeholder='Last name*' id='' required />
              </div>
              <div className='input-group'>
                <input type='email' placeholder='Email*' id='' required />
              </div>
              <div className='input-group'>
                <input type='number' placeholder='Phone' id='' />
              </div>
              <div className='input-group'>
                <input type='text' placeholder='Company*' id='' required />
              </div>
              <select placeholder='Country' id=''>
                <option value='China'>China</option>
                <option value='France'>France</option>
                <option value='Brazil'>Brazil</option>
              </select>
              <small>By submitting this form you agree to receive occasional product updates, technical content and related benefit information. We won’t spam you, and you can unsubscribe at any time.</small>
              <input type='submit' className='button' value='Send' />
            </form>
            <small className='text-right'><a href='' className='pull-right'>Read contest terms</a></small>
            <div className='products'>
              <div className='product'>
                <a href=''>
                  <img src={ trailhead } />
                  <span>Check out Heroku in Trailhead</span>
                </a>
              </div>
              <div className='product'>
                <a href='https://heroku.com/enterprise'>
                  <img src={ enterprise } />
                  <span>Learn more about Heroku Enterprise</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default connect(select, { })(Thanks);
