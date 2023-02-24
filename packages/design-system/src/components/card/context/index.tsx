/* eslint-disable @typescript-eslint/ban-types */
import React from "react"

type CardContextType = {
  currentPageData: any
  setCurrentPageData: Function
}

// Create a context that will hold the values that we are going to expose to our components.
const CardContext = React.createContext<CardContextType | null>(null)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment

const CardContextProvider = ({ children }) => {
  const [currentPageData, setCurrentPageData] = React.useState(null) as any

  const values = React.useMemo(
    () =>
      ({
        currentPageData,
        setCurrentPageData,
      } as CardContextType),
    [currentPageData],
  )

  // Finally, return the interface that we want to expose to our other components
  return <CardContext.Provider value={values}>{children}</CardContext.Provider>
}

const useCardContext = () => {
  const context = React.useContext(CardContext)

  if (context === undefined) {
    throw new Error(
      "`useCardContext` hook must be used within a `CardContextProvider` component",
    )
  }
  return context
}

export { CardContext, CardContextProvider, useCardContext }
export type { CardContextType }
