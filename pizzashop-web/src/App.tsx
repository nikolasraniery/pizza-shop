import './index.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { router } from '@/routes.tsx'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Pizza Shop" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
