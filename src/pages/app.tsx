import appRouter from '@/pages/app.router'
import { store } from '@/store/main'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router/dom'

function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </StrictMode>
  )
}

export default App
