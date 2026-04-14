class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        var alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    /*maintain array of map and string length*/
    var anagramKeyMap = new Map();
    var output = [];
    for (let i=0; i< strs.length;i++){
        var stringLengthMap = new Map();
        var value = strs[i];
        for (let j=0; j< value.length; j++){
            if (stringLengthMap.has(value[j])){
                stringLengthMap.set(value[j], stringLengthMap.get(value[j])+1);
            }
            else{
                stringLengthMap.set(value[j],1);
            }
        }

        var anagramKey = '';
        for (let k =0;k<alphabets.length; k++){
            if (stringLengthMap.has(alphabets[k])){
                anagramKey = anagramKey+''+alphabets[k]+''+stringLengthMap.get(alphabets[k]);
            }
        }

        if (anagramKeyMap.has(anagramKey)){
            var newArray = anagramKeyMap.get(anagramKey);
            newArray.push(strs[i]);
            anagramKeyMap.set(anagramKey, newArray);
        }
        else{
            anagramKeyMap.set(anagramKey, [strs[i]]);
        }
    }

    for (const [key,value] of anagramKeyMap){
        output.push(value);
    }

    return output;
    }
}
