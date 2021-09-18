import React from "react"
import ReactPlayer from "react-player"
import styled from "styled-components"

const Video = ({ url, index }) => {
  const vidRef = React.useRef(null)

  const [vidReady, setVidReady] = React.useState(false)
  const [vidPlaying, setVidPlaying] = React.useState(false)

  const handlePlayPause = () => setVidPlaying((prev) => !prev)

  return (
    <VideoContainer>
      <ReactPlayer
        ref={vidRef}
        url={url}
        loop={index === 0 ? true : false}
        muted={true}
        playing={vidPlaying}
        onReady={() => setVidReady(true)}
        onPlay={() => setVidPlaying(true)}
        onPause={() => setVidPlaying(false)}
        height="100%"
        width="100%"
      />
      {vidReady && (
        <Button onClick={handlePlayPause}>
          {vidPlaying ? "Pause" : "Play"}
        </Button>
      )}
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
    transform-origin: center;
    border: 2px solid red;
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
