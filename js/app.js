var names = ["bag.jpg",'banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'];


var imageHolder = document.querySelector('#imageHolder');
var rightImage = document.querySelector('#rightImage');
var middleImage = document.querySelector('#middleImage'); 
var leftImage = document.querySelector('#leftImage'); 

rightImage.src =`/img/${names[0]}`;
rightImage.alt=names[0];
rightImage.title = names[0]; 


function Products (prod){
    this.prodduct = prod ; 
    this.votes= 0; 
    this.views = 0;
    this.imgPath=`/img/${this.prodduct}`; 
Products.all.push(this);

}
Products.all = []; 

for (let i = 0; i < names.length; i++) {
    
    new Products(names[i]);
}

var rightProduct,middleProduct,leftProduct; 

function render () {

 rightProduct=Products.all[randomNumber(0,Products.all.length-1)];

 middleProduct =Products.all[randomNumber(0,Products.all.length-1)];

leftProduct = Products.all[randomNumber(0,Products.all.length-1)]; 
while ((rightProduct === middleProduct) || (rightProduct === leftProduct) || (middleProduct === leftProduct)){
    render();
}
rightImage.setAttribute('src',rightProduct.imgPath);
rightImage.setAttribute('alt',rightProduct.name);
rightImage.setAttribute('title',rightProduct.name);

middleImage.setAttribute('src',middleProduct.imgPath);
middleImage.setAttribute('alt',middleProduct.name);
middleImage.setAttribute('title',middleProduct.name);


leftImage.setAttribute('src',leftProduct.imgPath);
leftImage.setAttribute('alt',leftProduct.name);
leftImage.setAttribute('title',leftProduct.name);
}
render();


imageHolder.addEventListener('click',catchClicks); 
var clicksCounter =0;
function catchClicks(event){
    if(clicksCounter<25){
        if(event.target.id !== 'imageHolder'){
           
            if(event.target.id === 'rightImage'){
                rightProduct.votes++

            }else if (event.target.id == 'middleImage'){
                middleProduct.votes++
            }
            else if (event.target.id === 'leftImage'){
                leftProduct.votes++
            }
            clicksCounter++;
            rightProduct.views++;
            middleProduct.views++;
            leftProduct.views++; 
            render();
        }
    } else {
        alert("you exceeded the allowed number of votes (which is 25)");
        imageHolder.removeEventListener('click',catchClicks)
      render2();
    }
}


function render2() { 
    var divE1 = document.getElementById('result');
    var ulE1 = document.createElement('ul');
    divE1.appendChild(ulE1);
    for (let i = 0; i < Products.all.length; i++) {
        var liE1=document.createElement('li');; 
        liE1.textContent=`${Products.all[i].prodduct} has ${Products.all[i].votes} votes and ${Products.all[i].views} views`;

    ulE1.appendChild(liE1);

    }
}



function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  