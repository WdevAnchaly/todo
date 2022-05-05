import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/App';
import Home from './components/pages/index';
import Checkbox from './components/pages/checkbox';



const Root =()=> {
    return (
<>
         <BrowserRouter>
            <Layout>
              <Routes>
                <Route exact path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
                <Route exact path={`${process.env.PUBLIC_URL}/check`} element={<Checkbox />} />
              </Routes>
            </Layout>
          </BrowserRouter>
          </>
    )
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);