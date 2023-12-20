import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import { GiHamburgerMenu } from "react-icons/gi";
import usFlag from "../../assets/images/us-flag.jpg"
import { Link } from 'react-router-dom'
import { usestateValue } from '../StateProvider/StateProvider'
import { auth } from '../FirebaseFile/Firebase'

function Header() {
    const [{basket,user},dispatch]=usestateValue()
    const handleAuthentication=()=>{
        if(user){
            auth.signOut()
        }
    }
  return (
    <>
    <div className='header'>
        <Link to= '/'>
        <img
        className='header__logo'
        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
        />
        </Link>

        <div className='header__search dropdown__btncontainer'>
            
            <button className='button' >
				All <ArrowDropDownIcon className='icon' />
			</button>
            
            <input className='header__searchInput' type='text' placeholder='Search Amazon'/>
            <SearchIcon className='header__searchIcon'/>

        </div>

    
        <div className='header__nav'>

        <div className="flag">
						<img src={usFlag} alt="us-flag" />
						<span>
							EN <ArrowDropDownIcon className="flagDrop" />
						</span>
					</div>



        <Link to ={!user && '/login'}  className='header__clearlink'>
            <div onClick={handleAuthentication} className='header__option'>
                <span className='header__optionLineOne'>Hello {!user ? 'Guest':user.email}</span>
                
                <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'} </span>
                
            </div>
        </Link>
           
           <Link to='/orders' className='header__clearlink'>
            <div className='header__option'>
                <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineTwo'>& Orders</span>
            </div>
            </Link>

            <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>
            <Link to="/checkout" className='header__clearlink'>
            <div className='header__optionBasket'>
                <ShoppingBasketIcon/>
                <span className='header__optionLineTwo header__basketCount'>
                    {basket.length}
                </span>
            </div>
            </Link>

        </div>
    </div>
    {/* // nav section start here  */}

    <nav className="subnavigation" id="top">
				<ul className="submenu">
					<li>
						<a href="##">
							<GiHamburgerMenu className="menu__icon" /> All
						</a>
					</li>
					<li>
						<a href="">Last Minute Deals</a>
					</li>
					<li>
						<a href=""> Gift Cards</a>
					</li>
					<li>
						<a href="">Medical Care</a>
					</li>
					<li>
						<a href="">Best Sellers</a>
					</li>
					<li>
						<a href="">Amazon Basics</a>
					</li>
					<li>
						<a href="">Registry</a>
					</li>
					<li>
						<a href="">Today's Deals</a>
					</li>
					<li>
						<a href="">Customer Service</a>
					</li>
					<li>
						<a href="">Music</a>
					</li>
					<li>
						<a href="">Whole Foods</a>
					</li>
					<li>
						<a href="">Books</a>
					</li>
				</ul>
				<ul className="submenu">
					<li className="submenu__right">
						<a href="">Shop great deals now</a>
					</li>
				</ul>
			</nav>
            </>
  )
}

export default Header