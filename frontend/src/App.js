import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

/* Pages Imports */
import DashboardPage from './pages/dashboard.pages'
import ExplorePage from './pages/explore.pages'
import CreatePage from './pages/create.pages'

/* Styling Imports */
import "./App.css"
import "./"

/* Component Imports */
import MainHeader from "./components/main_header.component";

function App() {
  return (
    <div className="App">
        <div className="main_container">
          {/* Background Divs */}
          <div className="background_div_blue"></div>

          {/* Structure Start Here */}
          <div className="content_wrapper">
            <MainHeader/>

            <BrowserRouter>
              <Routes>
                <Route exact path='/' element={<DashboardPage/>}/>
                <Route path='/explore' element={<ExplorePage/>}/>
                <Route path='/create' element={<CreatePage/>}/>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
    </div>
  );
}

export default App;
