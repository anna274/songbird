import React from 'react';
import '../App.css';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

class Player extends React.Component {
  render() {
    return (
      <AudioPlayer
        key={ this.props.key } 
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