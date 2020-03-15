import React, { Component } from 'react'
import MainLayout from '../MainLayout/MainLayout';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowDetailReferent: false,
            isShowDetailFeature:false
        }
        this.checkStatusClickedReadmore = this.checkStatusClickedReadmore.bind(this);
    }
    checkStatusClickedReadmore = (e) => {
        if(parseInt(e.target.value) === 1){
            this.setState({
                isShowDetailReferent: !this.state.isShowDetailReferent
            })
        }else if(parseInt(e.target.value) === 2){
            this.setState({
                isShowDetailFeature: !this.state.isShowDetailFeature
            })
        }        
    }
    render() {
        return (
            <MainLayout>
                <div className="warpper-skew">
                </div>
                <div className="skew-bg mb-5">
                    <div className="container-page-header">
                        <div className="container-body">
                            <img className="img-resposive-design mb-5" src="https://lamanzanamordida.net/app/uploads-lamanzanamordida.net/2019/11/illustrator.jpg" alt="ai" />

                            <h1 className="text-white">
                                ยินดีต้อนรับเข้าสู่คอร์สการสอนใช้งานโปรแกรม <span>lllustrator</span>
                            </h1>
                            <p className="text-white">
                                Hello Welcome To lllustrator Tutorial
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-body my-5">
                    <h3 className="my-5">
                        ทำความรู้จักโปรแกรม Illustrator และส่วนประกอบต่างๆ
                    <div className="underline"></div>
                    </h3>
                    <img className="img-resposive-design" src="http://www.vdoschool.com/vdo/images/grafic01/et-site-banner_illustrator-cs6-32642_516x173.png" alt="img-ai" />
                    <p className="lead text-left my-5">
                        <span className="pl-5"></span>Adobe Illustrator เป็นโปรแกรมที่ใช้กันอย่างแพร่หลายในการออกแบบกราฟิก โดยที่โปรแกรมนี้มักจะนำไปใช้สำหรับการวาดภาพ
                        หรือการออกแบบสัญลักษณ์เนื่องจากเป็นโปรมแกรมที่ทำงานด้วยระบบ Vector ซึ่งเป็นการสร้างภาพกราฟิกจากการคำนวณของโปรแกรม
                        โดยไม่จำเป็นต้องกำหนดความละเอียดของภาพทำให้รูปภาพที่วาดจากโปรแกรมนี้มีความคมชัดสวยงาม
                        และยังสามารถปรับเปลี่ยนขนาดได้หลายครั้ง โดยที่คุณภาพของภาพยังคงเดิม
                    </p>
                    <p className="lead text-left my-5">
                        <span className="pl-5"></span>
                        จุดเด่นของ โปรแกรม Illustrator ภาพที่ได้จากการ วาดภาพ โดยใช้ โปรแกรม Illustrator จะมีลักษณะเป็นภาพกราฟิกประเภทเวคเตอร์
                        ซึ่งจะมีความคมชัดอย่างมาก เนื่องจากลายเส้นของภาพ ประเภทเวคเตอร์ จะไม่แตกเหมือนกับภาพบิทแมพ โดยไฟล์ภาพที่ได้จาก
                        โปรแกรม Illustrator จะได้ภาพที่มีความคมชัด ไฟล์ที่ได้จะมีนามสกุลเป็น .ai, .pdf, .eps ที่สามารถนำไปใช้กับโปรแกรมที่มีความสามารถใน
                        การออกแบบกราฟิกอื่นๆ ได้อีกด้วย ไม่ว่าจะเป็นโปรแกรม Photoshop, Flash, InDesign ฯลฯ
                    </p>
                    {this.state.isShowDetailReferent &&
                    <div className="text-left">
                        <h5>
                            ภาพบนคอมพิวเตอร์นั้น มีวิธีการประมาผล 2 แบบแตกต่างกันดังนี้
                        </h5>
                        <ul>
                            <li>
                                การประมวลแบบเวกเตอร์ (vector) เป็นการประมวลผลแบบอาศัยการคำนวณทางคณิตศาสตร์ โดยมีสีและตำแหน่งของสีที่แน่นอน
                                ฉะนั้นไม่ว่าเราจะเคลื่อนย้าย ย่อ หรือ ขยาย ภาพก็จะไม่เสียรูปทรงทางเรขาคณิต โปรแกรม illustrator เป็นโปรแกรมที่ประมวลผลภาพ
                                แบบเวกเตอร์
    
                            </li>
                            <li>
                            การประมวลผลแบบบิตแมพ (Bitmap) เป็นการประมวลผลแบบอาศัยค่าสีในแต่ละพิกเซล โดยแต่ละพิกเซลจะมีการเก็บค่าสี
                            ที่เจาะจงในแต่ละตำแหน่ง ซึ่งเหมาะกับภาพที่มีลักษณะแบบภาพถ่าย โปรแกรมที่ประมวลผลภาพแบบบิตแมพ
                            ได้แก่ Photoshop , Paint เป็นต้น
                            </li>
                        </ul>
                            <div className="my-3 text-center">
                                <img className="img-resposive-design" src="http://www.vdoschool.com/vdo/images/grafic01/vector_bitmap.jpg" alt="img vector and img bitmap"/>
                            </div>
                            <div className="my-3 text-center">
                                <img className="img-resposive-design" src="http://www.vdoschool.com/vdo/images/grafic01/01.png" alt="detail img vector and img bitmap"/>
                            </div>
                    </div>
                    }
                    <div className="w-100 text-left">
                        <button className="btn btn-success ml-5" value={1} onClick={this.checkStatusClickedReadmore}>กดเพื่ออ่านเพิ่มเติม</button>
                    </div>
                    <div className="text-left my-5"> 
                        <h4>
                        โปรแกรม Illustrator ทำอะไรได้บ้าง
                        </h4>            
                        <p className="lead">
                        <span className="pl-5"></span>
                            โปรแกรม Illustrator ให้เราสามารถสร้างภาพโดยเริ่มจากหน้ากระดาษเปล่า เหมือนจิตรกรที่เขียนภาพลงบนผืนผ้า โดยใน Illustrator
                            จะมีทั้งปากกา พู่กัน ดินสอ และอุปกรณ์การวาดภาพอื่นๆ ซึ่งเราสามารถนำมาใช้สร้างงานได้หลากหลายรูปแบบ เช่น งานสื่อสิ่งพิมพ์ โบรชัวร์
                            นามบัตร หนังสือ งานออกแบบทางกราฟิก โลโก้ งานด้านการ์ตูน งานด้านเว็บไซต์
                            </p>       
                            <div className="my-5 text-center">
                                <img className="img-resposive-design" src="http://www.vdoschool.com/vdo/images/grafic01/02.1%20copy.jpg" alt="example ai project"/>
                            </div>
                    </div>
                    <div className="underline w-100 mb-5"></div>

                    <div className="text-left my-5">    
                            <h5>
                            หน้าจอโปรแกรม Illustrator    
                            </h5>     
                            <p className="lead">
                        <span className="pl-5"></span>                          
                        หน้าจอของโปรแกรม Illustrator จะประกอบด้วยส่วนต่างๆ ซึ่งมีหน้าที่การใช้งานแตกต่างกันออกไปดังนี้
                            </p>
                            <div className="my-5 text-center">
                                <img className="img-resposive-design p-5" src="http://www.vdoschool.com/vdo/images/grafic01/03.jpg" alt="ui ai"/>
                            </div>
                    </div>
                    {this.state.isShowDetailFeature && 
                    <div className="text-left my-5">    
                            <h5>
                            แถบเมนูคำสั่ง (Menu bar)
                            </h5>     
                            <div className="my-5 text-center">
                                <img className="img-resposive-design p-5" src="http://www.vdoschool.com/vdo/images/grafic01/manubar.png" alt="menu ui"/>
                                <p className="text-secondary pt-5">	แถบเมนูคำสั่ง (Menu bar) เป็นเมนูคำสั่งหลักของโปรแกรม Illustrator แบ่งออกเป็นหมวดหมู่ต่างๆ ดังนี้</p>
                            </div>
                            <p className="lead text-left">
                        <h5 className="text-success py-1 d-inline-block">File:</h5><p/>เป็นหมวดของคำสั่งที่จัดการเกี่ยวกับไฟล์และโปรแกรมทั้งหมด ไม่ว่าจะเป็นการ เปิด-ปิดไฟล์ การ บันทึกไฟล์ การนำภาพเข้ามาใช้ (Place)
                        ตลอดจนการออกจากโปรแกรม (Exit) 
                        <p/>
                        <h5 className="text-success py-1 d-inline-block">Edit:</h5><p/>เป็นหมวดของคำสั่งที่จัดการแก้ไข เช่น Undo Cut Copy Paste Select รวมทั้งการกำหนดคุณสมบัติ ต่างๆ ที่มีผลต่อการปรับแต่งภาพด้วย
                        เช่นการสร้างรูปแบบ (Define Pattern) การกำหนดค่าสี (Color Setting) เป็นต้น
                        <p/>
                        <h5 className="text-success py-1 d-inline-block">Type:</h5><p/>เป็นหมวดของคำสั่งที่ใช้จัดการตัวหนังสือ เช่น Fonts Paragraph เป็นต้น
                        <p/>
                        <h5 className="text-success py-1 d-inline-block">Select: </h5><p/>เป็นหมวดของคำสั่งที่ใช้ในการเลือกวัตถุ สามารถเลือกด้วยคุณสมบัติได้ เช่น เลือกวัตถุที่มี Fill และ Stroke แบบเดียวกัน
                        วัตถุที่อยู่บน Layer เดียวกัน เป็นต้น
                        <p/>
                        <h5 className="text-success py-1 d-inline-block">Filter:</h5><p/>เป็นหมวดของคำสั่งที่ใช้สร้างเทคนิคพิเศษให้กับภาพ โดยจะมีผลต่อรูปร่างของ Path
                        <p/>
                        <h5 className="text-success py-1 d-inline-block">Effect:</h5><p/>เป็นหมวดของคำสั่งที่ใช้สร้างเทคนิคพิเศษให้กับภาพคล้าย Filter แต่จะไม่มีผลกับรูปร่างของ PathView: เป็นหมวดของคำสั่งเกี่ยวกับ
                        การมองทุกสิ่งในงาน เช่น Zoom Show/Hide Ruler Bounding Box Outline Mode/Preview Mode เป็นต้น
                        <p/>
                        <h5 className="text-success py-1 d-inline-block">Window:</h5><p/>เป็นหมวดของคำสั่งเกี่ยวกับการเปิด-ปิดหน้าต่างเครื่องมือต่างๆ เช่น Palette Tool Box เป็นต้น
                        <p/>
                        <h5 className="text-success py-1 d-inline-block">Help:</h5><p/>เป็นหมวดที่รวบรวมวิธีการใช้งานและคำแนะนำเพื่อช่วยเหลือผู้ใช้โปรแกรม
                            </p>
                            <div className="my-5 text-center">
                                <img className="img-resposive-design p-5" src="http://www.vdoschool.com/vdo/images/grafic01/toolbox.png" alt="menu ui"/>
                                <p className="text-secondary pt-5">		เป็นส่วนที่เก็บรวบรวมเครื่องมือที่ใช้ในการสร้าง การปรับแต่งและการแก้ไขภาพ กล่องเครื่องมือ (Tools box)</p>
                            </div>
                    </div>
                    }
                        
                    <div className="w-100 text-left mb-5">
                        <button className="btn btn-success ml-5" value={2} onClick={this.checkStatusClickedReadmore}>กดเพื่ออ่านเพิ่มเติม</button>
                    </div>
                </div>
            </MainLayout>
        )
    }
}

export default Home
