
var grocl = [
   {item: "bacon", price:2.99, },
   {item: "almond milk" , price: 3.49, },
   {item:"chicken", price:4.99 , },
   {item: "spinach", price: 2.99 , },
   {item:"capn crunch" , price: 2.99, }
];

var d = document.createElement('ul');

 var total=0.0
for(var i= 0; i<grocl.length; i++){
/*  document.open();
  document.write(grocl[i].item + " cost "+grocl[i].price+"\n")
  document.close();*/
  total = total + grocl[i].price;

  //dont forget to move the consellog below this back outside of the loop
  var b= document.createElement('li');
  b.innerHTML=(grocl[i].item + " cost "+grocl[i].price);
  d.appendChild(b);

  var t=document.createElement('p')
  t.innerHTML=(total);
}

document.body.appendChild(d);

//t.appendChild(total);
document.body.appendChild(t);


//FOR ADDING INPUT FROM BOXES RESEARCH "ADDITEMBYID" TO ITEMS ENTERED FOR ITEM AND PRICE
//THEN PUSH AN ELIMENT TO THE ARRAY WIT BOTH NAES
//THEN RUN THE LOOP AGAIN TO MAKE IT RERUN THE LIST DISPLAYING THE NEW ITEM TO THE LIST
//
// f ai
v el= doc.geteleby




function addToList() {
  var itemAdd = document.getElementById(one)
  var priceAdd = document.getElementById(two)
  var itemprice ={
     item: itemAdd, price: priceAdd)
  }
}

//grocl.push()
