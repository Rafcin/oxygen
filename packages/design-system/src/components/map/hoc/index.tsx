import React from "react"

const validate = () =>
  // eslint-disable-next-line no-prototype-builtins
  window.hasOwnProperty("google") && google.maps && google.maps.visualization

const withSecurityBounder = (WrappedComponent: any) => (props: any) => {
  const [visLoaded, setVisLoaded] = React.useState(false)
  React.useEffect(() => {
    if (validate()) {
      setVisLoaded(true)
      return
    }
    const timer = setInterval(() => {
      if (validate()) {
        setVisLoaded(true)
        clearInterval(timer)
      }
    }, 500)
  }, [])

  return <>{visLoaded ? <WrappedComponent {...props} /> : null}</>
}

export default withSecurityBounder
