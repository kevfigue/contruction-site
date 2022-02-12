function box(nme){
    let that = this;
    this.number=0;
    this.ele=document.createElement("div");

    this.ele.addEventListener("click", function(){
        that.numberUp(1);

    })

    this.eleNum=document.createElement("div");
    this.eleNum.innerHTML=this.number;

    document.body.appendChild(this.ele);
    // this.ele.appendChild(this.eleName);
    // this.ele.appendChild(this.button);

    this.ele.appendChild(this.eleNum);
    this.ele.style.height= "100px";
    this.ele.style.width= "200px";
    this.ele.style.borderRadius = "10px";
    this.ele.style.fontSize = "18px";
    this.ele.style.display = "flex";
    this.ele.style.justifyContent = "center";
    this.ele.style.alignItems = "center";
    this.ele.style.backgroundColor = nme;
}

//what is a prototype
box.prototype.numberUp = function(nm){
    this.number=this.number+nm;
    this.eleNum.innerHTML=this.number;
}


let list=["lavender","lightblue", "peru"];
let elements=[];


for(obj in list){
    elements.push(new box(list[obj]));
}

