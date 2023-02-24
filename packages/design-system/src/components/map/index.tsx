/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react"
import { useIsomorphicLayoutEffect } from "react-use"
import { Loading } from "../loading"
import {
  DEFAULT_MAP_OPTIONS,
  DEFAULT_MAP_STYLE,
  //GOOGLE_MAP_LIBRARY_NAMES
} from "./constants"
import { GoogleMapContext } from "./context"
import { useGoogleListener, useMemoizedOptions } from "./hooks"
import { MapProps } from "./types"

export const Map = ({
  apiKey = "",
  language,
  region,
  version,
  className,
  style = DEFAULT_MAP_STYLE,
  opts = DEFAULT_MAP_OPTIONS,
  useDrawing = false,
  useGeometry = false,
  usePlaces = false,
  useVisualization = false,
  LoadedComponent = null,
  LoadingComponent = <Loading />,
  onBoundsChanged,
  onCenterChanged,
  onClick,
  onChange,
  onDoubleClick,
  onDrag,
  onDragEnd,
  onDragStart,
  onHeadingChanged,
  onIdle,
  onMapTypeIdChanged,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onProjectionChanged,
  onRightClick,
  onTilesLoaded,
  onTiltChanged,
  onZoomChanged,
}: MapProps) => {
  // Get access to the Google Map context
  const { dispatch } = React.useContext(GoogleMapContext)
  const [prevOpts, setPrevOpts] = React.useState("")
  const [map, setMap] = React.useState<google.maps.Map | undefined>(undefined)

  const mapElementRef = React.useRef<HTMLDivElement>(null)

  // Define action dispatchers
  const initMap = (
    map: google.maps.Map,
    places?: google.maps.places.PlacesService,
  ) => dispatch({ type: "init_map", map: map, places: places })
  const reset = () => dispatch({ type: "reset" })

  // Construct the library param
  // const libraries = {
  //   drawing: useDrawing,
  //   geometry: useGeometry,
  //   places: usePlaces,
  //   visualization: useVisualization,
  // }
  // const libraryParam = GOOGLE_MAP_LIBRARY_NAMES.filter(
  //   (library) => libraries[library],
  // ).join(",")

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  useIsomorphicLayoutEffect(() => {
    //console.log('useIsomorphicLayoutEffect', ref, ref.current, map);
    if (mapElementRef && !map) {
      const stringifiedOpts = JSON.stringify(opts)
      const map = new google.maps.Map(
        mapElementRef.current!,
        JSON.parse(stringifiedOpts),
      )
      setMap(map)
      setPrevOpts(stringifiedOpts)
      if (usePlaces) {
        const places = new google.maps.places.PlacesService(map)
        initMap(map, places)
      } else initMap(map)
      return () => reset()
    }
  }, [typeof google === "object" && typeof google.maps === "object"])

  // Register event listeners
  useGoogleListener(map, [
    {
      name: "bounds_changed",
      handler: () => {
        onBoundsChanged &&
          onBoundsChanged({
            bounds: {
              nw: {
                lat: map?.getBounds()?.getNorthEast()?.lat(),
                lng: map?.getBounds()?.getSouthWest()?.lng(),
              },
              se: {
                lat: map?.getBounds()?.getSouthWest()?.lat(),
                lng: map?.getBounds()?.getNorthEast()?.lng(),
              },
              center: map?.getBounds()?.getCenter()?.toJSON(),
            },
            center: map?.getCenter()?.toJSON(),
            zoom: map?.getZoom(),
            map: map,
          })
      },
    },
    {
      name: "center_changed",
      handler: () => {
        onCenterChanged &&
          onCenterChanged({
            bounds: {
              nw: {
                lat: map?.getBounds()?.getNorthEast()?.lat(),
                lng: map?.getBounds()?.getSouthWest()?.lng(),
              },
              se: {
                lat: map?.getBounds()?.getSouthWest()?.lat(),
                lng: map?.getBounds()?.getNorthEast()?.lng(),
              },
              center: map?.getBounds()?.getCenter()?.toJSON(),
            },
            center: map?.getCenter()?.toJSON(),
            zoom: map?.getZoom(),
            map: map,
          })
      },
    },
    { name: "click", handler: onClick },
    { name: "dblclick", handler: onDoubleClick },
    { name: "drag", handler: onDrag },
    {
      name: "dragend",
      handler: () => {
        onDragEnd &&
          onDragEnd({
            bounds: {
              nw: {
                lat: map?.getBounds()?.getNorthEast()?.lat(),
                lng: map?.getBounds()?.getSouthWest()?.lng(),
              },
              se: {
                lat: map?.getBounds()?.getSouthWest()?.lat(),
                lng: map?.getBounds()?.getNorthEast()?.lng(),
              },
              center: map?.getBounds()?.getCenter()?.toJSON(),
            },
            center: map?.getCenter()?.toJSON(),
            zoom: map?.getZoom(),
            map: map,
          })
      },
    },
    { name: "dragstart", handler: onDragStart },
    { name: "heading_changed", handler: onHeadingChanged },
    {
      name: "idle",
      handler: () => {
        onIdle &&
          onIdle({
            bounds: {
              nw: {
                lat: map?.getBounds()?.getNorthEast()?.lat(),
                lng: map?.getBounds()?.getSouthWest()?.lng(),
              },
              se: {
                lat: map?.getBounds()?.getSouthWest()?.lat(),
                lng: map?.getBounds()?.getNorthEast()?.lng(),
              },
              center: map?.getBounds()?.getCenter()?.toJSON(),
            },
            center: map?.getCenter()?.toJSON(),
            zoom: map?.getZoom(),
            map: map,
          })
      },
    },
    {
      name: "idle",
      handler: () => {
        onChange &&
          onChange({
            bounds: {
              nw: {
                lat: map?.getBounds()?.getNorthEast()?.lat(),
                lng: map?.getBounds()?.getSouthWest()?.lng(),
              },
              se: {
                lat: map?.getBounds()?.getSouthWest()?.lat(),
                lng: map?.getBounds()?.getNorthEast()?.lng(),
              },
              center: map?.getBounds()?.getCenter()?.toJSON(),
            },
            center: map?.getCenter()?.toJSON(),
            zoom: map?.getZoom(),
            map: map,
          })
      },
    },
    {
      name: "dragend",
      handler: () => {
        onChange &&
          onChange({
            bounds: {
              nw: {
                lat: map?.getBounds()?.getNorthEast()?.lat(),
                lng: map?.getBounds()?.getSouthWest()?.lng(),
              },
              se: {
                lat: map?.getBounds()?.getSouthWest()?.lat(),
                lng: map?.getBounds()?.getNorthEast()?.lng(),
              },
              center: map?.getBounds()?.getCenter()?.toJSON(),
            },
            center: map?.getCenter()?.toJSON(),
            zoom: map?.getZoom(),
            map: map,
          })
      },
    },
    { name: "maptypeid_changed", handler: onMapTypeIdChanged },
    { name: "mousemove", handler: onMouseMove },
    { name: "mouseout", handler: onMouseOut },
    { name: "mouseover", handler: onMouseOver },
    { name: "projection_changed", handler: onProjectionChanged },
    { name: "rightclick", handler: onRightClick },
    { name: "tilesloaded", handler: onTilesLoaded },
    { name: "tilt_changed", handler: onTiltChanged },
    { name: "zoom_changed", handler: onZoomChanged },
  ])

  // Modify the google.maps.Map object when component props change
  useMemoizedOptions(map, opts, prevOpts, setPrevOpts)

  // Render <Map>
  return (
    <>
      {typeof google === "object" && typeof google.maps === "object"
        ? LoadedComponent
        : LoadingComponent}
      <div ref={mapElementRef} style={style} className={className} />
    </>
  )
}

Map.displayName = "Map"
