import React, { Component } from 'react';
import logo from '../images/logo.svg'

import { FaAlignRight} from 'react-icons/fa';  
import { Link} from 'react-router-dom';  

class Navbar extends Component {
    state={isOpen:false}

    handletoggle=()=>{
        this.setState({isOpen:!this.state.isOpen})
    }




    render() {
        return (
           <nav className="navbar" >
               <div className="nav-center">
               <div className="nav-header">
                  <Link to="/">
                  <img src={logo} alt="Beach Reasort"/>

                  </Link>
                  <button type="button" className="nav-btn" onClick={this.handletoggle}>
                      <FaAlignRight className="nav-icon"  />

                  </button>
                 
                    
                   
                   
               </div>
               <ul className={this.state.isOpen ? "nav-links show-nav" :"nav-links" }>
                      <li>
                           <Link to="/">
                               HOME

                          </Link>
                       </li>
                      <li>
                           <Link to="/room">
                               ROOMS

                          </Link>
                      </li>
                      <li>
                           <Link to="/error">
                               HOME

                          </Link>
                      </li>

                  </ul>
    
               </div>
               
           </nav>


           
        );
    }
}

export default Navbar;