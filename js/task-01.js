// Завдання 1:
const ulEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${ulEl.length}`);


const getCategoryes = function (arr) {

    for (const item of arr) {
        let nameCat = item.querySelector('h2').textContent;
        console.log(`Elements: ${nameCat}`);
        let countElements = item.querySelectorAll('li').length;

        console.log(`Elements: ${countElements}`);
    }

}
getCategoryes(ulEl);