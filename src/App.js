import './App.css';
import Home from "./pages/Home.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <div className="bg">
          </div>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            {/* <Route exact path='/orders' element={<Orders tblOrders={tblOrders} setLists={setLists} />}></Route>
            <Route exact path='/updMenu' element={<UpdMenu />}></Route>
            <Route exact path='/feedback' element={<Feedback />}></Route>
            <Route exact path='/about' element={<About />}></Route> */}
          </Routes>
        </main>
        <Footer />
        <Analytics />
      </Router>
    </>
  );
}

export default App;
