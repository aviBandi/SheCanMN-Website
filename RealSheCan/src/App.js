import React from 'react'
import Home from './pages/Home'
import Contact from './pages/contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from './pages/team';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/team' element={<Team />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


{/* <BrowserRouter>
<Routes>
    <Route index element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/mentors' element={<MentorsAndCoaches />} />
    <Route path='/students' element={<Students />} />
    <Route path='/outreach' element={<OutReach />} />
    <Route path='/events' element={<Events />} />
    <Route path='/sponsors' element={<Sponsors />} />
    <Route path="*" element={<NoPage />}></Route>
    <Route path= "/news" element={<News />}></Route>
    <Route path="/aboutUs" element={<AboutUs />}/>
    <Route path="/article/:index" element={<ArticlePage />} />
</Routes>
</BrowserRouter> */}