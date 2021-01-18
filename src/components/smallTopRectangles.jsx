import React, { Component } from 'react';
import CircleNumber from './circleNumber';

class SmallTopRectangle extends Component {
    state = {  }
    render() { 
        return (
             <div
                class="col-lg-3 pathBoxMain"
                style={{ backgroundColor: "white" }}
              >
                <div className="topRectangle">
                  <p> Application Status</p>
                  <div className="specificTopRectangle">
                   <CircleNumber />
                   <CircleNumber />
                   <CircleNumber />
                  </div>
                </div>
              </div>
          );
    }
}
 
export default SmallTopRectangle;