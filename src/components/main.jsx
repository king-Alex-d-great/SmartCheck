import React, { Component } from 'react';

class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <main className="mainHomeSection">
                
                <section className="mainSection">
                    <div>
                        <input type="text" />
                        <input type="text" />
                    </div>

                    <div>
                        <div>
                            <i></i>
                            <i></i>
                            <p>Showing 10 of 5000 enteries</p>
                        </div>

                        <div>
                            <header>
                                <h5>S/N</h5>
                                <h5>Application</h5>
                                <h5>Servers mapped</h5>
                                <h5>Last scan date</h5>
                                <h5>Status</h5>
                                <div>
                                    <h5> <span>Action</span></h5>
                                    <div>
                                        <text>previous</text>
                                        <p>1</p>
                                        <p>2</p>
                                         <p>3</p>
                                          <p>5...</p>
                                          <p>5230</p>
                                    </div>
                                </div>

                            </header>

                        </div>
                    </div>
                </section>
            </main>
         );
    }
}
 
export default Main;