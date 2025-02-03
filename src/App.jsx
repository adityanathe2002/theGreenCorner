import React, { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { routingPages } from './component/Routing/RoutingPages'
import Home from './component/Home/Home'
// import AppContext from './component/Context/AppContext'
let AppContext = React.lazy(() => import("./component/Context/AppContext"))

const App = () => {

  return (
    <div>
      <AppContext>
        <RouterProvider router={routingPages}>
          <Suspense fallback="loading...">
            <Home />
          </Suspense>
        </RouterProvider>
      </AppContext>
    </div>
  )
}

export default App
