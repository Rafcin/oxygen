import React from "react"
import loadjs from "loadjs"
import { GOOGLE_MAP_BASE_URI } from "../constants"
import { GoogleMapObjectWithSetOptions } from "../types"

interface GoogleAPIProps {
  apiKey: string
  libraryParam: string
  languageParam: string
  regionParam: string
  version: string
}

export const useGoogleAPI = ({
  apiKey,
  libraryParam,
  languageParam,
  regionParam,
  version,
}: GoogleAPIProps) => {
  const [loaded, setLoaded] = React.useState(false)
  React.useEffect(() => {
    // Should not load script at server side
    if (typeof document === "undefined") return

    const googleMapScriptUri = `${GOOGLE_MAP_BASE_URI}?key=${apiKey}${libraryParam}${languageParam}${regionParam}${version}`
    if (!loadjs.isDefined("gmap")) loadjs(googleMapScriptUri, "gmap")
    loadjs.ready("gmap", {
      success: () => {
        setLoaded(true)
      },
      error: () => {
        loadjs.reset()
        console.error("Unable to fetch Google Map sdk")
      },
    })
  }, [])
  return loaded
}

interface GoogleMapEvent {
  name: string
  handler?: (...args: any[]) => void
}

export const useGoogleListener = (
  instance: google.maps.MVCObject | undefined,
  events: GoogleMapEvent[],
) => {
  React.useEffect(() => {
    //@ts-ignore
    if (instance === undefined) return
    const listeners: google.maps.MapsEventListener[] = []
    events.forEach((event) => {
      if (event.handler)
        listeners.push(
          google.maps.event.addListener(instance, event.name, event.handler),
        )
    })
    return () => {
      listeners.forEach((listener) => listener.remove())
    }
  }, [instance, events])
}

export const useMemoizedOptions = (
  instance: GoogleMapObjectWithSetOptions | undefined,
  opts: any,
  prevOpts: string,
  setPrevOpts: React.Dispatch<React.SetStateAction<string>>,
) => {
  React.useEffect(() => {
    if (
      instance === undefined ||
      opts === undefined ||
      JSON.stringify(opts) === prevOpts
    )
      return
    instance.setOptions(opts)
    setPrevOpts(JSON.stringify(opts))
  }, [instance, opts])
}
