class MyArray{
    constructor(){
        this.length =0;
        this.data = {};
    }
    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
          this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const myArray = new MyArray();
myArray.push('Hello!');
myArray.push('Javascript');
console.log(myArray);
myArray.pop();
myArray.push('Angular');
myArray.delete(0);
console.log(myArray);
myArray.push('World');
myArray.shiftItems(0);
console.log(myArray);
