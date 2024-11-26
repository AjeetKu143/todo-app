let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');


btn.addEventListener('click', function () {
        let item = document.createElement('li');
        let delBtn = document.createElement('button');

        if (inp.value != "") {
            item.textContent = inp.value;
            ul.appendChild(item);
            inp.value = "";
        }

        delBtn.innerText = "Delete";
        delBtn.classList.add("delete");
        item.appendChild(delBtn);
    });


ul.addEventListener('click', function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});;


