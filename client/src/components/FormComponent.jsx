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
          <h3>ตอนที่ 1 การมีส่วนร่วมกับทีม</h3>
          <p>a. ข้าพเจ้าสามารถมองเห็นโอกาศใหม่ๆ และใช้โอกาศนั้นให้เป็นประโยชน์</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="a1" name="a1" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>b. ข้าพเจ้าสามารถทำงานได้ดีกับเพื่อนร่วมงานหลากหลายประเภท</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="b1" name="b1" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>c. ความสามารถในการสร้างแนวคิดใหม่เป็นคุณสมบัติประจำตัวของข้าพเจ้า</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="c1" name="c1" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>d. ข้าพเจ้าสามารถค้นพบและดึงความสามารถของเพื่อนร่วมงานออกมาเพื่อให้งานบรรลุวัตถุประสงค์</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="d1" name="d1" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>e. ข้าพเจ้ามั่นใจว่าข้าพเจ้าสามารถทำงานทุกประเภทให้สำเร็จลุล่วง</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="e1" name="e1" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>f. ความสามารถด้านเทคนิคและประสบการณ์การทำงานเป็นสมบัติล้ำค่าของข้าพเจ้า</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="f1" name="f1" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>g. ข้าพเจ้าพร้อมที่จะแสดงอกกอย่างตรงไปตรงมาเพื่อความถูกต้อง</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="g1" name="g1" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>h. ข้าพเจ้าสามารถบอกได้ว่าแผนงานหรือแนวคิดใดเหมาะสมกับแต่ละสถานการณ์</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="h1" name="h1" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>i. ข้าพเจ้าสามารถใช้เหตุผลที่ปราศจากอคติในการเลือกวิธีปฏิบัติงาน</p>
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
          <h3>ตอนที่ 2 ปัญหาที่เกี่ยวกับการทำงานเป็นทีม</h3>
          <p>a. ข้าพเจ้าต้องการให้การประชุมแต่ละครั้งมีการควบคุมและการจัดการที่ดี</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="a2" name="a2" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>b. ข้าพเจ้าให้โอกาสมากเกินไปกับเพื่อนร่วมงานที่มีความคิดหน้าสนใจแต่แสดงออกอย่างไม่ถูกต้อง</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="b2" name="b2" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>c. ข้าพเจ้าลังเลที่จะมีส่วนร่วมกับงานที่ข้าพเจ้ามีความรู้น้อย</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="c2" name="c2" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>d. ข้าพเจ้ามีแนวโน้มที่จะแสดงออกมาก เมื่อคณะทำงานเริ่มเปิดประเด็นใหม่</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="d2" name="d2" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>e. ทัศนคติส่วนตัวของข้าพเจ้าทำให้ข้าพเจ้ารู้สึกยากลำบากในการเข้าร่วมกลุ่มด้วยความพร้อมและมองโลกในแง่ดี</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="e2" name="e2" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>f. ข้าพเจ้าบางครั้งใช้ความก้าวร้าวและเด็ดขาดในการแก้ไขปัญหาสำคัญ</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="f2" name="f2" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>g. ข้าพเจ้าไม่ชอบแสดงออกว่าเป็นผู้นำ อาจเนื่องจากข้าพเจ้าคิดว่าการทำงานเป็นทีมต้องใช้ความรับผิดชอบมากเกินไป</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="g2" name="g2" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>h. ข้าพเจ้ามีความคิดผุดขึ้นมาเรื่อย ๆ จนทำให้เสียสมาธิกับสิ่งที่กำลังเกิดขึ้นรอบตัว</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="h2" name="h2" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>i. ข้าพเจ้าลังเลที่จะแสดงความคิดเห็นเกี่ยวกับข้อเสนอโครงการและแผนงานที่ยังไม่สมบูรณ์หรือไม่ละเอียดเพียงพอ</p>
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
        <fieldset name="section3">
          <h3>ตอนที่ 3. การทำงานในโครงการที่เกี่ยวกับคนอื่น</h3>
          <p>a. ข้าพเจ้าสามารถโน้มน้าวคนอื่นได้โดยไม่จำเป็นต้องกดดัน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="a3" name="a3" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>b. ข้าพเจ้าถนัดในการป้องกันความผิดพลาดจากความเผอเรอที่อาจทำให้งานเสียหาย</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="b3" name="b3" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>c. ข้าพเจ้าชอบการรวบรัดเพื่อความมันใจว่าการประชุดแต่ละครั้งไม่เสียเวลามากเกินไปหรือหลงประเด็น</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="c3" name="c3" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>d. ข้าพเจ้ามีความคิดและแสดงออกเป็นเอกลักษณ์ของตนเอง</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="d3" name="d3" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>e. ข้าพเจ้าพร้อมที่จะสนับสนุนข้อชี้แนะที่มีประโยชน์</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="e3" name="e3" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>f. ข้าพเจ้ามองเห็นแนวคิดและแนวทางพัฒนาใหม่ๆอย่างรวดเร็ว</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="f3" name="f3" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>g. ข้าพเจ้าพยายามรักษาความเป็นมืออาชีพ</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="g3" name="g3" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>h. ข้าพเจ้ามีความสามารถในการตัดสินปัญหาได้ถูกต้อง</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="h3" name="h3" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>i. ข้าพเจ้าสามารถบริหารจัดการให้เหมาะสมกับความต้องการของงาน</p>
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
        <fieldset name="section4">
          <h3>ตอนที่ 4. คุณสมบัติในการทำงานเป็นทีม</h3>
          <p>a. ข้าพเจ้าชอบทำความรู้จักกับเพื่อนร่วมงานให้ดียิ่งขึ้น</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="a4" name="a4" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>b. ข้าพเจ้าแสดงออกในสิ่งที่ข้าพเจ้ารู้</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="b4" name="b4" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>c. ข้าพเจ้าไม่ลังเลที่จะแย้งแนวคิดของผู้อื่น</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="c4" name="c4" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>d. ข้าพเจ้าโต้เถียงเมื่อคิดว่ามีบางอย่างผิดพลาด</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="d4" name="d4" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>e. ข้าพเจ้ามีพรสวรรค์ในการทำงานให้สำเร็จลุล่วงตามแผน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="e4" name="e4" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>f. ข้าพเจ้าหลีกเลี่ยงประเด็นที่ชัดเจนแล้ว และชอบเปิดประเด็นสิ่งที่ยังคลุมเครือ</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="f4" name="f4" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>g. ข้าพเจ้าใช้ความเป็นมืออาชีพกับงานทุกประเภท</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="g4" name="g4" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>h. ข้าพเจ้าชอบเป็นผู้ประสานงานกับบุคคลภายนอก</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="h4" name="h4" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>i. ข้าพเจ้าชอบรับฟังมุมมองที่หลากหลาย และสามารถนำมาใช้ในการตัดสินใจได้อย่างรวดเร็ว</p>
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
        <fieldset name="section5">
          <h3>ตอนที่ 5. ความพอใจในการทำงาน</h3>
          <p>a. ข้าพเจ้าชอบวิเคราะห์สถานการณ์และชังน้ำหนักทางเลือกต่างๆ</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="a5" name="a5" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>b. ข้าพเจ้าชอบค้นหาวิธีการแก้ไขปัญหา</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="b5" name="b5" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>c. ข้าพเจ้าชอบพัฒนาความสำพันธ์กับเพื่อนร่วมงาน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="c5" name="c5" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>d. ข้าพเจ้ามีอิทธิพลมากกับการตัดสินใจของกลุ่ม</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="d5" name="d5" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>e. ข้าพเจ้าชอบพบปะผู้คนที่มีแนวคิดต่างกัน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="e5" name="e5" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>f. ข้าพเจ้าสามารถทำให้คนอื่นคล้อยตามในวัตถุประสงค์และลำดับความสำคัญของงาน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="f5" name="f5" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>g. ข้าพเจ้ามีสมาธิเต็มที่กับงาน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="g5" name="g5" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>h. ข้าพเจ้าชอบงานที่ใช้ความคิดสร้างสรรค์</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="h5" name="h5" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>i. ข้าพเจ้ารู้สึกว่าความสามารถพิเศษและการฝึกฝนทำให้ข้าพเจ้าได้เปรียบผู้อื่น</p>
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
        <fieldset name="section6">
          <h3>ตอนที่ 6. เมื่อได้รับงานยากในเวลาที่จำกัดและทีมงานที่ไม่คุ้นเคย</h3>
          <p>a. ข้าพเจ้าจะค้นคว้าให้มากที่สุดเท่าที่จะจำได้</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="a6" name="a6" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>b. ข้าพเจ้าจะพยายามแก้ไขปัญหาด้วยตัวเองแล้วจึงนำเสนอต่อทีมงาน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="b6" name="b6" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>c. ข้าพเจ้าอยากทำงานร่วมกับเพื่อนร่วมงานที่มีแนวคิดในเชิงบวก</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="c6" name="c6" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>d. ข้าพเจ้าจะหาแนวทางลดขนาดของงานโดยแบ่งงานให้เหมาะสมที่สุดกับสมาชิกแต่ละคนในทีม</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="d6" name="d6" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>e. ข้าพเจ้าสามารถรับรู้ได้ว่าอะไรคือสิ่งที่เร่งด่วน ช่วยให้มันใจได้ว่างานจะไม่ล่าช้ากว่ากำหนด</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="e6" name="e6" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>f. ข้าพเจ้าเชื่อว่าข้าพเจ้าสามารถควบคุมอารมณ์ได้ดี</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="f6" name="f6" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>g. ข้าพเจ้าจะทำงานหลักต่อไปภายใต้ความขัดแย้งและแรงกดดัน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="g6" name="g6" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>h. ข้าพเจ้าต้องการเป็นผู้นำของกลุ่มหากพบว่างานไม่มีความก้าวหน้า</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="h6" name="h6" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>i. ข้าพเจ้าจะการสนทนาหรือการประชุดแสดงความคิดเห็นที่จะกระตุ้นให้เกิดความคิดใหม่ๆเพื่อให้งานก้าวหน้า</p>
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
        <fieldset name="section7">
          <h3>ตอนที่ 7. เมื่อผบปัญหา</h3>
          <p>a. ข้าพเจ้าแสดงออกมาเกินไปเมื่อเพื่อนร่วมงาน “ดอง” งาน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="a7" name="a7" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>b. เพื่อนร่วมงานบางคนต่อว่า ว่าข้าพเจ้าละเอียดเกินไป</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="b7" name="b7" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>c. ความต้องการตรวจสอบความถูกต้องของรายละเอียดสำคัญของข้าพเจ้าไม่เป็นที่ปรารถนาในบางเวลา</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="c7" name="c7" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>d. ข้าพเจ้าเบื่อหากต้องร่วมงานกับเพื่อนร่วมงานที่เฉื่อยชา</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="d7" name="d7" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>e. ข้าพเจ้าคิดส่างานเริ่มต้นได้ยากหากจุดมุ่งหมายยังไม่ชัดเจน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="e7" name="e7" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>f. ข้าพเจ้ามีปัญหาในการจัดการปัญหาที่ซับซ้อน</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="f7" name="f7" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>g. ข้าพเจ้าขอความช่วยเหลือจากเพื่อนร่วมงานเมื่อได้รับงานที่ข้าพเจ้าไม่สามารถทำได้</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="g7" name="g7" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>h. ข้าพเจ้าคิดว่าข้าพเจ้าทำงานคนเดียวได้ดีกว่าการทำงานเป็นทีม</p>
          <div className="Question">
            {[...Array(11).keys()].map((number) => (
              <label key={number}>
                <input type="radio" id="h7" name="h7" value={number} checked={value === number} onChange={handleChange}/>
                {number}
              </label>
            ))}
            <p>Selected value: {value}</p>
          </div>
          <p>i. ข้าพเจ้าลังเลในการแสดงความคิดเห็นต่อหน้าผู้ใหญ่หรือผู้มีอำนาจ</p>
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