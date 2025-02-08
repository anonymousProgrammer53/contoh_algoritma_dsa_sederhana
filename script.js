const openPage = (page, className) => {
    for (let i = 0; i < document.querySelectorAll(page).length; i++) {
        document.querySelectorAll(page)[i].classList.add('d-none');
    }
    document.querySelector(className).classList.remove('d-none');
}

document.querySelector('main > header > nav > section').addEventListener('click', (e) => {
    if (e.target.textContent === 'Fo Loop') {
        openPage('main > article > section', '.using-for-loop');
    } else if (e.target.textContent === 'Recursive Function') {
        openPage('main > article > section', '.using-recursive-function');
    } else if (e.target.textContent === 'Recursive Function n') {
        openPage('main > article > section', '.using-recursive-function-n');
    }
});

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

document.querySelectorAll('.fibonacci-number-btn')[0].addEventListener('click', () => {
    document.querySelectorAll('.fibonacci-number-container')[0].innerHTML = '';
    let prevNumb1 = parseInt(document.querySelectorAll('.fibonacci-number-input')[0].value);
    let prevNumb2 = parseInt(document.querySelectorAll('.fibonacci-number-input')[1].value);

    const listGroupComponent = createListGroupComponent(document.querySelector('.fibonacci-number-container'));
    for (let i = 0; i < 10; i++) {
        let newPrev = prevNumb1 + prevNumb2;
        prevNumb1 = prevNumb2;
        prevNumb2 = newPrev;
        createListGroupItemComponent(listGroupComponent, newPrev);
    }
});

document.querySelectorAll('.fibonacci-number-btn')[1].addEventListener('click', () => {
    document.querySelectorAll('.fibonacci-number-container')[1].innerHTML = '';
    let prevNumb1 = parseInt(document.querySelectorAll('.fibonacci-number-input')[2].value);
    let prevNumb2 = parseInt(document.querySelectorAll('.fibonacci-number-input')[3].value);

    let count = 0
    const fibonacci = (prevNumb1, prevNumb2) => {
        if (count < 10) {
            let newPrev = prevNumb1 + prevNumb2;
            const listGroupComponent = createListGroupComponent(document.querySelectorAll('.fibonacci-number-container')[1]);
            createListGroupItemComponent(listGroupComponent, newPrev);
            prevNumb1 = prevNumb2;
            prevNumb2 = newPrev;
            count++;
            fibonacci(prevNumb1, prevNumb2);
        } else {
            return;
        }
    }
    fibonacci(prevNumb1, prevNumb2);
});

document.querySelectorAll('.fibonacci-number-btn')[2].addEventListener('click', () => {
    document.querySelectorAll('.fibonacci-number-container')[2].innerHTML = '';

    let prev = parseInt(document.querySelectorAll('.fibonacci-number-input')[4].value);
    const fibonacci = (n) => {
        if (n <= 2) {
            return n
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }
    const listGroupComponent = createListGroupComponent(document.querySelectorAll('.fibonacci-number-container')[2]);
    createListGroupItemComponent(listGroupComponent, fibonacci(prev));
});
