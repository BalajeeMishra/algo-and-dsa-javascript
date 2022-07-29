class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
class SinglyLinked{
  constructor(){
      this.head=null;
      this.tail=null;
      this.length=0;
  }
  
       push(val) {
        var newNode=new Node(val);
       if(this.head==null){
        this.head=newNode;
        this.tail=this.head;
       }
         else{
           
           this.tail.next=newNode;
           this.tail=newNode;
          
         }
         this.length++;
         return this;
   }
  pop(){
    var pre=this.head;
    var temp=null;
    while(pre.next){
      temp=pre;
      pre=pre.next;
    }
    this.tail=temp;
     this.tail.next=null;
    this.length--;
    return pre;
  }
  unshift(val){
    let oldhead=this.head;
    this.head=new Node(val);
    this.head.next=oldhead;
    return this.head;
  }
}
const node=new SinglyLinked();
node.push(4);
node.push(5);

