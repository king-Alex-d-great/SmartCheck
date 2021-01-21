import React, { Component } from 'react';

class Checkboxes extends Component {
    state = {  }
    render() { 
        return (  <fieldset className="form-group-row checkboxcontainer">
              <label for="Servername" className="col-sm-2 col-form-label">
                Application
              </label>
              <div className="col-sm-10 maincheckboxcontainer">
                <input type="checkbox" name="maincheckbox1" className="tick" />
              <label for="maincheckbox">checkbox1</label>

              <div>
              <p>some text here</p>
              <div id="checkboxes">
                <fieldset className="checkbox">
                  <input type="checkbox" name="checkbox2" className="tick" />
                  <label for="checkbox2">checkbox2</label>
                </fieldset>
                <fieldset className="checkbox">
                  <input type="checkbox" name="checkbox3" className="tick" />
                  <label for="checkbox3">checkbox3</label>
                </fieldset>
                <fieldset className="checkbox">
                  <input type="checkbox" name="checkbox4" className="tick" />
                  <label for="checkbox4">checkbox4</label>
                </fieldset>
                <fieldset className="checkbox">
                  <input type="checkbox" name="checkbox5" className="tick" />
                  <label for="checkbox5">checkbox5</label>
                </fieldset>
              </div>
            </div>
             </div>
            </fieldset>
    );
    }
}
 
export default Checkboxes;