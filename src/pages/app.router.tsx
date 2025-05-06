import { PathRoute } from '@/constants/path-route.constant'
import Experiment from '@/pages/experiment/experiment'
import Home from '@/pages/home/home'
import { createBrowserRouter, RouteObject } from 'react-router'

const router: RouteObject[] = [
  {
    path: PathRoute.Home,
    element: <Home />,
    children: [
      {
        path: PathRoute.Experiment,
        element: <Experiment />
      }
    ]
  }
]
const appRouter = createBrowserRouter(router)
export default appRouter
