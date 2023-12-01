import{BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import PrehledSlov from "./pages/PrehledSlov"
import DetailSlova from "./pages/DetailSlova"


const App = () => {
  return <BrowserRouter>
            <Routes>
                <Route path="home" element={<Home />}> </Route>
                <Route path="prehled" element={<PrehledSlov />}> </Route>
                <Route path="slovicko/:wordId" element={<DetailSlova />}> </Route>
            </Routes>
        </BrowserRouter>
}

export default App
