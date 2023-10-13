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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Activity from './pages/Activity'
import About from './pages/About'
import Course from './pages/Course'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount:true,
    },
  },
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={ queryClient }>
    <DataStoreProvider>
      <Toaster
          position="top-right"
          reverseOrder={false}
      />
      <Firebase />
      <BrowserRouter>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Routes>
              <Route element={ <MainTemplate /> }>
                <Route path='/' element={ <Home /> }/>
                <Route element={ <SubTemplate /> }>
                  <Route path='/profile' element={ <Profile /> }/>
                  <Route path='/activity' element={ <Activity /> }/>
                  <Route path='/course' element={ <Course /> }/>
                  <Route path='/about' element={ <About /> }/>
                </Route>
              </Route>
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </BrowserRouter>
    </DataStoreProvider>
  </QueryClientProvider>

)
