import { PathRoute } from '@/constants/path-route.constant'
import Home from '@/pages/home/home'
import { createBrowserRouter, RouteObject } from 'react-router'

const router: RouteObject[] = [
  {
    path: PathRoute.Home,
    element: <Home />
  }
]
const appRouter = createBrowserRouter(router)
export default appRouter
