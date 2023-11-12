import React from 'react';
import { NavLink } from 'react-router-dom';

function Header({ user, onLogout, cart }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <>
      <header id="Header">
        <div className="main_header">
          <div className="top_nav" id="navbar">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="logo">
                    <NavLink to="/" title="Cart">
                      <span className="Cart_count">Cart: Ksh {cart}</span>
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                      <img className="cart_img" src="assets/images/cart_1.png" alt="cart_1" />
                    </NavLink>
                  </div>
                  <div className="nav_manu">
                    <div className="Menu_list">
                      <ul className="menu">
                        <li>
                          <NavLink className="trans" to="/">
                            Home
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="trans" to="/order">
                            Order
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="trans" to="/MyOrders">
                            MyOrders
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="trans" to="/addfood">
                            Admin
                          </NavLink>
                        </li>
                        {user ? (
                          <>
                            <li>
                              <span>Welcome {user.username}!</span>
                            </li>
                            <li>
                              <span onClick={handleLogout}>Logout</span>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <NavLink className="trans" to="/login">
                                Login
                              </NavLink>
                            </li>
                            <li>
                              <NavLink className="trans" to="/register">
                                Register
                              </NavLink>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                    <div className="Cart">
                      <NavLink to="#" title="Cart">
                        <span className="Cart_count">Cart: Ksh {cart}</span>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <img className="cart_img" src="assets/images/cart_1.png" alt="cart_1" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button id="burger" className="open-main-nav">
            <span className="burger"></span>
          </button>
          <div className="H_banner home">
            <div className="main_pitch">
              <h1 className="page_title">Order Online Your Food</h1>
              <h3 className="cntct">
                Call us<span className="call_desk"><a href="tel:+01234567890" id="typewriter_num"></a></span>
              </h3>
            </div>
          </div>
          <div className="bottom_pitch">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="main_bpitch">
                    <ul>
                      <li className="pizza active">
                        <NavLink to="#" className="trans" title="Pizza">
                          <span className="icon">Pizza</span>
                        </NavLink>
                      </li>
                      <li className="burger1">
                        <NavLink to="#" className="trans" title="Burgers">
                          <span className="icon">Burgers</span>
                        </NavLink>
                      </li>
                      <li className="salads">
                        <NavLink to="#" className="trans" title="Salads">
                          <span className="icon">Salads</span>
                        </NavLink>
                      </li>
                      <li className="fries">
                        <NavLink to="#" className="trans" title="Fries">
                          <span className="icon">Fries</span>
                        </NavLink>
                      </li>
                      <li className="drinks">
                        <NavLink to="#" className="trans" title="Drinks">
                          <span className="icon">Drinks</span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="device">
          <nav className="main-nav" id="main-nav">
            <div className="logo">
              <NavLink to="/" title="Crave Ordering">
                <img src="assets/images/logoBlack.png" alt="Crave Ordering" />
              </NavLink>
            </div>
            <ul>
              <li><NavLink to="#">Home</NavLink></li>
              <li><NavLink to="#">About</NavLink></li>
              <li><NavLink to="#">Order</NavLink></li>
              <li><NavLink to="#">Login</NavLink></li>
              <li><NavLink to="#">Register</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
