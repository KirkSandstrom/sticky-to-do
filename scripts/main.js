let itemList = document.querySelector('.item-list');

itemList.addEventListener('change', addItem);

function addItem(e) {
  if(e.target = itemList.lastChild && itemList.lastChild.value != '') {
    let itemDiv = document.createElement('div');
    itemDiv.setAttribute('class', 'item');

    let asterisk = document.createElement('i');
    asterisk.textContent = '*';

    let input = document.createElement('input');
    input.setAttribute('type', 'text');

    itemDiv.appendChild(asterisk);
    itemDiv.appendChild(document.createTextNode(' '));
    itemDiv.appendChild(input);

    itemList.appendChild(itemDiv);

    input.focus();
  }
}
