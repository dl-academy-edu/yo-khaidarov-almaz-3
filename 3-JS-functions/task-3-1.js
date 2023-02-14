/*Задание 1*/
validateAge();

function validateAge() {
  let userAge = prompt(`Введите ваш возраст`);
  if (userAge >= 18) {
    alert("Ваш возраст подходит");
  } else {
    alert("Вы ещё не доросли");
    validateAge();
  }
}
