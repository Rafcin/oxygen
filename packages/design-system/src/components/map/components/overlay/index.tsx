import React from "react"
import ReactDOM from "react-dom"
import { NYC_LATLNG } from "../../constants"
import { GoogleMapContext } from "../../context/"
import { OverlayViewProps } from "../../types"

export const OverlayView = ({
  pane = "overlayMouseTarget",
  position = NYC_LATLNG,
  children,
  onClick,
  onDoubleClick,
  onMouseDown,
  onMouseOut,
  onMouseOver,
  onMouseUp,
  onTouchEnd,
  onTouchStart,
  disableMapHits = false,
  disableMapHitsAndGestures = false,
}: OverlayViewProps): React.ReactPortal | null => {
  if (typeof document === "undefined") return null

  const { state } = React.useContext(GoogleMapContext)
  const [container] = React.useState<HTMLDivElement>(
    document.createElement("div"),
  )
  const [overlay, setOverlay] = React.useState<
    google.maps.OverlayView | undefined
  >(undefined)
  const [mounted, setMounted] = React.useState<boolean>(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    //@ts-ignore
    if (state.map === undefined) return
    const overlay = new google.maps.OverlayView()
    overlay.onAdd = () => {
      container.style.position = "absolute"
      container.style.left = "0px"
      container.style.top = "0px"
      container.style.touchAction = "pan-x pan-y"
      container.style.display = "block"
      container.onclick = onClick || null
      container.ondblclick = onDoubleClick || null
      container.onmousedown = onMouseDown || null
      container.onmouseover = onMouseOver || null
      container.onmouseout = onMouseOut || null
      container.onmouseup = onMouseUp || null
      container.ontouchend = onTouchEnd || null
      container.ontouchstart = onTouchStart || null

      // @types/googlemap does not define `preventMapHitsFrom` or `preventMapHitsAndGesturesFrom`
      if (disableMapHitsAndGestures)
        (google.maps.OverlayView as any).preventMapHitsAndGesturesFrom(
          container,
        )
      else if (disableMapHits)
        (google.maps.OverlayView as any).preventMapHitsFrom(container)

        // Use an ugly cast to avoid package bundle issue
      ;(overlay.getPanes() as any)[pane].appendChild(container)
    }
    overlay.onRemove = () => {
      container.parentNode && container.parentNode.removeChild(container)
    }
    overlay.setMap(state.map)
    setOverlay(overlay)
    return () => overlay.setMap(null)
  }, [state.map])

  React.useEffect(() => {
    if (overlay !== undefined) {
      overlay.setMap(null)
      overlay.draw = () => {
        const location = overlay
          .getProjection()
          .fromLatLngToDivPixel(
            new google.maps.LatLng(position.lat, position.lng),
          )
        // container.style.left = JSON.stringify(location?.x && location.x) + "px"
        // container.style.top = JSON.stringify(location?.y && location.y) + "px"
        container.style.transform = `translate(${
          location?.x && JSON.stringify(location.x)
        }px, ${location?.y && JSON.stringify(location.y)}px)`
      }
      overlay.setMap(state.map as google.maps.Map)
    }
  }, [overlay, position])

  return mounted
    ? ReactDOM.createPortal(
        <div
          style={{
            transform: "translate(calc(-50% + 0px), calc(50% + 0px))",
            transition: "transform 0.2s ease 0s",
            left: "50%",
            position: "absolute",
            bottom: "0px",
            zIndex: 0,
            pointerEvents: "auto",
          }}
        >
          {children}
        </div>,
        container,
      )
    : null
}

OverlayView.displayName = "OverlayView"
