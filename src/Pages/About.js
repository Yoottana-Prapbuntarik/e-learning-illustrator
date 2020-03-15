import React, { Component } from 'react'
import MainLayout from '../MainLayout/MainLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faIdCardAlt, faAddressCard } from '@fortawesome/free-solid-svg-icons'

class About extends Component {
    render() {
        return (
            <MainLayout>
                <div className="container-body my-5">
                    <div className="underline mb-2 w-25"></div>
                    <h1>
                        เกี่ยวกับเรา
                    </h1>
                    <div className="underline mb-2 w-25"></div>
                </div>
                <div className="warpper-skew">
                </div>
                <div className="skew-bg mb-5">
                    <div className="container-page-header">
                        <div className="container-body">
                            <img className="img-resposive-design about-me-img mb-5" src="https://scontent.fbkk2-8.fna.fbcdn.net/v/t1.15752-9/87055579_819428035242298_8913578236227616768_n.jpg?_nc_cat=102&_nc_eui2=AeGC1kxS9eJDz9yaI7bs3VMGcdlgvEaSA-1pBj129WxxsPlpdjJz7gNfqHhMBuywezMYeEm0naH9RkfHcktyZZ9Igc3mFC-jhIKntHHqEJaZ2w&_nc_ohc=wiGRGu05_DYAX_Q_qDC&_nc_ht=scontent.fbkk2-8.fna&oh=f7a929c054348b73879c6acdc9441276&oe=5EEF664B" alt="img-profile" />
                            <div className="about-grid">
                                <div className="about-item text-white">
                                    <FontAwesomeIcon icon={faIdCardAlt} size="9x" />
                                    <h1 className="text-white py-5">
                                        ชื่อ - สกุล
                                    </h1>
                                    <p className="lead">
                                        ชื่อ นายศิริโชค แหทรัพย์
                                    </p>
                                    <p>
                                    ชื่อเล่น แตม
                                    </p>
                                    <p>
                                    <a className="btn btn-success text-white" href="https://fb.com/sirichok.hasub">Facebook</a>
                                    </p>
                                </div>
                                <div className="about-item text-white">
                                    <FontAwesomeIcon icon={faAddressCard} size="9x" />
                                    <h1 className="text-white py-5">
                                        รหัสนักศึกษา
                                    </h1>
                                    <p className="lead">
                                        5921414074
                                    </p>
                                </div>
                                <div className="about-item text-white">
                                    <FontAwesomeIcon icon={faPhoneAlt} size="9x" />
                                    <h1 className="text-white py-5">
                                        เบอร์โทรศัพท์
                                    </h1>
                                    <p className="lead">
                                        <a className="text-white" href="tel:098-271-1803 ">098-271-1803 </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        )
    }
}

export default About
