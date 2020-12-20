


const parts = ['C', 'D'];
const lyrics = ['A', 'B', ...parts, 'E', 'F'];
const other = [... lyrics];

console.log(lyrics);
console.log(other);

other.push('new Element');
console.log(other);
 


