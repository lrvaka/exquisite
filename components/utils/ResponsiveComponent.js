import { useState, useEffect } from "react"
import { useMediaQuery } from "@chakra-ui/react"

const ResponsiveComponent = ({
  mobileSize,
  mobileComponents,
  desktopComponents,
}) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loaded) setLoaded(true)
  }, [loaded])

  const [isMobile] = useMediaQuery(`(max-width: ${mobileSize}px)`)

  if (loaded)
    return <>{isMobile ? <>{mobileComponents}</> : <>{desktopComponents}</>}</>
  return null
}

export default ResponsiveComponent
