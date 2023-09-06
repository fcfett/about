import { createRef, useEffect, useState } from 'react'

type Ref = HTMLElement

type Props = {
  shouldRenderOnce?: boolean
}

export default function useViewportObserver({
  shouldRenderOnce = false,
}: Props = {}) {
  const elementRef = createRef<Ref>()
  const [isVisible, setIsVisible] = useState(false)
  const [isRendered, setIsRendered] = useState(false)
  const shouldRender = shouldRenderOnce ? isRendered : isVisible

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = Boolean(entry.intersectionRatio)

        setIsVisible(isVisible)

        if (isVisible) {
          setIsRendered(true)

          if (shouldRenderOnce) {
            observer.disconnect()
          }
        }
      },
      {
        threshold: [0, 1],
      }
    )

    const elRef = elementRef.current

    if (elRef) {
      observer.observe(elRef)
    }

    return () => {
      observer.disconnect()
    }
  }, [shouldRenderOnce, elementRef])

  return [elementRef, shouldRender]
}
