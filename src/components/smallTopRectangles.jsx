import React, { Component } from 'react';

class SmallTopRectangle extends Component {
    state = {  }
    render() { 
        return (
        
            <section id="smallrectangle">
            <div class="row">
              
            <div
                class="col-lg-3 pathBoxMain"
                style={{ backgroundColor: "white" }}
              >
                <div className="topRectangle">
                  <p id="topRectangleHeader"> Application Status</p>
                  <div className="specificTopRectangle">
                  
<div>
                      <span className="circleNumber One">10</span>
                       <p>all</p>
                    </div>

                    <div>
                      <span className="circleNumber Two">10</span>
                       <p>all</p>
                    </div>

                    <div>
                      <span className="circleNumber" style={{backgroundColor: "#FF4343F7" , border: "1px solid #FF4343F7"} }>10</span>
                       <p>all</p>
                    </div>

                  </div>
                </div>
              </div>

              <div
                class="col-lg-3 pathBoxMain"
                style={{ backgroundColor: "white" }}
              >
                <div className="topRectangle">
                  <p id="topRectangleHeader"> Application Status</p>
                  <div className="specificTopRectangle">
                  
<div>
                      <span className="circleNumber One">10</span>
                       <p>all</p>
                    </div>

                    <div>
                      <span className="circleNumber Two">10</span>
                       <p>all</p>
                    </div>

                    <div>
                      <span className="circleNumber Three">10</span>
                       <p>all</p>
                    </div>

                  </div>
                </div>
              </div>

               <div
                class="col-lg-3 pathBoxMain"
                style={{ backgroundColor: "white" }}
              >
                <div className="topRectangle">
                  <p id="topRectangleHeader"> Application Status</p>
                  <div className="specificTopRectangle60">
                     
                      <p style={{fontSize: "14px"}}><span className= "Five">60</span>
                      <br/>all</p>
                     
                  </div>
                </div>
              </div>

              </div>
              </section>
          
             
          );
    }
}
 
export default SmallTopRectangle;