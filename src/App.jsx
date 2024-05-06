import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import NotFoundPage from './pages/NotFoundPage'


const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />}/>
            <Route path='/about' element={<AboutPage />}/>
            <Route path='/projects' element={<ProjectsPage />}/>
            <Route path='*' element={<NotFoundPage />}/>
          </Route>
        )
      )
    
      return <RouterProvider router={router}/>
}

export default App