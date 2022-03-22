//잘 등록해놨다가 한꺼번에 체크해봐 => 수감해놓고 감시해봐.

const data = {
    list1: [
        {title: '가'},
        {title: '나'},
        {title: '다'},
        {title: '라'},
    ],
    list2: [
        {title: 'A'},
        {title: 'B'},
        {title: 'C'},
        {title: 'D'},
    ],
    list3: [
        {title: '1'},
        {title: '2'},
        {title: '3'},
        {title: '4'},
    ]
};

const Item1 = (props, index) => `
    <li class="list-group-item">
        <p class="h4">${props.title}</p>
        <p>You can use the mark tag to <mark>${index}</mark> text.</p>
        <button type="button" class="btn btn-primary">Move Up</button>
        <button type="button" class="btn btn-success">Copy Up</button>
    </li>
`

const Item2 = (props, index) => `
    <li class="list-group-item">
        <p class="h4">${props.title}</p>
        <p>You can use the mark tag to <mark>${index}</mark> text.</p>
        <button type="button" class="btn btn-primary">Move Up</button>
        <button type="button" class="btn btn-secondary">Move Down</button>
    </li>
`

const Item3 = (props, index) => `
    <li class="list-group-item">
        <p class="h4">${props.title}</p>
        <p>You can use the mark tag to <mark>${index}</mark> text.</p>
        <button type="button" class="btn btn-success">Copy Up</button>
        <button type="button" class="btn btn-danger">Copy Down</button>
    </li>
`

// window.onload = function(e){
//     document.querySelector("#testUl").innerHTML = data.list.map(Item).join();
//     document.querySelector("#testUl li").addEventListener("click", (e) => {
//         const {textContent} = e.target;
//         switch (textContent){
//             case 'Move Up' :
//                 console.log('1');
//                 break;
//             case 'Move Down' :
//                 console.log('2');
//                 break;
//             case 'Copy Up' :
//                 console.log('3');
//                 break;
//             case 'Copy Down' :
//                 console.log('4');
//                 break;
//             default:
//                 break;
//         }
//     });
// }

const moveUp = {notify: content => content === 'Move Up' && console.log('1')};
const moveDown = {notify: content => content === 'Move Down' && console.log('2')}
const copyUp = {notify: content => content === 'Copy Up' && console.log('3')}
const copyDown = {notify: content => content === 'Copy Down' && console.log('4')}

window.onload = function () {
    const observer = new Observer();
    observer.registerObserver([moveUp, copyUp]);
    observer.notifyObservers({target: {textContent: 'Move Up'}});
    document.querySelector("#testUl1").innerHTML = data.list1.map(Item1).join();
    document.querySelector("#testUl1")
        .addEventListener("click", e => observer.notifyObservers(e.target.textContent));

    const observer2 = new Observer();
    observer2.registerObserver([moveUp, moveDown]);
    document.querySelector("#testUl2").innerHTML = data.list2.map(Item2).join();
    document.querySelector("#testUl2")
        .addEventListener("click", e => observer2.notifyObservers(e.target.textContent));

    const observer3 = new Observer();
    observer3.registerObserver([copyUp, copyDown]);
    document.querySelector("#testUl3").innerHTML = data.list3.map(Item3).join();
    document.querySelector("#testUl3")
        .addEventListener("click", e => observer3.notifyObservers(e.target.textContent));
}

class Observer {
    constructor() {
        this.list = [];
    }

    registerObserver(target) {
        if (target instanceof Array) {
            this.list = [...this.list, ...target];
            return;
        }
        this.list.push(target);
    }

    unregisterObserver(targetObserver) {
        this.list = this.list.filter(existObserver => existObserver !== targetObserver);
    }

    notifyObservers(textContent) {
        this.list.forEach(observer => observer.notify(textContent));
    }
}