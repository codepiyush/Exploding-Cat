const initState = {
    cardtype: ["cat card", "difuse card", "exploding card","shuffle card"],
    deck: [],
    startGame: false,
    defuserCard: 0,
    aquiredCards: [],
    gameState: 'playing',
    shuffle:false
}

const myreducer = (state = initState, action) => {
    //console.log(action);
    if (action.type === "NEWGAME") {
        let ndeck = [];
        for (var i = 0; i < 5; i++) {
            let index = Math.round(Math.random() * 3);
            ndeck.push(state.cardtype[index]);
        }
        console.log(ndeck);
        return {
            ...state,
            cardCount: 0,
            defuserCard: 0,
            deck: ndeck,
            startGame: true,
            aquiredCards: [],
            gameState: "playing",
            shuffle:false
        }
    }
    if (action.type === "REVEAL") {
        let ndeck = state.deck;
        let ndefuserCount = state.defuserCard;
        let gameState = state.gameState;
        let aquiredCard = state.aquiredCards;
        let shuffle=false;
        let index = Math.round(Math.random() * (ndeck.length-1));
        if (ndeck[index] === "difuse card") {
            ndefuserCount++;
        }
        
        if (ndefuserCount === 0 && ndeck[index] === 'exploding card') {
            gameState = "lose"
        }
        else if (ndefuserCount > 0 && ndeck[index] === "exploding card") {
            ndefuserCount--;
        }
        if (ndeck[index] === "shuffle card") {
            ndeck = [];
            aquiredCard=[];
            shuffle=true;
            ndefuserCount=0;
            for (i = 0; i < 5; i++) {
                let index = Math.round(Math.random() * 3);
                ndeck.push(state.cardtype[index]);
            }
        }
        else {
            aquiredCard.push(ndeck[index]);
            ndeck.splice(index, 1);
            
        }

        console.log(index, ndeck, aquiredCard, ndefuserCount);
        if (aquiredCard.length === 5) {
            gameState = "win";
        }
        return {
            ...state,
            deck: ndeck,
            defuserCard: ndefuserCount,
            cardCount: aquiredCard.length,
            gameState: gameState,
            aquiredCards: aquiredCard,
            shuffle: shuffle
        }

    }
    return state;
}

export default myreducer;