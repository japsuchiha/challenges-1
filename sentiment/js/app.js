'use strict';
const _EMOTIONS = {
    "positive" :[],
    "negative" :[],
    "anger" :[],
    "anticipation":[],
    "disgust":[],
    "fear" :[],
    "joy" :[],
    "sadness" :[],
    "surprise" :[],
    "trust": []
};

let extractWords = function(text){
    let text_2 = text.toLowerCase();
    let res = text_2.split(/\W+/);
    let result = res.filter(word => word.length>1);
    return result;
}

function findSentimentWords(inputArray){
    for(let i of inputArray){
        console.log(i+" " +"bla");
        for(let j in _SENTIMENTS[i]){
            for(let k in _EMOTIONS){
                console.log(k);
            if(_SENTIMENTS[i].hasOwnProperty(k))
               _EMOTIONS[k].push(i);
            }
        }
    }
    console.log(_EMOTIONS);
}

let m = extractWords("Amazingly, I prefer a #rainy day to #sunshine.");



findSentimentWords(m);

