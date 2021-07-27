let a = +prompt('Введіть число'); 
let b = +prompt('Введіть степінь'); 
let result = 1;

if(b < 0){
  let i = b;
  while (i < 0) {
    i++;
    result /=a;
  }
}else{
  let i = 1;
  while (i <= b) {
    i++;
    result *= a;
  }
}
document.write(`<h2>${result}<h2>`);