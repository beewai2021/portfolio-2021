import React from "react"
import styled from "styled-components"

const Video = ({ index, url, reduceMotion }) => {
  const vidRef = React.useRef(null)

  const [loaded, setLoaded] = React.useState(false)
  const [playing, setPlaying] = React.useState(false)

  const togglePlayback = () => {
    vidRef.current && vidRef.current.paused
      ? vidRef.current.play()
      : vidRef.current.pause()
  }

  React.useEffect(() => {
    const setVideoPlay = () => setPlaying(true)
    const setVideoPause = () => setPlaying(false)

    if (vidRef.current) {
      vidRef.current.addEventListener("play", setVideoPlay)
      vidRef.current.addEventListener("pause", setVideoPause)
    }

    return () => {
      if (vidRef.current) {
        vidRef.current.removeEventListener("play", setVideoPlay)
        vidRef.current.removeEventListener("pause", setVideoPause)
      }
    }
  }, [url])

  return (
    <VideoContainer>
      <video
        key={url}
        ref={vidRef}
        src={url}
        muted
        playsInline
        autoPlay={index === 0 && !reduceMotion ? true : false}
        onCanPlay={() => setLoaded(true)}
      />
      {loaded && (
        <Button onClick={togglePlayback}>
          {playing ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
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
  }
`

const Button = styled.button`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 0.8rem;

  svg {
    height: 3.5rem;
    width: 3.5rem;
    stroke: white;
  }

  &:hover {
    cursor: pointer;
  }
`
