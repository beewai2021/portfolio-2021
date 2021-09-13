import React from "react"
import styled from "styled-components"

const Video = ({ index, url }) => {
  const [playing, setPlaying] = React.useState(undefined)

  const videoRef = React.useRef()

  const togglePlayback = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setPlaying(true)
      } else {
        videoRef.current.pause()
        setPlaying(false)
      }
    }
  }

  React.useEffect(() => {
    const setPlaybackTrue = () => setPlaying(true)
    const setPlaybackFalse = () => setPlaying(false)

    videoRef.current.addEventListener("play", setPlaybackTrue)
    videoRef.current.addEventListener("pause", setPlaybackFalse)

    return () => {
      videoRef.current &&
        videoRef.current.removeEventListener("play", setPlaybackTrue)
      videoRef.current &&
        videoRef.current.removeEventListener("pause", setPlaybackFalse)
    }
  }, [videoRef])

  return (
    <VideoContainer>
      <video
        ref={videoRef}
        src={url}
        muted
        autoPlay={index === 0 ? true : false}
        loop={index === 0 ? true : false}
      />
      <Button onClick={togglePlayback}>{playing ? "PAUSE" : "PLAY"}</Button>
    </VideoContainer>
  )
}

export default Video

const VideoContainer = styled.div`
  position: relative;
  height: 100%;
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
