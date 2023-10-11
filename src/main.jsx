import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainTemplate from './layouts/MainTemplate.jsx'
import Home from './pages/Home'
import { DataStoreProvider } from './context/DataStoreContext'
import Firebase from './Firebase/FirebaseComponent'
import { Toaster } from 'react-hot-toast'
import Profile from './pages/Profile'
import SubTemplate from './layouts/SubTemplate'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DataStoreProvider>
    <Toaster
        position="top-right"
        reverseOrder={false}
    />
    <Firebase />
    <BrowserRouter>
      <Routes>
        <Route element={ <MainTemplate /> }>
          <Route path='/' element={ <Home /> }/>
          <Route element={ <SubTemplate /> }>
            <Route path='/profile' element={ <Profile /> }/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </DataStoreProvider>
)
