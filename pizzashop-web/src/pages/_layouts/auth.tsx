import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="flex h-screen">
      <h1>Autenticação</h1>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
