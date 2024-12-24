 
import {  createBrowserRouter, RouterProvider } from "react-router-dom"
 
import "./App.css"
import Singlepage from "./pages/Singlepage"
import Layout from "./pages/Layout"
import { Toaster } from "react-hot-toast"
 
const route = createBrowserRouter([
 {
  path:"/",
  element:<Layout/>
 }
,
{
path:"/singlepage/:id",
element:<Singlepage/>
}
])

const App = () => {
  return (

<div className="dark:bg-bgDark">
<Toaster/>
<RouterProvider router={route} />

</div>
  )
}

export default App