import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/NavBar'
import CardsSection from './components/CardsSection';

const AppLayout = () =>{
    return (
        <div className='appLayout'>
        <NavBar />
        <CardsSection />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);