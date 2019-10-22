import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <div className = "Header">  
            <div className="container">
                <div className="row">
                    <div className="col-12  header_NightApp">
                        <p className="header_text">NigthApp</p>
                    </div>
                </div>
            </div>
        </div> 
    )
  }
}

export default Header;