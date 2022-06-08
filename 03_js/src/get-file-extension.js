const getFileExtension = (word) => word.indexOf('.') > 0 ? word.substring(word.lastIndexOf('.') + 1) : false

console.log(getFileExtension('file.jpg')); // => 'jpg'
console.log(getFileExtension('component.test.js')); // => 'js'
console.log(getFileExtension('README')); // => false
console.log(getFileExtension('.bash_rc')); // => false