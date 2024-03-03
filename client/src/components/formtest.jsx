import React, { useState } from 'react';

const FormTest = () => {
  // Define state variables
  const [section, setSection] = useState(1);
  const [scores, setScores] = useState(Array(7 * 9).fill(0));

  // Function to handle score selection
  const handleScoreChange = (questionIndex, score) => {
    const updatedScores = [...scores];
    updatedScores[(section - 1) * 9 + questionIndex] = score;
    setScores(updatedScores);
  };
  const calculateSectionScore = () => {
    const sectionStartIndex = (section - 1) * 9;
    const sectionScores = scores.slice(sectionStartIndex, sectionStartIndex + 9);
    return sectionScores.reduce((acc, curr) => acc + curr, 0);
  };

  const handlePrevSection = () => {
    if (section > 1) {
      setSection(section - 1);
    } else {
      alert('This is the first section.');
    }
  };
  const handleNextSection = () => {
    const sectionScore = calculateSectionScore();
    if (sectionScore <= 10) {
      if (section < 7) {
        setSection(section + 1);
      } else {
        alert('This is the last section. Form will be submitted now.');
        handleSubmit();
      }
    } else {
      alert('Please ensure the total score for this section is not more than 10.');
    }
  };

  const sectionNames = [
    { sectionName: 'section name1' },
    { sectionName: 'section name2' },
    { sectionName: 'section name3' },
    { sectionName: 'section name4' },
    { sectionName: 'section name5' },
    { sectionName: 'section name6' },
    { sectionName: 'section name7' },
  ]
  const renderForm = () => {
    // Define questions for each section
    const questions = [
      // Define questions for each section here
      [
        'Question 1',
        'Question 2',
        'Question 3',
        'Question 4',
        'Question 5',
        'Question 6',
        'Question 7',
        'Question 8',
        'Question 9',
      ],
      [
        'Question 1',
        'Question 2',
        'Question 3',
        'Question 4',
        'Question 5',
        'Question 6',
        'Question 7',
        'Question 8',
        'Question 9',
      ],
      [
        'Question 1',
        'Question 2',
        'Question 3',
        'Question 4',
        'Question 5',
        'Question 6',
        'Question 7',
        'Question 8',
        'Question 9',
      ],
      [
        'Question 1',
        'Question 2',
        'Question 3',
        'Question 4',
        'Question 5',
        'Question 6',
        'Question 7',
        'Question 8',
        'Question 9',
      ],
      [
        'Question 1',
        'Question 2',
        'Question 3',
        'Question 4',
        'Question 5',
        'Question 6',
        'Question 7',
        'Question 8',
        'Question 9',
      ],
      [
        'Question 1',
        'Question 2',
        'Question 3',
        'Question 4',
        'Question 5',
        'Question 6',
        'Question 7',
        'Question 8',
        'Question 9',
      ],
      [
        'Question 1',
        'Question 2',
        'Question 3',
        'Question 4',
        'Question 5',
        'Question 6',
        'Question 7',
        'Question 8',
        'Question 9',
      ],

    ];

    return (
      <div>
        <h2>Section {section}</h2>
        {sectionNames[section - 1] && <h3>{sectionNames[section - 1].sectionName}</h3>}
        {questions[section - 1].map((question, index) => (
          <div key={index}>
            <p>{question}</p>
            <div>
              {[...Array(11)].map((_, score) => (
                <label key={score}>
                  <input
                    type="radio"
                    name={`section-${section}-question-${index}-score`}
                    value={score}
                    checked={scores[(section - 1) * 9 + index] === score}
                    onChange={() => handleScoreChange(index, score)}
                  />
                  {score}
                </label>
              ))}
            </div>
          </div>
        ))}
        {section > 1 && <button onClick={handlePrevSection}>Previous</button>}
        {section < 7 && <button onClick={handleNextSection}>Next</button>}
      </div>
    );
  };

  const handleSubmit = () => {
    // You can add logic here to handle form submission
    console.log('Form submitted');
  };


  return (
    <div>
      {renderForm()}
      <p>Total Score: {calculateSectionScore()}</p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};


export default FormTest;