class PStack {
  #id;
  constructor() {
    this.#id = 1;
    this._persons = [];
  }

  showId() {
    return this.#id;
  }

}

class PStackImpl extends PStack {
  constructor() {
    super();
  }

  set persons(persons){
    this._persons = persons
  }

  get persons(){
    return this._persons
  }

  push(p) {
    return this._persons.push(p)
  }

  pop() {
    if(this._persons.length) return this._persons.pop().age
    else return "empty"
  }
}

//the reason initially we get the error is because, when we do pstack.persons -> it will create a new object instead of accessing the _persons.
//so the _person contains only one element
let pstack = new PStackImpl();
pstack.persons = [{name: 'Jojo', age: 21}, {name: 'Gabi', age: 29}]
pstack.push({name: 'Dein', age: 19});
console.log(pstack.pop());
console.log(pstack.pop());
console.log(pstack.persons);
