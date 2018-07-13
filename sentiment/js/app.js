'use strict';
const _EMOTIONS = {
    "positive": [],
    "negative": [],
    "anger": [],
    "anticipation": [],
    "disgust": [],
    "fear": [],
    "joy": [],
    "sadness": [],
    "surprise": [],
    "trust": []
};

let extractWords = function (text) {
    let text_2 = text.toLowerCase();
    let res = text_2.split(/\W+/);
    let result = res.filter(word => word.length > 1);
    //console.log(result);
    return result;
}

function findSentimentWords(inputArray) {
    for (let i of inputArray) {
        for (let j in _SENTIMENTS[i]) {
            for (let k in _EMOTIONS) {
                if (j === k)
                    _EMOTIONS[k].push(i);
            }
        }
    }
 //   console.log(_EMOTIONS);
}

// let m = extractWords(_SAMPLE_TWEETS[1].text);
// let k = extractWords("lovely day");
//console.log(m);
// findSentimentWords(m);
// findSentimentWords(k)
// console.log(_SAMPLE_TWEETS[0].text);

function analyzeTweets(array) {
    let count = 0;
    let words = [];
    for (let i = 0; i < array.length; i++) {
        words.push(extractWords(array[i].text));
        count = count + (words[i].length);
    }

    let sentiments = [];
    for (let i = 0; i < words.length; i++) {
        findSentimentWords(words[i]);
    }
    sentiments.push(_EMOTIONS);
    
    for (let i in sentiments[0]) {
        sentiments[0][i].sort();
    }
 
  //  console.log(sentiments[0])
    let results = {
        "positive": [],
        "negative": [],
        "anger": [],
        "anticipation": [],
        "disgust": [],
        "fear": [],
        "joy": [],
        "sadness": [],
        "surprise": [],
        "trust": []
    };
    let freq = {};
    for (let i in sentiments[0]) {
        for (let j of sentiments[0][i]) {
            //console.log(j);
            if (!freq[j]) {
                freq[j] = 1;
            } else
                freq[j] += 1;
        }
         console.log(freq);
        let sortable = [];
        for (let m in freq) {
            sortable.push([m, freq[m]]);
        }
        sortable.sort((a, b) => (a[1] - b[1]));
        console.log(sortable);
        freq = {};
        for (let g = 0; g < sortable.length; g++) {
            freq[sortable[g][0]] = sortable[g][1];
        }
        console.log(freq);
        let max = 0;
        for (let k in freq) {
            if (freq[k] > max)
                max = freq[k];
        }
        console.log(max)
        for (let k in freq) {
            if (freq[k] === max && results[i].length < 3) {
                if (results.hasOwnProperty(i))
                    results[i].push(k);
            }
        }
        console.log(results)
        for (let k in freq) {
            if (results[i].length < 3 && freq[k] === max - 1) {
                if (results.hasOwnProperty(i))
                    results[i].push(k);
            }

         }
         freq = {};
     }

    let obj = {
        "words": results,
        "percentage": []
    }
    console.log(sentiments);
    console.log(sentiments[0].positive.length);
    for (let i in sentiments[0]) {
        obj.percentage.push((sentiments[0][i].length / count) * 100);
    }
    console.log(obj);
    return obj;
}
let data = analyzeTweets(_SAMPLE_TWEETS);
console.log();
let showStats = (obj)=>{
    
    let keys = Object.keys(obj.words);
    let percentage = obj.percentage;
    let commonWords = Object.values(obj.words);
    let table = document.getElementById('sentiment-table');
    for(let i =0;i<keys.length;i++){
        let row = document.createElement('tr');
        for(let j=0;j<3;j++){
            let cell = document.createElement('td');
            let content;
            switch(j){
                case 0:
                content = document.createTextNode(keys[i]);
                cell.appendChild(content);
                row.appendChild(cell);
                break;
                case 1:
                let mynumeral = numeral(percentage[i]).format('0.00');
                content = document.createTextNode(mynumeral+'%');
                cell.appendChild(content);
                row.appendChild(cell);
                break;
                case 2:
                content = document.createTextNode(commonWords[i]);
                cell.appendChild(content);
                row.appendChild(cell);
                break;
            }
        }
        table.appendChild(row);
    }
}

showStats(data);