//잘 등록해놨다가 한꺼번에 체크해봐 => 수감해놓고 감시해봐.

const data = {};
const setState = (name, arr) => data[name] = [...data[name], ...arr];

const Item = (props) => `
    <li class="list-group-item">
        <p class="h4">${props.title}</p>
        <p>You can use the mark tag to <mark>${props.index}</mark> text.</p>
        <button type="button" class="btn btn-primary">Move Up</button>
        <button type="button" class="btn btn-secondary">Move Down</button>
        <button type="button" class="btn btn-success">Copy Up</button>
        <button type="button" class="btn btn-danger">Copy Down</button>
    </li>
`


class Observer {
    constructor() {
        this.list = [];
    }

    registerObserver(target) {
        this.list.push(target);
    }

    unregisterObserver(targetObserver) {
        this.list = this.list.filter(existObserver => existObserver !== targetObserver);
    }

    notifyObservers(content) {
        this.list.forEach(observer => observer.notify(content));
    }
}

const observer = new Observer();

const target1 = {notify: content => console.log('target1 : ' + content)}
const target2 = {notify: content => console.log('target2 : ' + content)}
const target3 = {notify: content => console.log('target3 : ' + content)}

observer.registerObserver(target1);
observer.registerObserver(target2);
observer.registerObserver(target3);

observer.notifyObservers('hello Observers');
// target1 : hello Observers
// target2 : hello Observers
// target3 : hello Observers

observer.unregisterObserver(target2);

observer.notifyObservers('except target2 in Observers');
// target1 : except target2 in Observers
// target3 : except target2 in Observers