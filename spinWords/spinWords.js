function spinWords(sentence){
  const words = sentence.split(" ")
  const spin = []
  words.forEach(function(word){
    if(word.length < 5) {
      spin.push(word)
    } else {
      spin.push(word.split("").reverse().join(""))
    }
  });
  return spin.join(" ")
}
