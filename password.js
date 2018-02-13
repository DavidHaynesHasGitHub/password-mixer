function scrambled(scramble){
  return scramble
    .replace(/a/gi, '4')
    .replace(/e/gi, '3')
    .replace(/o/gi, '0')
    .replace(/l/gi, 'l');
}

var argument = process.argv.slice(2);
console.log(scrambled(argument[0]));
