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
        for(let j in _SENTIMENTS[i]){
            for(let k in _EMOTIONS){
            if(j === k)
               _EMOTIONS[k].push(i);
            }
        }
    }
console.log(_EMOTIONS);
}

let m = extractWords("Amazingly, I prefer a #rainy day to #sunshine.");
let k = extractWords("lovely day");

findSentimentWords(m);
findSentimentWords(k)