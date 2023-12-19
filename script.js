function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let str=s1.toLowerCase();
 let str2=s2.toLowerCase();
  for(let i=0;i<str.length;i++){
    let str1=str.substr(i,(str2.length));
    if(str1===str2){
      return i;
    }
  }
  return -1;
}
// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
