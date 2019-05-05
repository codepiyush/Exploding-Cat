import React from 'react';
import { connect } from 'react-redux';
import CardGame from './cardgame';
import { startGame } from './action/action'

class Game extends React.Component {
    render() {

        const gameRender = () => {
            console.log(this.props.data.startGame, this.props.data.gameState)
            if (this.props.data.startGame === false) {
                console.log()
                return (
                    <button onClick={this.props.startgame} id="startbutton">New Game</button>
                )
            }
            else if (this.props.data.gameState === "win" && this.props.data.startGame === true) {
                return (
                    <div>
                        <h1 style={{color:"green"}}>You Win!</h1>
                        <div id="flex">
                            {
                                this.props.data.aquiredCards.map((cards) => {
                                    return (
                                        <div id="catcard">
                                            <img src={require("./images/" + cards + ".jpg")} alt={cards} height={100} widht={100} />
                                            <p>{cards}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button onClick={this.props.startgame} id="startbutton">New Game</button>
                    </div>
                )
            }
            else if (this.props.data.gameState === "lose" && this.props.data.startGame === true) {
                return (
                    <div>
                        <h1 style={{color:"red"}}>You Lose!</h1>
                        <div id="flex">
                            {
                                this.props.data.aquiredCards.map((cards) => {
                                    return (
                                        <div id="catcard">
                                            <img src={require("./images/" + cards + ".jpg")} alt={cards} height={100} widht={100} />
                                            <p>{cards}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button onClick={this.props.startgame} id="startbutton">New Game</button>
                    </div>
                )
            }
            else if (this.props.data.startGame === true && this.props.data.gameState === "playing") {
                return (
                    <CardGame />
                )
            }
        }
        return (
            <div id="main">
                {gameRender()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startgame: () => { dispatch(startGame()) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Game);