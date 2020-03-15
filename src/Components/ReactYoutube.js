import React from 'react';
import YouTube from 'react-youtube';
//  https://www.youtube.com/watch?v=ok881rk0jrk
// https://youtu.be/ok881rk0jrk
//https://youtu.be/qsNDS8cy6W0
//https://youtu.be/eiSCobyULHY
//https://youtu.be/EsDQrCnkY1c
//https://youtu.be/AX71MnD6Cas
//https://youtu.be/_xHSSsvH4Pg
//https://youtu.be/H_oWNDpCum0
//https://youtu.be/00NgZ4bH2oc
class ReactYoutube extends React.Component {
  VideoOnReady(event) {
    event.target.pauseVideo();
  }
  render() {
    const opts = {
      height: '350px',
      width: '100%',
    };
    const { videoId } = this.props;
    return (
        <YouTube
        videoId={videoId}
          opts={opts}
          onReady={this.VideoOnReady}
        />
    );
  }
}
export default ReactYoutube;