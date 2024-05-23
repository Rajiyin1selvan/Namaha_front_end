import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import menu_bar from '../Assets/menubar_icon.png'
const Navbar = () => {

    const [menu,setMenu] = useState("astro")
    const {getTotalCartItems}= useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt=""></img>
                <p><span>N</span>AMAHA</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={menu_bar} alt="" />
            <ul ref={menuRef} className='nav-menu'>
                <li onClick={() => {setMenu("astro")}}><Link style={{textDecoration:'none'}} to='/'>Astrology</Link> {menu==="astro"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("pooja")}}><Link style={{textDecoration:'none'}} to='/pooja'>Pooja Bookings</Link>{menu==="pooja"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("travel")}}><Link style={{textDecoration:'none'}} to='/travel'>Travel Booking</Link>{menu==="travel"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("blogs")}}><Link style={{textDecoration:'none'}} to='/blogs'>Blogs</Link>{menu==="blogs"?<hr/>:<></>}</li>

            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
                :<Link to='/login'><button>Login</button></Link>
                }
                <Link to='/cart'><img src={cart} alt="" /></Link>
                <div className="nav-cart-count"> {getTotalCartItems()} </div>
            </div>

        </div>
    )
}

export default Navbar