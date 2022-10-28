// Number 1 - Sum Zero

let addToZero = (arr) => {
    let result = false;

    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                result = true;
            }
        }
    }
    return result;
}

console.log(addToZero([1]))
console.log(addToZero([1, 2, 3]))
console.log(addToZero([1, 2, 3, -2]))

// Runtime = O(n^2)
// Space complexity = O(1)


// Number 2 - Unique Characters

let hasUniqueCharacters = (string) => {
    let setString = new Set(string);
    if(setString.size === string.length) {
        return true;
    } else {
        return false;
    }
}

console.log(hasUniqueCharacters('Monday'))
console.log(hasUniqueCharacters('Moonday'))

// Runtime = O(1)
// Space complexity = O(1)


// Number 3 - Pangram Sentence

const alphabet = 'abcdefghijklmnopqrstuvwxyz' 

let isPangram = (sentence) => {
    sentence = sentence.toLowerCase();
    
    let alphabetArr = alphabet.split('')
    for(let i = 0; i < sentence.length; i++) {
        let index = sentence[i];
        if(index !== -1) {
            alphabetArr.splice(index, 1)
        }
        if(alphabetArr.length === 0) {
            return true
        }
    }
    return false
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))

// Runtime = O(n)
// Space complexity = O(1)


// Problem 4 - Longest Word

let findLongestWord = (list) => {
    for(let i = 0; i < list.length; i++) {
        for(let j = 1; j < list.length; j++) {
            if(list[i].length > list[j].length) {
                return list[i].length
            } else if(list[j].length > list[i].length) {
                return list[j].length
            }
        }
    }
}

console.log(findLongestWord(["hi", "hello"]));

// Runtime = O(n^2)
// Space complexity = O(n)