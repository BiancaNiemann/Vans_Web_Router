import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route 
} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, {loader as vanPageLoader} from "./pages/Vans/Vans"
import VanDetail, {loader as detailPageLoader} from "./pages/Vans/VanDetail"
import Layout from './components/Layout'
import Host from './components/Host'
import DashBoard, {loader as dashboardLoader} from './pages/Host/Dashboard'
import Reviews from './pages/Host/Reviews'
import Income from './pages/Host/Income'
import HostVans, {loader as hostPageLoader} from './pages/Host/HostVan/HostVans'
import HostVanDetail, {loader as hostDetailLoader} from './pages/Host/HostVan/HostVanDetail'
import HostVanPhotos from './pages/Host/HostVan/HostVanPhotos'
import HostVanPricing from './pages/Host/HostVan/HostVanPricing'
import HostVanInfo from './pages/Host/HostVan/HostVanInfo'
import PageNotFound from './pages/PageNotFound'
import Error from './components/Error'
import Login, {action as loginAction} from './pages/Login'
import AuthRequired from './components/AuthRequired'

import "./server"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout errorElement={<Error />}/>} >
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="login" element={<Login />} action={loginAction} />
  <Route path="vans" element={<Vans />} loader={vanPageLoader} />
  <Route path="vans/:id" element={<VanDetail />} loader={detailPageLoader} />

<Route element={<AuthRequired />} >
  <Route path="host" element={<Host />} >
    <Route index element={<DashBoard />} loader={dashboardLoader}/>
    <Route path="income" element={<Income />} />
    <Route path="reviews" element={<Reviews />} />
    <Route path="vans" element={<HostVans />} loader={hostPageLoader}/>

    <Route path="vans/:id" element={<HostVanDetail />} loader={hostDetailLoader}>
      <Route  index element={<HostVanInfo />}/>
      <Route  path="photos" element={<HostVanPhotos />}/>
      <Route  path="pricing" element={<HostVanPricing />}/>
  </Route>

</Route>
  

  </Route >
  <Route path="*" element={<PageNotFound />}/>
</Route>
))


function App() {
  return (
    <RouterProvider router={router} />
  )
}



ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);