import React, { useState } from "react";

const FormComponent = () => {
  const [value, setValue] = useState(0); // Initial value set to 0

  const handleChange = (event) => {
    setValue(parseInt(event.target.value)); // Parse the value to an integer
  };
  return (
    <div>
      <form action="">
        {/*Section Question 1*/}
        <fieldset name="section1">
          <p>a. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="a1" name="a1" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>b. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="b1" name="b1" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default FormComponent