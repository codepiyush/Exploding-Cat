import React from 'react';
import { connect } from 'react-redux'
import { reveal } from "./action/action";

class CardGame extends React.Component {
    render() {

        return (
            <div>
                <button id="deckbutton" onClick={this.props.reveal}> <img src={require("./images/cardsdeck.png")} alt="Deck" width={150} height={150} /> </button>
                <h3>Click to reveal card</h3>
                <br/><br/><hr/><br/>
                <h2>Aquired Cards</h2>
                {this.props.data.shuffle === true ? <div><h2 style={{color:"red"}}>Shuffle card activated!</h2><p>DECK RESET</p></div>: <p></p>}
                <div id="flex">
                    {
                        this.props.data.aquiredCards.map((cards) => {
                            return (
                                <div id="catcard">
                                    <img src={require("./images/"+cards+".jpg")} alt={cards} height={100} widht={100}/>
                                    <p>{cards}</p>
                                </div>
                            )
                        })
                    }
                </div>
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
        reveal: () => { dispatch(reveal()) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CardGame);