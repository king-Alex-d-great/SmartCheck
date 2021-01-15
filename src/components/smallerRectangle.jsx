import React, { Component } from 'react';
import HomeButton from './homeButton';

class SmallRectangle extends Component {
    state = {

      showdate () {
        return new Date().toDateString()
      }
    }

    render() { 
        return (
          <div className= "smallRectangle">
            <div className="rectangleRows">
                <i></i>
                <i></i>
                <p>Showing 10 of 5000 entries</p>
              </div>
              <div className="rectangleRowsContent">
                 <div style={{display:"flex", height:"min-content", width: "10%",justifyContent: "space-between"}}>
                   <p>{this.props.serialNumber}</p>
                   <p>Application name goes here</p>
                 </div>
                
                   <p>{this.props.serversMapped}</p>
                  <p>{this.showdate()}</p>
                  <p>{this.props.status}</p>
                  <p>{this.props.action}</p>
              </div>
          </div>
              


          );
    }
}
 
export default SmallRectangle;