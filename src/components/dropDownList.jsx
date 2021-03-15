import React from "react";

const DropDownMenu = (props) => {
  
    return (
      <div className="dropdowncontainer">
        
        <select name="" id="cars" class="listSelectOption">
       <i class="fas fa-caret-down"></i>
                <option value="all-application">{props.name}</option>
                <option value="application-name-1">{props.option1}</option>
                <option value="application-name-2">{props.option2}</option>
              </select>
      </div>
    );
}

export default DropDownMenu;