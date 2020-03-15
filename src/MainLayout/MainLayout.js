import React, { Component } from 'react';
import NavigationBar from '../Components/NavigationBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
class MainLayout extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            valueScroll: 0,
        }
        this.handleScroll = this.handleScroll.bind(this);

    }
    scrollToTop = () =>{
        window.scrollTo({ 
            top: 0,
            behavior:"smooth"
        });
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        this.setState({
            valueScroll: window.scrollY / 3 - 60
        })
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <NavigationBar />
                </div>
                {this.props.children}
                <div className="container-body">
                    <div className={`to-top ${this.state.valueScroll > 500 ? '' : 'd-none'}`} onClick={this.scrollToTop}>
                        <FontAwesomeIcon icon={faArrowUp} />
                    </div>
                </div>

            </React.Fragment >
        )
    }
}

export default MainLayout
