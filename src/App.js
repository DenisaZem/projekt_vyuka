import{BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import PrehledSlov from "./pages/PrehledSlov"
import DetailSlova from "./pages/DetailSlova"
import SharedLayOut from "./pages/SharedLayOut"


const App = () => {
  return <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayOut />}>
                    <Route index element={<Home />}></Route>
                    <Route path="prehled" element={<PrehledSlov />}> </Route>
                    <Route path="slovicko/:wordId" element={<DetailSlova />}> </Route>
                </Route>
            </Routes>
        </BrowserRouter>
}

export default App
