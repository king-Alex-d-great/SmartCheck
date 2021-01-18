import React, { Component } from "react";

class CreateServer extends Component {
  state = {};
  render() {
    return (

      <main className="serverSection">
      <header>
        <h1>Create a Server</h1>
      </header>
      <section>
        <p>Enter your server details</p>
        <form>
          <fieldset className="form-group-row">
            <label for="Servername" className="col-sm-2 col-form-label">Server Name</label>
           <div className="col-sm-10 ">
           <input type="text" name="Servername" className="textField" />
           </div>  
           </fieldset>

          

          <fieldset className="form-group-row">
            <label for="Servername" className="col-sm-2 col-form-label">Server IP</label>
           <div className="col-sm-10">
           <input type="text" name="Servername" className="textField" />
           </div>  
           </fieldset>

           <fieldset className="form-group-row">
            <label for="Servername" className="col-sm-2 col-form-label">Server IP</label>
           <div className="col-sm-10">
           <input type="text" name="Servername" className="textField" />
           </div>  
           </fieldset>

           <fieldset className="form-group-row">
            <label for="Servername" className="col-sm-2 col-form-label">Server IP</label>
           <div className="col-sm-10 inputContainer">
           <input type="text" name="Servername" className="textField" />
           </div>  
           </fieldset>

           
         
        </form>
        
      </section>
      <div>
             <button style={{marginRight: "10px"}}>Cancel</button>
             <button>Create</button>
           </div>
    </main>

      
    );
  }
}

export default CreateServer;
