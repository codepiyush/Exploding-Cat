import React, { Component } from 'react';
import Navbar from './navbar';
import { connect } from 'react-redux';
import Game from './game';
import Sidebar from './sidebar';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="grid-2">
                    <Game/>
                    <Sidebar/>
                </div>

            </div>
        )
    }
}
const mapStateToProps= (state)=>{
    return {
        data: state,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        incret: () =>{
            dispatch()
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
