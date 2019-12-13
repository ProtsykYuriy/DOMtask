let ul = document.querySelector('ul');
let input = document.querySelector('#item');
let buttonAddItem = document.querySelector('#addItem');
let inputValue;
let getValue = function () {
  inputValue = input.value;
  let newLi = li.cloneNode(false);
  let newButtonDelete = buttonDelete.cloneNode(true);
  newButtonDelete.addEventListener('click', deleteItem);
  let newSpan = span.cloneNode(true);
  newSpan.textContent = inputValue;
  newLi.appendChild(newSpan);
  newLi.appendChild(newButtonDelete);
  ul.appendChild(newLi);
  input.value = '';
  input.focus();
  console.log(document.body)
};
buttonAddItem.addEventListener('click', getValue);
let li = document.createElement('li');
let span = document.createElement('span');
let buttonDelete = document.createElement('button');
span.textContent = inputValue;
buttonDelete.textContent = 'delete';
let deleteItem = function () {
  ul.removeChild(li);
  input.focus();
};