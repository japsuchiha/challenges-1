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
        if(_SENTIMENTS[i] !== undefined){
            for(let j of _SENTIMENTS[i].keys())
        console.log(_SENTIMENTS[i]);
        }
    }
}

let m = extractWords("Amazingly, I prefer a #rainy day to #sunshine.");

console.log(m[0]);

findSentimentWords(m);

