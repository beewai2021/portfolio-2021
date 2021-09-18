import React from "react"
import styled from "styled-components"

const Video = ({ url, index }) => {
  const ref = React.useRef(null)

  const [loaded, setLoaded] = React.useState(false)

  const togglePlayback = () => {
    if (ref.current) {
      ref.current.paused ? ref.current.play() : ref.current.pause()
    }
  }

  return (
    <VideoContainer>
      <video
        key={url}
        ref={ref}
        src={url}
        muted
        playsInline
        autoPlay={index === 0 ? true : false}
        onCanPlay={() => setLoaded(true)}
      />
      {loaded && <Button onClick={togglePlayback}>PLAYBACK</Button>}
    </VideoContainer>
  )
}

export default Video

const VideoContainer = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;

  video {
    transform: scale(1.01);
  }
`

const Button = styled.button`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  padding: 2rem;
  background-color: white;
  border: none;
  border-radius: 0.8rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &:hover {
    cursor: pointer;
  }
`
