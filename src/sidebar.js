import React from 'react';

class Sidebar extends React.Component {
    render() {
        return (
            <div id="instruc">
                <h1>Instructions</h1>
                <p>
                    1. If the card drawn from deck is a cat card then the card is removed from deck.
                    <br/>
                    2. If the card is exploding kitten (bomb) then the player loses the game.
                    <br/>
                    3. If the card is defuse card then the card is removed from the deck. Also that card can be
                        used to defuse one bomb that may come in subsequent cards drawn from deck.
                    <br/>
                    4. If the card is shuffle card then the game is restarted and the deck is filled with 5 cards
                       again.
                </p>
            </div>
        )
    }
}
export default Sidebar;