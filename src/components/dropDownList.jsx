import React, { Component } from 'react';

class DropDownMenu extends Component {
    state = {  }
    render() { 
        return ( 
            <section>
                <div className="homePageDropDownList">
                    <button className="dropButton">All Applications</button>
                    <div className="dropDown-Content">
                        <a href>monkey</a>
                        <a href>monkey</a>
                        <a href>monkey</a>
                    </div>
                </div>
            </section>
         );
    }
}
 
export default DropDownMenu;