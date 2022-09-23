import Header from "../components/Header";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import { DataProvider } from "../context";
import Home from "./Home";
import Footer from "../components/Footer";
import PagePropos from "./PagePropos";
import Page404 from "./Page404";
import PageLogement from "./PageLogement";

function App() {
 
  return (
    <BrowserRouter>
      <div className="App">
        <DataProvider>
          <Header />
          <Routes>
              {/* Landing page */}
              <Route exact path="/" element={<Home />}/>
              <Route path="/propos" element={<PagePropos />}/>
              <Route path="/logement/:id" element={<PageLogement />}/>
              <Route path="/*" element={<Page404 />}/>
          </Routes>
          <Footer />
        </DataProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
