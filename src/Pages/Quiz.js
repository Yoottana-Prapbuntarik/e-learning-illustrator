import React, { Component } from 'react';
import MainLayout from '../MainLayout/MainLayout';
import imgQuestion1 from '../images/img-question1.png'
import imgQuestion2 from '../images/img-question2.png'
import imgQuestion3 from '../images/img-question3.png'
import imgQuestion4 from '../images/img-question4.png'
import imgQuestion5 from '../images/img-question5.png'
import imgQuestion7 from '../images/img-question6.png'
import imgQuestion6 from '../images/img-question7.png'
let quizItem = [
    {
        id: 1,
        question: "จากภาพข้างต้นเครื่องมือมีชื่อว่าอะไร ?",
        image: imgQuestion1,
        correctAnswer: 'magic wand tool'
    },
    {
        id: 2,
        question: "จากภาพข้างต้นเครื่องมือมีชื่อว่าอะไร ?",
        image: imgQuestion2,
        correctAnswer: 'lasso tool'
    },
    {
        id: 3,
        question: "จากภาพข้างต้นเครื่องมือมีชื่อว่าอะไร ?",
        image: imgQuestion3,
        correctAnswer: 'pen tool'
    },
    {
        id: 4,
        question: "จากภาพข้างต้นเครื่องมือมีชื่อว่าอะไร ?",
        image: imgQuestion4,
        correctAnswer: 'add anchor point tool'
    },
    {
        id: 5,
        question: "จากภาพข้างต้นเครื่องมือมีชื่อว่าอะไร ?",
        image: imgQuestion5,
        correctAnswer: 'delete anchor point tool'
    },
    {
        id: 7,
        question: "จากภาพข้างต้นเครื่องมือมีชื่อว่าอะไร ?",
        image: imgQuestion6,
        correctAnswer: 'type tool'
    },
    {
        id: 6,
        question: "จากภาพข้างต้นเครื่องมือมีชื่อว่าอะไร ?",
        image: imgQuestion7,
        correctAnswer: 'convert anchor point tool'
    },
];
let score = 0
class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listAnswer1: '',
            listAnswer2: '',
            listAnswer3: '',
            listAnswer4: '',
            listAnswer5: '',
            listAnswer6: '',
            listAnswer7: '',
            // score: 0,
            isSendAnswer: false
        }
        this.handleInput1 = this.handleInput1.bind(this);
        this.handleInput2 = this.handleInput2.bind(this);
        this.handleInput3 = this.handleInput3.bind(this);
        this.handleInput4 = this.handleInput4.bind(this);
        this.handleInput5 = this.handleInput5.bind(this);
        this.handleInput6 = this.handleInput6.bind(this);
        this.handleInput7 = this.handleInput7.bind(this);
        this.handleSumitAnswer = this.handleSumitAnswer.bind(this);
    }
    handleInput1 = (event) => {
        this.setState({
            listAnswer1: event.target.value
        })
    }
    handleInput2 = (event) => {
        this.setState({
            listAnswer2: event.target.value
        })
    }
    handleInput3 = (event) => {
        this.setState({
            listAnswer3: event.target.value
        })
    }
    handleInput4 = (event) => {
        this.setState({
            listAnswer4: event.target.value
        })
    }
    handleInput5 = (event) => {
        this.setState({
            listAnswer5: event.target.value
        })
    }
    handleInput6 = (event) => {
        this.setState({
            listAnswer6: event.target.value
        })
    }
    handleInput7 = (event) => {
        this.setState({
            listAnswer7: event.target.value
        })
    }

    handleSumitAnswer = () => {
        if (this.state.listAnswer1 === '' || this.state.listAnswer2 === '' ||
            this.state.listAnswer3 === '' || this.state.listAnswer4 === '' ||
            this.state.listAnswer5 === '' || this.state.listAnswer6 === '' ||
            this.state.listAnswer7 === '') {
            alert('คุณยังตอบคำถามไม่ครบทุกข้อ');
        } else {
            quizItem.map(item => {
                if (this.state.listAnswer1.toLowerCase() === item.correctAnswer) { score = score + 1 }
                if (this.state.listAnswer2.toLowerCase() === item.correctAnswer) { score = score + 1 }
                if (this.state.listAnswer3.toLowerCase() === item.correctAnswer) { score = score + 1 }
                if (this.state.listAnswer4.toLowerCase() === item.correctAnswer) { score = score + 1 }
                if (this.state.listAnswer5.toLowerCase() === item.correctAnswer) { score = score + 1 }
                if (this.state.listAnswer6.toLowerCase() === item.correctAnswer) { score = score + 1 }
                if (this.state.listAnswer7.toLowerCase() === item.correctAnswer) { score = score + 1 }
            })
            this.setState({
                isSendAnswer: true
            })
        }
    }
    render() {
        return (
            <MainLayout>
                <div className="container-body my-5">
                    <div className="container-quiz-grid">
                        <h1>
                            แบบทดสอบหลังเรียน
                        <div className="underline bg-success w-25"></div>
                        </h1>
                        {quizItem.map((itemQuize, index) => {
                            return (
                                <div className="quiz-item" key={index}>
                                    <div className="inside-question-grid">
                                        <div className="content-item text-center">
                                            <img src={itemQuize.image} alt={itemQuize.question + itemQuize.index} />
                                        </div>
                                        <div className="content-item">
                                            <h5>
                                                {itemQuize.question}
                                            </h5>
                                            <input className="input-answer my-3" name={index} type="text" onChange={index === 1 ? this.handleInput1 : index === 2 ? this.handleInput2 :
                                                index === 3 ? this.handleInput3 : index === 4 ? this.handleInput4 : index === 5 ? this.handleInput5 : index === 6 ? this.handleInput6 : this.handleInput7} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="mt-2 text-success">
                    คะแนนที่ได้ : {score}
                    </div>
                    {this.state.isSendAnswer !== true &&
                        <button className={`btn btn-primary my-5 w-100`} onClick={this.handleSumitAnswer}>ส่งคำตอบทั้งหมด</button>
                    }
                    {this.state.isSendAnswer && <a className="btn btn-success d-block" href="/Quiz">ทำแบบทดสอบอีกครั้ง</a>}
                </div>
            </MainLayout>
        )
    }
}

export default Quiz
