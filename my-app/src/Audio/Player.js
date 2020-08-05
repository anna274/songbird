import React from 'react';
import '../App.css';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.player = React.createRef();
  }
  render() {
    if(this.props.pause) {
      this.player.current.audio.current.pause();
    }
    return (
      <AudioPlayer
        ref={this.player}
        key={ this.props.id } 
        src={ this.props.src }
        showJumpControls = { false }
        showDownloadProgress = { false }
        customProgressBarSection={
          [
            RHAP_UI.MAIN_CONTROLS,
            RHAP_UI.PROGRESS_BAR,
            RHAP_UI.VOLUME_CONTROLS,
          ]
        }
        customControlsSection={
        [
          RHAP_UI.CURRENT_TIME,
          RHAP_UI.DURATION,
        ]
        }
      />
    );
  }
}

export default Player;