class Node{

     constructor(val){
         this.val = val;
         this.next =null;
         this.prev = null;
     }
 }

class DoublyList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length =0;
    }

    push(val){
         var newNode=new Node(val);
         if(!this.head){
             this.head = newNode;
             this.tail = newNode;
         }
        else{
        const temp = this.tail;
          this.tail.next=newNode;
          this.tail=newNode;
          this.tail.prev= temp;
        }
        this.length++;
        return this;
        
    }
}
const doubly = new DoublyList();
doubly.push(4);
doubly.push(5);
doubly.push(10);
