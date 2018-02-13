function scrambled(){
  var argument = process.argv.slice(2);
  var scramble = argument[0];

scramble = scramble.replace(/a/gi, '4');
scramble = scramble.replace(/e/gi, '3');
scramble = scramble.replace(/o/gi, '0');
scramble = scramble.replace(/l/gi, 'l');
return scramble;
}
console.log(scrambled());
