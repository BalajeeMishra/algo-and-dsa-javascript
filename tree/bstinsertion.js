class Node {
    constructor(val){
       this.val = val;
        this.left =null;
        this.right = null;
    }
}

class BinaryTreeSearch{
    constructor(){
        this.root=null;
    }
    insert(val){
      const newNode = new Node(val);
       if(!this.root){
            this.root= newNode;
            return this;
        } 

        else{
            var temp = this.root;
            var value = val
            while(temp){
              if(value>temp.val){
                    var t= temp;
                    temp= temp.right;
                  if(!temp){
                      t.right= newNode;
                       return this;
                  }
                 
              }

            if(value<temp.val){
                    var t = temp;
                    temp= temp.left;
                  if(!temp){
                      t.left= newNode;
                       return this;
                  }
              }
                
        }
        }
        
    }
    
}

const newTree = new BinaryTreeSearch();
newTree.insert(5);
newTree.insert(10);
newTree.insert(4);
newTree.insert(8);
