import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { useGetUserID } from '../hook/useGetUserID';
import '../components/css/FormComponents.css'

const FormTest = () => {
  const userID = useGetUserID()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    a1: 0, b1: 0, c1: 0, d1: 0, e1: 0, f1: 0, g1: 0, h1: 0, i1: 0,
    a2: 0, b2: 0, c2: 0, d2: 0, e2: 0, f2: 0, g2: 0, h2: 0, i2: 0,
    a3: 0, b3: 0, c3: 0, d3: 0, e3: 0, f3: 0, g3: 0, h3: 0, i3: 0,
    a4: 0, b4: 0, c4: 0, d4: 0, e4: 0, f4: 0, g4: 0, h4: 0, i4: 0,
    a5: 0, b5: 0, c5: 0, d5: 0, e5: 0, f5: 0, g5: 0, h5: 0, i5: 0,
    a6: 0, b6: 0, c6: 0, d6: 0, e6: 0, f6: 0, g6: 0, h6: 0, i6: 0,
    a7: 0, b7: 0, c7: 0, d7: 0, e7: 0, f7: 0, g7: 0, h7: 0, i7: 0,
  });
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
  const handleSubmitWrapper = () => {
    handleSubmit();
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/submit', {
        formData: formData,
        userID: userID
      });
      console.log('Form submitted successfully:', response.data);
      alert('Form submitted successfully!');
      navigate('/')
    } catch (err) {
      console.error('Error submitting form:', err);
      alert('Failed to submit form. Please try again later.');
    }
  }

  const handleChange = (event, questionIndex, score) => {
    const { name, value } = event.target;
    const selectValue = parseInt(value);
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: selectValue,
    }))
    console.log(name, selectValue)
    handleScoreChange(questionIndex, score)
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
    { sectionName: 'การมีส่วนร่วมกับทีม' },
    { sectionName: 'ปัญหาที่เกี่ยวกับการทำงานเป็นทีม' },
    { sectionName: 'การทำงานในโครงการที่เกี่ยวกับคนอื่น' },
    { sectionName: 'คุณสมบัติในการทำงานเป็นทีม' },
    { sectionName: 'ความพอใจในการทำงาน' },
    { sectionName: 'เมื่อได้รับงานยากในเวลาที่จำกัดและทีมงานที่ไม่คุ้นเคย' },
    { sectionName: 'เมื่อผบปัญหา' },
  ]
  const renderForm = () => {
    // all question here
    const questions = [
      // Define questions for each section here have 7 sections
      //section1
      [
        'a. ข้าพเจ้าสามารถมองเห็นโอกาศใหม่ๆ และใช้โอกาศนั้นให้เป็นประโยชน์',
        'b. ข้าพเจ้าสามารถทำงานได้ดีกับเพื่อนร่วมงานหลากหลายประเภท',
        'c. ความสามารถในการสร้างแนวคิดใหม่เป็นคุณสมบัติประจำตัวของข้าพเจ้า',
        'd. ข้าพเจ้าสามารถค้นพบและดึงความสามารถของเพื่อนร่วมงานออกมาเพื่อให้งานบรรลุวัตถุประสงค์',
        'e. ข้าพเจ้ามั่นใจว่าข้าพเจ้าสามารถทำงานทุกประเภทให้สำเร็จลุล่วง',
        'f. ความสามารถด้านเทคนิคและประสบการณ์การทำงานเป็นสมบัติล้ำค่าของข้าพเจ้า',
        'g. ข้าพเจ้าพร้อมที่จะแสดงอกกอย่างตรงไปตรงมาเพื่อความถูกต้อง',
        'h. ข้าพเจ้าสามารถบอกได้ว่าแผนงานหรือแนวคิดใดเหมาะสมกับแต่ละสถานการณ์',
        'i. ข้าพเจ้าสามารถใช้เหตุผลที่ปราศจากอคติในการเลือกวิธีปฏิบัติงาน',
      ],
      //section2
      [
        'a. ข้าพเจ้าต้องการให้การประชุมแต่ละครั้งมีการควบคุมและการจัดการที่ดี',
        'b. ข้าพเจ้าให้โอกาสมากเกินไปกับเพื่อนร่วมงานที่มีความคิดหน้าสนใจแต่แสดงออกอย่างไม่ถูกต้อง',
        'c. ข้าพเจ้าลังเลที่จะมีส่วนร่วมกับงานที่ข้าพเจ้ามีความรู้น้อย',
        'd. ข้าพเจ้ามีแนวโน้มที่จะแสดงออกมาก เมื่อคณะทำงานเริ่มเปิดประเด็นใหม่',
        'e. ทัศนคติส่วนตัวของข้าพเจ้าทำให้ข้าพเจ้ารู้สึกยากลำบากในการเข้าร่วมกลุ่มด้วยความพร้อมและมองโลกในแง่ดี',
        'f. ข้าพเจ้าบางครั้งใช้ความก้าวร้าวและเด็ดขาดในการแก้ไขปัญหาสำคัญ',
        'g. ข้าพเจ้าไม่ชอบแสดงออกว่าเป็นผู้นำ อาจเนื่องจากข้าพเจ้าคิดว่าการทำงานเป็นทีมต้องใช้ความรับผิดชอบมากเกินไป',
        'h. ข้าพเจ้ามีความคิดผุดขึ้นมาเรื่อย ๆ จนทำให้เสียสมาธิกับสิ่งที่กำลังเกิดขึ้นรอบตัว',
        'i. ข้าพเจ้าลังเลที่จะแสดงความคิดเห็นเกี่ยวกับข้อเสนอโครงการและแผนงานที่ยังไม่สมบูรณ์หรือไม่ละเอียดเพียงพอ',
      ],
      //section3
      [
        'a. ข้าพเจ้าสามารถโน้มน้าวคนอื่นได้โดยไม่จำเป็นต้องกดดัน',
        'b. ข้าพเจ้าถนัดในการป้องกันความผิดพลาดจากความเผอเรอที่อาจทำให้งานเสียหาย',
        'c. ข้าพเจ้าชอบการรวบรัดเพื่อความมันใจว่าการประชุดแต่ละครั้งไม่เสียเวลามากเกินไปหรือหลงประเด็น',
        'd. ข้าพเจ้ามีความคิดและแสดงออกเป็นเอกลักษณ์ของตนเอง',
        'e. ข้าพเจ้าพร้อมที่จะสนับสนุนข้อชี้แนะที่มีประโยชน์',
        'f. ข้าพเจ้ามองเห็นแนวคิดและแนวทางพัฒนาใหม่ๆอย่างรวดเร็ว',
        'g. ข้าพเจ้าพยายามรักษาความเป็นมืออาชีพ',
        'h. ข้าพเจ้ามีความสามารถในการตัดสินปัญหาได้ถูกต้อง',
        'i. ข้าพเจ้าสามารถบริหารจัดการให้เหมาะสมกับความต้องการของงาน',
      ],
      //section4
      [
        'a. ข้าพเจ้าชอบทำความรู้จักกับเพื่อนร่วมงานให้ดียิ่งขึ้น',
        'b. ข้าพเจ้าแสดงออกในสิ่งที่ข้าพเจ้ารู้',
        'c. ข้าพเจ้าไม่ลังเลที่จะแย้งแนวคิดของผู้อื่น',
        'd. ข้าพเจ้าโต้เถียงเมื่อคิดว่ามีบางอย่างผิดพลาด',
        'e. ข้าพเจ้ามีพรสวรรค์ในการทำงานให้สำเร็จลุล่วงตามแผน',
        'f. ข้าพเจ้าหลีกเลี่ยงประเด็นที่ชัดเจนแล้ว และชอบเปิดประเด็นสิ่งที่ยังคลุมเครือ',
        'g. ข้าพเจ้าใช้ความเป็นมืออาชีพกับงานทุกประเภท',
        'h. ข้าพเจ้าชอบเป็นผู้ประสานงานกับบุคคลภายนอก',
        'i. ข้าพเจ้าชอบรับฟังมุมมองที่หลากหลาย และสามารถนำมาใช้ในการตัดสินใจได้อย่างรวดเร็ว',
      ],
      //section5
      [
        'a. ข้าพเจ้าชอบวิเคราะห์สถานการณ์และชังน้ำหนักทางเลือกต่างๆ',
        'b. ข้าพเจ้าชอบค้นหาวิธีการแก้ไขปัญหา',
        'c. ข้าพเจ้าชอบพัฒนาความสำพันธ์กับเพื่อนร่วมงาน',
        'd. ข้าพเจ้ามีอิทธิพลมากกับการตัดสินใจของกลุ่ม',
        'e. ข้าพเจ้าชอบพบปะผู้คนที่มีแนวคิดต่างกัน',
        'f. ข้าพเจ้าสามารถทำให้คนอื่นคล้อยตามในวัตถุประสงค์และลำดับความสำคัญของงาน',
        'g. ข้าพเจ้ามีสมาธิเต็มที่กับงาน',
        'h. ข้าพเจ้าชอบงานที่ใช้ความคิดสร้างสรรค์',
        'i. ข้าพเจ้ารู้สึกว่าความสามารถพิเศษและการฝึกฝนทำให้ข้าพเจ้าได้เปรียบผู้อื่น',
      ],
      //section6
      [
        'a. ข้าพเจ้าจะค้นคว้าให้มากที่สุดเท่าที่จะจำได้',
        'b. ข้าพเจ้าจะพยายามแก้ไขปัญหาด้วยตัวเองแล้วจึงนำเสนอต่อทีมงาน',
        'c. ข้าพเจ้าอยากทำงานร่วมกับเพื่อนร่วมงานที่มีแนวคิดในเชิงบวก',
        'd. ข้าพเจ้าจะหาแนวทางลดขนาดของงานโดยแบ่งงานให้เหมาะสมที่สุดกับสมาชิกแต่ละคนในทีม',
        'e. ข้าพเจ้าสามารถรับรู้ได้ว่าอะไรคือสิ่งที่เร่งด่วน ช่วยให้มันใจได้ว่างานจะไม่ล่าช้ากว่ากำหนด',
        'f. ข้าพเจ้าเชื่อว่าข้าพเจ้าสามารถควบคุมอารมณ์ได้ดี',
        'g. ข้าพเจ้าจะทำงานหลักต่อไปภายใต้ความขัดแย้งและแรงกดดัน',
        'h. ข้าพเจ้าต้องการเป็นผู้นำของกลุ่มหากพบว่างานไม่มีความก้าวหน้า',
        'i. ข้าพเจ้าจะการสนทนาหรือการประชุดแสดงความคิดเห็นที่จะกระตุ้นให้เกิดความคิดใหม่ๆเพื่อให้งานก้าวหน้า',
      ],
      [
        'a. ข้าพเจ้าแสดงออกมาเกินไปเมื่อเพื่อนร่วมงาน “ดอง” งาน',
        'b. เพื่อนร่วมงานบางคนต่อว่า ว่าข้าพเจ้าละเอียดเกินไป',
        'c. ความต้องการตรวจสอบความถูกต้องของรายละเอียดสำคัญของข้าพเจ้าไม่เป็นที่ปรารถนาในบางเวลา',
        'd. ข้าพเจ้าเบื่อหากต้องร่วมงานกับเพื่อนร่วมงานที่เฉื่อยชา',
        'e. ข้าพเจ้าคิดส่างานเริ่มต้นได้ยากหากจุดมุ่งหมายยังไม่ชัดเจน',
        'f. ข้าพเจ้ามีปัญหาในการจัดการปัญหาที่ซับซ้อน',
        'g. ข้าพเจ้าขอความช่วยเหลือจากเพื่อนร่วมงานเมื่อได้รับงานที่ข้าพเจ้าไม่สามารถทำได้',
        'h. ข้าพเจ้าคิดว่าข้าพเจ้าทำงานคนเดียวได้ดีกว่าการทำงานเป็นทีม',
        'i. ข้าพเจ้าลังเลในการแสดงความคิดเห็นต่อหน้าผู้ใหญ่หรือผู้มีอำนาจ',
      ],

    ];

    return (
      <div className='form-container'>
        <h2 className='headliner'>ตอนที่ {section}</h2>
        {sectionNames[section - 1] && <h3 className='section-name'>{sectionNames[section - 1].sectionName}</h3>}
        {questions[section - 1].map((question, index) => (
          <div className='section-question' key={index}>
            <p className='question'>{question}</p>
            <div>
              {[...Array(11)].map((_, score) => (
                <label className='label-point' key={score}>
                  <input className='radio-input'
                    type="radio"
                    name={`${String.fromCharCode(97 + index)}${section}`}
                    value={score}
                    checked={scores[(section - 1) * 9 + index] === score}
                    onChange={(event) => handleChange(event, index, score)}
                  />
                  {score}
                </label>
              ))}
            </div>
          </div>
        ))}
        <div className='prev-next-group'>
          <div className='prev-next'>
            {section > 1 && <button className='prev-btn' onClick={handlePrevSection}>Previous</button>}
            {section < 7 && <button className='next-btn' onClick={handleNextSection}>Next</button>}
          </div>
          <div>
            <button className='submit-btn' onClick={handleSubmitWrapper}>Submit</button>
          </div>
        </div>
        <p className='total-score'>Total Score: {calculateSectionScore()}</p>
      </div>
    );
  };



  return (
    <div>
      <NavBar />
      {renderForm()}
    </div>
  );
};


export default FormTest;