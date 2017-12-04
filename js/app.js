class jar{
    
    constructor(name,capacity,waterContent){
        this.name=name;
        this.capacity=capacity;
        this.waterContent=waterContent;
    }

    transfer(jar){
       let waterCanBeTransfered=0;
       waterCanBeTransfered=jar.capacity-jar.waterContent;
      if(waterCanBeTransfered > this.waterContent){
          jar.waterContent+=this.waterContent;
          this.waterContent=0;
      }
      else{
       jar.waterContent+=waterCanBeTransfered;
       this.waterContent-=waterCanBeTransfered;
      }
    }
    
}

const jarA=new jar("A",8,8);
const jarB=new jar("B",5,0);
const jarC=new jar("C",3,0);

function startOperation(){
jarA.transfer(jarC);
jarC.transfer(jarB);
jarA.transfer(jarC);
jarC.transfer(jarB);
jarB.transfer(jarA);
jarC.transfer(jarB);
jarA.transfer(jarC);
jarC.transfer(jarB);
}

