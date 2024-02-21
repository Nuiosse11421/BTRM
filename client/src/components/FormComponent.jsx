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
          <p>c. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="c1" name="c1" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>d. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="d1" name="d1" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>e. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="e1" name="e1" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>f. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="f1" name="f1" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>g. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="g1" name="g1" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>h. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="h1" name="h1" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>i. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="i1" name="i1" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
        </fieldset>
        {/*Section Question 2*/}
        <fieldset name="section2">
          <p>a. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="a2" name="a2" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>b. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="b2" name="b2" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>c. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="c2" name="c2" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>d. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="d2" name="d2" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>e. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="e2" name="e2" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>f. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="f2" name="f2" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>g. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="g2" name="g2" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>h. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="h2" name="h2" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>i. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="i2" name="i2" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
        </fieldset>
        {/*Section Question 3*/}
        <fieldset name="section1">
          <p>a. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="a3" name="a3" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>b. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="b3" name="b3" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>c. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="c3" name="c3" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>d. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="d3" name="d3" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>e. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="e3" name="e3" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>f. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="f3" name="f3" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>g. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="g3" name="g3" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>h. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="h3" name="h3" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>i. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="i3" name="i3" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
        </fieldset>
        {/*Section Question 4*/}
        <fieldset name="section1">
          <p>a. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="a4" name="a4" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>b. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="b4" name="b4" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>c. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="c4" name="c4" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>d. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="d4" name="d4" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>e. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="e4" name="e4" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>f. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="f4" name="f4" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>g. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="g4" name="g4" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>h. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="h4" name="h4" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>i. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="i4" name="i4" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
        </fieldset>
        {/*Section Question 5*/}
        <fieldset name="section1">
          <p>a. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="a5" name="a5" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>b. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="b5" name="b5" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>c. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="c5" name="c5" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>d. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="d5" name="d5" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>e. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="e5" name="e5" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>f. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="f5" name="f5" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>g. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="g5" name="g5" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>h. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="h5" name="h5" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>i. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="i5" name="i5" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
        </fieldset>
        {/*Section Question 6*/}
        <fieldset name="section1">
          <p>a. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="a6" name="a6" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>b. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="b6" name="b6" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>c. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="c6" name="c6" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>d. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="d6" name="d6" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>e. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="e6" name="e6" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>f. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="f6" name="f6" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>g. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="g6" name="g6" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>h. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="h6" name="h6" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>i. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="i6" name="i6" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
        </fieldset>
        {/*Section Question 7*/}
        <fieldset name="section1">
          <p>a. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="a7" name="a7" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>b. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="b7" name="b7" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>c. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="c7" name="c7" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>d. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="d7" name="d7" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>e. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="e7" name="e7" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>f. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="f7" name="f7" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>g. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="g7" name="g7" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>h. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="h7" name="h7" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>i. ทดสอบการเขียน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="i7" name="i7" value={number} checked={value === number} onChange={handleChange}/>
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