module.exports = function longestConsecutiveLength(array) {
  let currLength = 1;
  let longest = 0;
  let obj = new Set(array);//make object Set to check there elements 
  
  for (let i of array) {  //some ES6 magic for iterate through array elements
    if (!obj.has(i - 1)) { //if Set does not have lower element than current we need to start count from this element;
      let c = i; // we make a dublicate for our element in case)))
      currLength = 1;//before every countiong should be 1!
      while (obj.has(c + 1)) {//while we have next element increase our length
        currLength += 1;
        c += 1;
      }
      longest = Math.max(longest,currLength); // choose the longest one and assign it to longest

    }
  }
  return array.length == 1 ? 1 : longest;
}
