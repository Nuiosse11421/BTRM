import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import '../components/js/noticeScore'
import '../components/css/formhide.css'

const FormComponent = () => {
  const navigate = useNavigate()
  // const [value, setValue] = useState({
    
  // }); // Initial value set to 0
  const [loggenIn,setLoggenIn] = useState(false)
  const [formData, setFormData] = useState({
    a1:0,b1:0,c1:0,d1:0,e1:0,f1:0,g1:0,h1:0,i1:0,
    a2:0,b2:0,c2:0,d2:0,e2:0,f2:0,g2:0,h2:0,i2:0,
    a3:0,b3:0,c3:0,d3:0,e3:0,f3:0,g3:0,h3:0,i3:0,
    a4:0,b4:0,c4:0,d4:0,e4:0,f4:0,g4:0,h4:0,i4:0,
    a5:0,b5:0,c5:0,d5:0,e5:0,f5:0,g5:0,h5:0,i5:0,
    a6:0,b6:0,c6:0,d6:0,e6:0,f6:0,g6:0,h6:0,i6:0,
    a7:0,b7:0,c7:0,d7:0,e7:0,f7:0,g7:0,h7:0,i7:0,
  })
  // set Calculate value Score from form
  


  // hide field section
  const sectionHide = document.querySelectorAll('.section')
  let SectionIndex = 0


  //function calculateScore
  
  const ss = (index)=>{
    sectionHide.forEach((section,i)=>{
      if(i == index){
        section.classList.add('active')
      }
      else{ section.classList.remove('active')}
    })
    document.getElementById('prevButton').style.display = index ===0 ? 'none':'block'
    document.getElementById('nextButton').style.display = index === sectionHide.length -1?'nonde':'block'
  }
  const nextSection = ()=>{
    if(SectionIndex < sectionHide.length - 1){
      SectionIndex++
      ss(SectionIndex)
    }
  }
  const prevSection = ()=>{
    if(SectionIndex > 0){
      SectionIndex--
      ss(SectionIndex)
    }
  }
  const handleChange = (event,question) => {
    const selectedValue = parseInt(event.target.value)
    console.log(`Question: ${question} selected value: ${selectedValue}`)
  };

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      setLoggenIn(true)
    }
  },[])


  const handleSubmit = async (event)=>{
    event.preventDefault()
    try{
      await axios.post('http://localhost:8000/form/submitForm',formData)
      const token = localStorage.getItem('token')
      if(!token){
        navigate('/login')
      }
    }catch(err){
      console.log('Error submitting form data: ',formData)
    }
  }
  return (
    <div>
      <form id="BelbinForm" onSubmit={handleSubmit}>
        {/*Section Question 1*/}
        <fieldset className="section active" data-index ='1'>
          <h3>ตอนที่ 1 การมีส่วนร่วมกับทีม</h3>
          <p>a. ข้าพเจ้าสามารถมองเห็นโอกาศใหม่ๆ และใช้โอกาศนั้นให้เป็นประโยชน์</p>
          <div className="Question">
          {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="a1" name="a1" onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
            
          </div>
          <p>b. ข้าพเจ้าสามารถทำงานได้ดีกับเพื่อนร่วมงานหลากหลายประเภท</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="b1" name="b1" onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>c. ความสามารถในการสร้างแนวคิดใหม่เป็นคุณสมบัติประจำตัวของข้าพเจ้า</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="c1" name="c1" onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
            
          </div>
          <p>d. ข้าพเจ้าสามารถค้นพบและดึงความสามารถของเพื่อนร่วมงานออกมาเพื่อให้งานบรรลุวัตถุประสงค์</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="d1" name="d1" onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
            
          </div>
          <p>e. ข้าพเจ้ามั่นใจว่าข้าพเจ้าสามารถทำงานทุกประเภทให้สำเร็จลุล่วง</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="e1" name="e1" onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
            
          </div>
          <p>f. ความสามารถด้านเทคนิคและประสบการณ์การทำงานเป็นสมบัติล้ำค่าของข้าพเจ้า</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="f1" name="f1" onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>g. ข้าพเจ้าพร้อมที่จะแสดงอกกอย่างตรงไปตรงมาเพื่อความถูกต้อง</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="g1" name="g1" onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
            
          </div>
          <p>h. ข้าพเจ้าสามารถบอกได้ว่าแผนงานหรือแนวคิดใดเหมาะสมกับแต่ละสถานการณ์</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="h1" name="h1" onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>i. ข้าพเจ้าสามารถใช้เหตุผลที่ปราศจากอคติในการเลือกวิธีปฏิบัติงาน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="i1" name="i1" onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
        </fieldset>
        
        {/*section Question 2*/}
        <fieldset className="section" data-index ='2'>
          <h3>ตอนที่ 2 ปัญหาที่เกี่ยวกับการทำงานเป็นทีม</h3>
          <p>a. ข้าพเจ้าต้องการให้การประชุมแต่ละครั้งมีการควบคุมและการจัดการที่ดี</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="a2" name="a2" onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>b. ข้าพเจ้าให้โอกาสมากเกินไปกับเพื่อนร่วมงานที่มีความคิดหน้าสนใจแต่แสดงออกอย่างไม่ถูกต้อง</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="b2" name="b2"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>c. ข้าพเจ้าลังเลที่จะมีส่วนร่วมกับงานที่ข้าพเจ้ามีความรู้น้อย</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="c2" name="c2"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>d. ข้าพเจ้ามีแนวโน้มที่จะแสดงออกมาก เมื่อคณะทำงานเริ่มเปิดประเด็นใหม่</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="d2" name="d2"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>e. ทัศนคติส่วนตัวของข้าพเจ้าทำให้ข้าพเจ้ารู้สึกยากลำบากในการเข้าร่วมกลุ่มด้วยความพร้อมและมองโลกในแง่ดี</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="e2" name="e2"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>f. ข้าพเจ้าบางครั้งใช้ความก้าวร้าวและเด็ดขาดในการแก้ไขปัญหาสำคัญ</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="f2" name="f2"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>g. ข้าพเจ้าไม่ชอบแสดงออกว่าเป็นผู้นำ อาจเนื่องจากข้าพเจ้าคิดว่าการทำงานเป็นทีมต้องใช้ความรับผิดชอบมากเกินไป</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="g2" name="g2"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>h. ข้าพเจ้ามีความคิดผุดขึ้นมาเรื่อย ๆ จนทำให้เสียสมาธิกับสิ่งที่กำลังเกิดขึ้นรอบตัว</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="h2" name="h2"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>i. ข้าพเจ้าลังเลที่จะแสดงความคิดเห็นเกี่ยวกับข้อเสนอโครงการและแผนงานที่ยังไม่สมบูรณ์หรือไม่ละเอียดเพียงพอ</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="i2" name="i2"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
        </fieldset>

        {/*section Question 3 */}
        <fieldset className="section" data-index ='3'>
          <h3>ตอนที่ 3. การทำงานในโครงการที่เกี่ยวกับคนอื่น</h3>
          <p>a. ข้าพเจ้าสามารถโน้มน้าวคนอื่นได้โดยไม่จำเป็นต้องกดดัน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="a3" name="a3"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>b. ข้าพเจ้าถนัดในการป้องกันความผิดพลาดจากความเผอเรอที่อาจทำให้งานเสียหาย</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="b3" name="b3"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>c. ข้าพเจ้าชอบการรวบรัดเพื่อความมันใจว่าการประชุดแต่ละครั้งไม่เสียเวลามากเกินไปหรือหลงประเด็น</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="c3" name="c3"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>d. ข้าพเจ้ามีความคิดและแสดงออกเป็นเอกลักษณ์ของตนเอง</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="d3" name="d3"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>e. ข้าพเจ้าพร้อมที่จะสนับสนุนข้อชี้แนะที่มีประโยชน์</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="e3" name="e3"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>f. ข้าพเจ้ามองเห็นแนวคิดและแนวทางพัฒนาใหม่ๆอย่างรวดเร็ว</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="f3" name="f3"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>g. ข้าพเจ้าพยายามรักษาความเป็นมืออาชีพ</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="g3" name="g3"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>h. ข้าพเจ้ามีความสามารถในการตัดสินปัญหาได้ถูกต้อง</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="h3" name="h3"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>i. ข้าพเจ้าสามารถบริหารจัดการให้เหมาะสมกับความต้องการของงาน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="i3" name="i3"  onChange={handleChange} value={number} defaultChecked={number === 0} />
                {number}
              </label>
            ))}
          </div>
        </fieldset>

        {/*section Question 4 */}
        <fieldset className="section" data-index ='4'>
          <h3>ตอนที่ 4. คุณสมบัติในการทำงานเป็นทีม</h3>
          <p>a. ข้าพเจ้าชอบทำความรู้จักกับเพื่อนร่วมงานให้ดียิ่งขึ้น</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="a4" name="a4"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>b. ข้าพเจ้าแสดงออกในสิ่งที่ข้าพเจ้ารู้</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="b4" name="b4"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>c. ข้าพเจ้าไม่ลังเลที่จะแย้งแนวคิดของผู้อื่น</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="c4" name="c4"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>d. ข้าพเจ้าโต้เถียงเมื่อคิดว่ามีบางอย่างผิดพลาด</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="d4" name="d4"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>e. ข้าพเจ้ามีพรสวรรค์ในการทำงานให้สำเร็จลุล่วงตามแผน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="e4" name="e4"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>f. ข้าพเจ้าหลีกเลี่ยงประเด็นที่ชัดเจนแล้ว และชอบเปิดประเด็นสิ่งที่ยังคลุมเครือ</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="f4" name="f4"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>g. ข้าพเจ้าใช้ความเป็นมืออาชีพกับงานทุกประเภท</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="g4" name="g4"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>h. ข้าพเจ้าชอบเป็นผู้ประสานงานกับบุคคลภายนอก</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="h4" name="h4"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>i. ข้าพเจ้าชอบรับฟังมุมมองที่หลากหลาย และสามารถนำมาใช้ในการตัดสินใจได้อย่างรวดเร็ว</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="i4" name="i4"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
        </fieldset>

        {/*Section Question 5*/}
        <fieldset className="section" data-index ='5'>
          <h3>ตอนที่ 5. ความพอใจในการทำงาน</h3>
          <p>a. ข้าพเจ้าชอบวิเคราะห์สถานการณ์และชังน้ำหนักทางเลือกต่างๆ</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="a5" name="a5"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>b. ข้าพเจ้าชอบค้นหาวิธีการแก้ไขปัญหา</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="b5" name="b5"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>c. ข้าพเจ้าชอบพัฒนาความสำพันธ์กับเพื่อนร่วมงาน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="c5" name="c5"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>d. ข้าพเจ้ามีอิทธิพลมากกับการตัดสินใจของกลุ่ม</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="d5" name="d5"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>e. ข้าพเจ้าชอบพบปะผู้คนที่มีแนวคิดต่างกัน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="e5" name="e5"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>f. ข้าพเจ้าสามารถทำให้คนอื่นคล้อยตามในวัตถุประสงค์และลำดับความสำคัญของงาน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="f5" name="f5"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>g. ข้าพเจ้ามีสมาธิเต็มที่กับงาน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="g5" name="g5"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>h. ข้าพเจ้าชอบงานที่ใช้ความคิดสร้างสรรค์</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="h5" name="h5"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>i. ข้าพเจ้ารู้สึกว่าความสามารถพิเศษและการฝึกฝนทำให้ข้าพเจ้าได้เปรียบผู้อื่น</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="i5" name="i5"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
        </fieldset>
        
        {/*Section Question 6*/}
        <fieldset className="section" data-index ='6'>
          <h3>ตอนที่ 6. เมื่อได้รับงานยากในเวลาที่จำกัดและทีมงานที่ไม่คุ้นเคย</h3>
          <p>a. ข้าพเจ้าจะค้นคว้าให้มากที่สุดเท่าที่จะจำได้</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="a6" name="a6"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>b. ข้าพเจ้าจะพยายามแก้ไขปัญหาด้วยตัวเองแล้วจึงนำเสนอต่อทีมงาน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="b6" name="b6"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>c. ข้าพเจ้าอยากทำงานร่วมกับเพื่อนร่วมงานที่มีแนวคิดในเชิงบวก</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="c6" name="c6"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>d. ข้าพเจ้าจะหาแนวทางลดขนาดของงานโดยแบ่งงานให้เหมาะสมที่สุดกับสมาชิกแต่ละคนในทีม</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="d6" name="d6"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>e. ข้าพเจ้าสามารถรับรู้ได้ว่าอะไรคือสิ่งที่เร่งด่วน ช่วยให้มันใจได้ว่างานจะไม่ล่าช้ากว่ากำหนด</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="e6" name="e6"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>f. ข้าพเจ้าเชื่อว่าข้าพเจ้าสามารถควบคุมอารมณ์ได้ดี</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="f6" name="f6"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>g. ข้าพเจ้าจะทำงานหลักต่อไปภายใต้ความขัดแย้งและแรงกดดัน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="g6" name="g6"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>h. ข้าพเจ้าต้องการเป็นผู้นำของกลุ่มหากพบว่างานไม่มีความก้าวหน้า</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="h6" name="h6"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>i. ข้าพเจ้าจะการสนทนาหรือการประชุดแสดงความคิดเห็นที่จะกระตุ้นให้เกิดความคิดใหม่ๆเพื่อให้งานก้าวหน้า</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="i6" name="i6"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
        </fieldset>
        
        {/*Section Question 7*/}
        <fieldset className="section" data-index ='7'>
          <h3>ตอนที่ 7. เมื่อผบปัญหา</h3>
          <p>a. ข้าพเจ้าแสดงออกมาเกินไปเมื่อเพื่อนร่วมงาน “ดอง” งาน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="a7" name="a7"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>b. เพื่อนร่วมงานบางคนต่อว่า ว่าข้าพเจ้าละเอียดเกินไป</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="b7" name="b7"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>c. ความต้องการตรวจสอบความถูกต้องของรายละเอียดสำคัญของข้าพเจ้าไม่เป็นที่ปรารถนาในบางเวลา</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="c7" name="c7"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>d. ข้าพเจ้าเบื่อหากต้องร่วมงานกับเพื่อนร่วมงานที่เฉื่อยชา</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="d7" name="d7"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>e. ข้าพเจ้าคิดส่างานเริ่มต้นได้ยากหากจุดมุ่งหมายยังไม่ชัดเจน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="e7" name="e7"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>f. ข้าพเจ้ามีปัญหาในการจัดการปัญหาที่ซับซ้อน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="f7" name="f7"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>g. ข้าพเจ้าขอความช่วยเหลือจากเพื่อนร่วมงานเมื่อได้รับงานที่ข้าพเจ้าไม่สามารถทำได้</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="g7" name="g7"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>h. ข้าพเจ้าคิดว่าข้าพเจ้าทำงานคนเดียวได้ดีกว่าการทำงานเป็นทีม</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="h7" name="h7"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
          <p>i. ข้าพเจ้าลังเลในการแสดงความคิดเห็นต่อหน้าผู้ใหญ่หรือผู้มีอำนาจ</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="i7" name="i7"  onChange={handleChange} value={number} defaultChecked={number === 0}/>
                {number}
              </label>
            ))}
          </div>
        </fieldset>

      </form>
      <button id="prevButton" onClick={prevSection}>Previous</button>
      <button id="nextButton" onClick={nextSection}>Next</button>
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <div className="container-fluid">
                <div className="text-center" id="total-score-notifications"></div>
      </div>
    </div>
  )
}

export default FormComponent