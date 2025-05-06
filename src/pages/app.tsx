import { antdTokens } from '@/config/antd-tokens.config'
import appRouter from '@/pages/app.router'
import { store } from '@/store/main'
import { ConfigProvider } from 'antd'
import ru_RU from 'antd/locale/ru_RU'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router/dom'

import '@/assets/styles/main.css'

function App() {
  return (
    <StrictMode>
      <ConfigProvider locale={ru_RU} theme={antdTokens}>
        <Provider store={store}>
          <RouterProvider router={appRouter} />
        </Provider>
      </ConfigProvider>
    </StrictMode>
  )
}

export default App
