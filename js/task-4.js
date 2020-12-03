const formatString = function(string) {
    let newString = string;
    if (string.length > 40) {
        const arrayString = string.split('').slice(0,40);
        arrayString.push('...');
        newString = arrayString.join('');
    }
    return newString;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
