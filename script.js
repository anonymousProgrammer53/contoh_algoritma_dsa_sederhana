const createListGroupComponent = (parentComponent) => {
    const ul = document.createElement('ul');
    ul.classList.add('list-group');
    parentComponent.appendChild(ul);
    return ul;
}

const createListGroupItemComponent = (parentComponent, textContent) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'pt-3', 'pb-3');
    li.textContent = textContent;
    parentComponent.appendChild(li);
    return li;
}

document.querySelector('.fibonacci-number-btn').addEventListener('click', () => {
    document.querySelector('.fibonacci-number-container').innerHTML = '';
    let prevNumb1 = parseInt(document.querySelectorAll('.fibonacci-number-input')[0].value);
    let prevNumb2 = parseInt(document.querySelectorAll('.fibonacci-number-input')[1].value);

    const listGroupComponent = createListGroupComponent(document.querySelector('.fibonacci-number-container'));
    createListGroupItemComponent(listGroupComponent, prevNumb1);
    createListGroupItemComponent(listGroupComponent, prevNumb2);

    for (let i = 0; i < 20; i++) {
        let newPrev = prevNumb1 + prevNumb2;
        prevNumb1 = prevNumb2;
        prevNumb2 = newPrev;
        createListGroupItemComponent(listGroupComponent, newPrev);
    }
});
