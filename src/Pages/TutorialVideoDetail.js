import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import ReactYoutube from '../Components/ReactYoutube';
import MainLayout from '../MainLayout/MainLayout';
class TutorialVideoDetail extends Component {
    render() {
        let dataVideo = [
            'gQ3E4_JfoE8',
            'PCL4VSFl6PI',
            'cz-WBF2uhOc',
            'PDgK7aAdoHY',
            'HKieK1w4cp4',
        ]
        return (
            <MainLayout>
                <div className="container container-tutorial-video mb-5">
                    <div className="topMargin row">
                        <div className="col-12 size-text my-5 text-success text-center">
                        ขณะนี้กำลังชมวีดีโอ ตอนที่ {this.props.match.params.id}  
                        <div className="underline w-25"></div> 
                        </div>
                        <div className="col-md-12">
                            <ReactYoutube key={dataVideo[this.props.match.params.id - 1]} videoId={dataVideo[this.props.match.params.id - 1]}
                            />
                        </div>
                        <div className="col-md-12">
                            <div style={{ marginTop: '10px', marginBottom: '20px', marginLeft: '100px', marginRight: '100px' }}>
                                <Link className=" btn btn-primary text-center h-25 w-100" to="/Tutorial">
                                    กลับไปที่คอร์ส
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        )
    }
}

export default TutorialVideoDetail