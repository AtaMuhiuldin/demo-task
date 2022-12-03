import axios from 'axios';

function fetchAllCards() {
    return new Promise((resolve, reject) => {
        axios.get("https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2")
            .then(res => {
                if(res.data.success){
                    resolve(res.data.cards);
                }else{
                    resolve([])
                }
            }).catch(err => {
                resolve([])
            })
    })
}

function fetchSingleCard(params) {
    
}