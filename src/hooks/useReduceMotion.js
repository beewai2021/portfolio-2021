import React from "react"

const useReduceMotion = () => {
  const [reducedMotion, setReducedMotion] = React.useState(false)

  const changeHandler = (e) => setReducedMotion(e.target.matches)

  React.useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")

    if (media) {
      setReducedMotion(media.matches)

      media.addEventListener("change", changeHandler)

      return () => media.removeEventListener("change", changeHandler)
    }
  }, [])

  return reducedMotion
}

export default useReduceMotion
