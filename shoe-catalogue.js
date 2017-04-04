var shoes = [
  {
    color : 'Brown',
    price : 350.00,
    size  : 5,
    brand : 'Tusoni laceup',
    in_stock : 5,
    photo: "Tusoni laceup.jpg"
  },
  {
    color : 'Black',
    price : 275.00,
    size  : 6,
    brand : 'Monk Strap',
    in_stock : 3,
    photo: "monk.jpg"
  }
];
var addBrand =  document.getElementById('addBrand');
var addSize =  document.getElementById('addSize');
var addPrize =  document.getElementById('addPrize');
var addQty =  document.getElementById('addQty');
var addColor =  document.getElementById('addColor');
var browseImg =  document.getElementById('browseImg');
var btnStock =  document.getElementById('submitStock');
var exitStock = null;

var menListColor =  document.getElementById("menListColor");
var menListSize =  document.getElementById("menListSize");

var optColor = document.getElementById('listColor');
var optSize = document.getElementById('listSize');
var colorTemplate = Handlebars.compile(optColor.innerHTML);
var sizeTemplate = Handlebars.compile(optSize.innerHTML);

var userName = document.getElementById('userName');
var passCode = document.getElementById('passCode');
var addmnBtn = document.getElementById('addmnBtn');
var displayMenu = document.querySelector(".displayMenu");
var addStockStyle = document.querySelector(".addStockStyle");
var myTemplate = document.getElementById("myTemplate");
var myTemplateInstance = Handlebars.compile(myTemplate.innerHTML);
var sbtn = document.getElementById("sbtn");

var stockTemplate = document.querySelector("#addStock");
var stockTempInstance = Handlebars.compile(stockTemplate.innerHTML);

window.onload = function () {
    renderOPtions();
    var allShoes = myTemplateInstance({shoes});
    displayMenu.innerHTML = allShoes;
}

function renderOPtions() {
    for (var i = 0; i < shoes.length; i++) {

        var optionColor = document.createElement('option');
        var optionSize = document.createElement('option');

        optionColor.innerHTML = colorTemplate(shoes[i]);
        optionSize.innerHTML = sizeTemplate(shoes[i]);

        menListColor.appendChild(optionColor);
        menListSize.appendChild(optionSize);
    }
}


function searchRslts(){
  var filteredShoes = [];
  var noMatch = false;

  for (var i = 0; i < shoes.length; i++) {
    if ((menListColor.value === shoes[i].color) && (menListSize.value == shoes[i].size)) {
      filteredShoes.push(shoes[i]);
      noMatch = true;
        }

  }
  if (noMatch === true) {
    displayMenu.innerHTML = "";
    var genRatedValue = myTemplateInstance({shoes : filteredShoes});
    displayMenu.innerHTML = genRatedValue;
  }
else {
  var imageReveal = 'stock.png';
  displayMenu.innerHTML = "<img src=" + imageReveal + " />";

}

};


sbtn.addEventListener('click', searchRslts);
addmnBtn.addEventListener('click', function(){
  if (userName.value === 'admin' && passCode.value === 'admin') {
    //displayMenu.innerHTML  = '';
    addStockStyle.innerHTML = stockTempInstance();
    //
    exitStock =  document.getElementById('exitStockInput');

  }
  exitStock.addEventListener('click', function(e){
    // for (var i = 0; i < shoes.length; i++) {
    //    shoes[i].brand = addBrand.value;
    //    shoes[i].size = addSize.value;
    //    shoes[i].price = addPrice.value;
    //    shoes[i].in_stock = addQty.value;
    //    shoes[i].color = addColor.value;
    // }
    console.log('Stock');
  }, false);
});
//jumbotron.addEventListener('click'function(){});
