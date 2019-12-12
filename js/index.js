/*let ulShopingList = document.querySelector('ul');
let inputShoppingList= document.querySelector('input');
let buttonAddItem= document.querySelector('button');
let input=document.querySelector('#item');
let buttonClick = function(){
    inputInfo=input.value;

}
buttonAddItem.addEventListener(click, buttonClick);
let li = createElement('li');
li.textContent='Eggs'
let span = createElement('span');
let buttonDelete = createElement('button');
ulShopingList.appendChild('span');
ulShopingList.appendChild('button');
span.textContent = inputValue;
buttonDelete.textContent = 'delete';
ulShopingList.appendChild('li');
buttonDelete.classList.add('delete')
buttonDelete.addEventListener(click,inputDelete)
let inputDelete = function(){
    input.value = '';
}*/
let ul = document.querySelector('ul');
let input = document.querySelector('#item');
let buttonAddItem = document.querySelector('#addItem');

let inputValue;
let getValue = function(){
    inputValue = input.value;
    console.log(inputValue);
};
buttonAddItem.addEventListener('click', getValue);
let li = document.createElement('li');
let span = document.createElement('span');
let buttonDelete=document.createElement('button');
ul.appendChild(span, buttonDelete);
li.textContent = inputValue;
buttonDelete.textContent='delete';
ul.appendChild(li);
let deleteList = function(){
    ul.childNodes.remove();
}
buttonDelete.addEventListener('click',deleteList)



