import './index.css'
import ReactDOM from 'react-dom/client'
import { MainPage } from '@/pages/MainPage'
import { StrictMode } from 'react'
import { GlobalLayout } from '@/pages/GlobalLayout'
import { ThemeProvider } from '@/shared'
import { RouterProvider, createRootRoute, createRoute, createRouter } from '@tanstack/react-router'

const rootRoute = createRootRoute({
  component: GlobalLayout
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: MainPage
})

const routeTree = rootRoute.addChildren([indexRoute])

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
