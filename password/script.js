let i = 5;
let password = prompt('Введіть пароль');
let pass = 'pass';
do {
  if(password !== pass){
  	if (i === 1) {
  		alert("Будь ласка спробуйте пізніше!");
  		i = 0;
  	} 
    else {
        i--;
  		password = prompt(`Пароль не вірний заишилось ${i} спроби`);
  	}
  }
  else if(password == pass){
    alert('Запрошуємо на сайт!');
    i = 0;
  }
} while(i > 0);


