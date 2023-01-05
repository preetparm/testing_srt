import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import React, { useEffect, useState, useRef } from "react";

// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

export default function Player(props) {
  const [audio, setAudio] = useState();
  const [time, get] = useState();
  const Player = useRef();

  const addFile = (e) => {
    if (e.target.files[0]) {
      setAudio(URL.createObjectURL(e.target.files[0]));
    }
  };

  var music = document.getElementById("rhap_current-time");
  if (music) {
    console.log("time", music.innerText);
    props.setTime(music.innerText + ",000");
  }

  return (
    <div>
      <div>
        {/* <button onClick={handleClick}>{buttonName}</button> */}
        <input type="file" onChange={addFile} />
      </div>
      );
      <div id="pl">
        <AudioPlayer
          autoPlay
          src={audio}
          onPlay={(e) => console.log("onPlay")}
          ref={Player}
        />
      </div>
    </div>
  );
}
