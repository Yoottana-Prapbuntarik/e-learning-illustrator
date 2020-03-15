import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout'

class TutorialVideo extends Component {
    render() {
        let videoList = [
            {
                id: 1,
                img: 'http://www.vdoschool.com/vdo/images/grafic01/et-site-banner_illustrator-cs6-32642_516x173.png',
                subtitle: 'พื้นฐานการใช้ Illustrator CC 2017-2018 ตอนที่ 1',
                title: 'ตอนที่ 1',
            },
            {
                id: 2,
                img: 'http://www.vdoschool.com/vdo/images/grafic01/et-site-banner_illustrator-cs6-32642_516x173.png',
                subtitle: 'พื้นฐานการใช้ Illustrator CC 2017-2018 ตอนที่ 2',
                title: 'ตอนที่ 2',
            },
            {
                id: 3,
                img: 'http://www.vdoschool.com/vdo/images/grafic01/et-site-banner_illustrator-cs6-32642_516x173.png',
                subtitle: 'เครื่องมือพื้นฐานในการสร้างงานแบบง่ายๆ Illustrator CC2018',
                title: 'ตอนที่ 3',
            },
            {
                id: 4,
                img: 'http://www.vdoschool.com/vdo/images/grafic01/et-site-banner_illustrator-cs6-32642_516x173.png',
                subtitle: ' การสร้างหมีแพนด้าด้วย เครื่องมือง่ายๆ',
                title: 'ตอนที่ 4',
            },
            {
                id: 5,
                img: 'http://www.vdoschool.com/vdo/images/grafic01/et-site-banner_illustrator-cs6-32642_516x173.png',
                subtitle: 'การทำงานกับตัวหนังสือขั้นพื้นฐาน',
                title: 'ตอนที่ 5',
            },

        ];
        return (
            <MainLayout>
                <div className="container-body">
                    <div className="card-content-grid">
                        {videoList.map((item, index) => {
                            return (
                                <NavLink key={index} className="wrapper-box-video-tutoial" to={`TutorialVideoDetail/${item.id}`}>
                                    <div className="card-content-item">
                                        <div className="tutorial-vidio-responsive">
                                            <img className="img-tutorial" src={item.img} alt={item.subtitle} />
                                        </div>
                                        <h5 className="mt-3">{item.title}</h5>
                                        <div className="underline mb-3"></div>
                                        <p className="text-secoundary">{item.subtitle}</p>
                                        <div className="mx-auto mt-5">
                                            <NavLink className="btn btn-danger" to={`TutorialVideoDetail/${item.id}`}>ดูตอนที่ {item.id}</NavLink>
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        })}
                    </div>
                </div>
            </MainLayout>
        )
    }
}

export default TutorialVideo
