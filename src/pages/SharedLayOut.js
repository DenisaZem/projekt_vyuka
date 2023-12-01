import { Outlet } from "react-router-dom"
import Navigace from "../components/Navigace"
import Footer from "../components/Footer"


const LayOut = () => {
  return <>
    <Navigace />
    <Outlet />
    <Footer />
  </>
}
export default LayOut