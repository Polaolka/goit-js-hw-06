// Завдання 1:
const ulEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${ulEl.length}`);

    for (const item of ulEl) {
        let nameCat = item.querySelector('h2').textContent;
        console.log(`Elements: ${nameCat}`);
        let countElements = item.querySelectorAll('li').length;

        console.log(`Elements: ${countElements}`);
    }


