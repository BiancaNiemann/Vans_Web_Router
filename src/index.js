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
import VanDetail from "./pages/Vans/VanDetail"
import Layout from './components/Layout'
import Host from './components/Host'
import DashBoard from './pages/Host/Dashboard'
import Reviews from './pages/Host/Reviews'
import Income from './pages/Host/Income'
import HostVans from './pages/Host/HostVan/HostVans'
import HostVanDetail from './pages/Host/HostVan/HostVanDetail';
import HostVanPhotos from './pages/Host/HostVan/HostVanPhotos';
import HostVanPricing from './pages/Host/HostVan/HostVanPricing';
import HostVanInfo from './pages/Host/HostVan/HostVanInfo';
import PageNotFound from './pages/PageNotFound';
import Error from './components/Error';

import "./server"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} >
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="vans" element={<Vans />} loader={vanPageLoader} errorElement={<Error />}/>
  <Route path="vans/:id" element={<VanDetail />} />

  <Route path="host" element={<Host />}>
    <Route index element={<DashBoard />} />
    <Route path="income" element={<Income />} />
    <Route path="reviews" element={<Reviews />} />
    <Route path="vans" element={<HostVans />} />

    <Route path="vans/:id" element={<HostVanDetail />}>
      <Route  index element={<HostVanInfo />}/>
      <Route  path="photos" element={<HostVanPhotos />}/>
      <Route  path="pricing" element={<HostVanPricing />}/>
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