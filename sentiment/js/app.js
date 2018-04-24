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
    //console.log(result);
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

//let m = extractWords(_SAMPLE_TWEETS[1].text);
//let k = extractWords("lovely day");

//findSentimentWords(m);
//findSentimentWords(k)
console.log(_SAMPLE_TWEETS[0].text);
function analyzeTweets(array){
    let words = [];
    for(let i =0; i< array.length ;i++){
        words.push(extractWords(array[i].text));
    }
    console.log(words);
    let sentiments = [];
    for(let i = 0; i<words.length;i++){
        findSentimentWords(words[i]);
    }
    sentiments.push(_EMOTIONS);
    console.log(sentiments);
}

analyzeTweets(_SAMPLE_TWEETS);