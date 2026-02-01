import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import StaterManagement from './StateManagement.tsx'
import HideAndShow from './toggle/HideAndShow.tsx'
import ClockComponents from './clock/ClockComponents.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <StaterManagement /> */}
    {/* <HideAndShow /> */}
  <ClockComponents />

  </StrictMode>,
)
