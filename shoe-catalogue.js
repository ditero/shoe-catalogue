var shoes = [
  {
    color : 'Brown',
    price : 350.00,
    size  : 5,
    brand : 'Tusoni laceup',
    in_stock : 5,
    photo: "tusoni.jpg"
  },
  {
    color : 'Black',
    price : 275.00,
    size  : 6,
    brand : 'Monk Strap',
    in_stock : 3,
    photo: "monk2.jpg"
  },
  {
    color : 'Dark Brown',
    price : 575.00,
    size  : 7,
    brand : 'Sissy Boy',
    in_stock : 10,
    photo: "wmnboot.jpg"
  },
  {
    color : 'Pink',
    price : 875.00,
    size  : 5,
    brand : 'Aldo',
    in_stock : 10,
    photo: "laceUp.jpg"
  }

];
var addBrand =  null;
var addSize =  null;
var addPrize =  null;
var addQty =  null;
var addColor =  null;
var browseImg =  null;;
var addStockBtn =  null;
var exitStock = null;

var menListColor =  document.getElementById("menListColor");
var menListSize =  document.getElementById("menListSize");

var optColor = document.getElementById('listColor');
var optSize = document.getElementById('listSize');
var colorTemplate = Handlebars.compile(optColor.innerHTML);
var sizeTemplate = Handlebars.compile(optSize.innerHTML);
var optionColor = null;
var optionSize = null;

var userName = document.getElementById('userName');
var passCode = document.getElementById('passCode');
var addmnBtn = document.getElementById('addmnBtn');
var errorMsg = null;
var displayMenu = document.querySelector(".displayMenu");
var addStockStyle = document.querySelector(".addStockStyle");
var myTemplate = document.getElementById("myTemplate");
var myTemplateInstance = Handlebars.compile(myTemplate.innerHTML);
var searchBtn = document.getElementById("sbtn");

var stockTemplate = document.querySelector("#addStock");
var stockTempInstance = Handlebars.compile(stockTemplate.innerHTML);




function searchRslts(){
  var filteredShoes = [];
  var noMatch = false;

  for (var i = 0; i < shoes.length; i++) {
    if ((menListColor.value === shoes[i].color) && (menListSize.value == shoes[i].size)) {
      filteredShoes.push(shoes[i]);
      //noMatch = true;
        }
        else if (menListColor.value === shoes[i].color) {
          filteredShoes.push(shoes[i]);
        }
        else if (menListSize.value == shoes[i].size) {
          filteredShoes.push(shoes[i]);

        }

  }

  var genRatedValue = myTemplateInstance({shoes : filteredShoes});
  displayMenu.innerHTML = genRatedValue;
  menListSize.value = menListSize[0].value;
  menListColor.value = menListColor[0].value;
  // if (noMatch === true) {
  //
  // }
// else {
//   var imageReveal = 'stock.png';
//   displayMenu.innerHTML = "<img src=" + imageReveal + " />";
//
// }

};


searchBtn.addEventListener('click', searchRslts);
//Login and Capture new stock
addmnBtn.addEventListener('click', function(){
  errorMsg = document.getElementById('errorMsg');
  if (userName.value === 'admin' && passCode.value === 'admin') {
    errorMsg.innerHTML  = '';
    addStockStyle.innerHTML = stockTempInstance();
    //
    addBrand =  document.getElementById('addBrand')
    addSize =  document.getElementById('addSize');
    addPrice =  document.getElementById('addPrice');
    addQty =  document.getElementById('addQty');
    addColor =  document.getElementById('addColor');
    browseImg =  document.getElementById('browseImg');
    exitStock =  document.getElementById('exitStockInput');
    addStockBtn = document.getElementById('submitStock');

  }
  else{
    errorMsg.innerHTML = "Wrong password. Try again.";
  }
  exitStock.addEventListener('click', function(e){
    addStockStyle.innerHTML = "";
  });
  // Add Stock into the Object.
     addStockBtn.addEventListener('click', function(e){
      var myImg = new Image();
      myImg = browseImg.value.replace("C:\\fakepath\\","");

      var map = {};
      map.color = addColor.value;
      map.price = addPrice.value;
      map.size = addSize.value;
      map.brand = addBrand.value;
      map.in_stock  = addQty.value;
      map.photo = myImg;
      shoes.push(map);
//Update dropdown List
      optionColor = document.createElement('option');
      optionSize = document.createElement('option');
      optionColor.innerHTML = colorTemplate(shoes[objSize]);
      optionSize.innerHTML = sizeTemplate(shoes[objSize]);
      menListColor.appendChild(optionColor);
      menListSize.appendChild(optionSize);

//Display the added item to the current list.
      var allShoes = myTemplateInstance({shoes : shoes});
      displayMenu.innerHTML = allShoes;

    // console.log(shoes);
  }, false);
});

window.onload = function () {
    renderOPtions();
    var allShoes = myTemplateInstance({shoes});
    displayMenu.innerHTML = allShoes;
}

function renderOPtions() {
    for (var i = 0; i < shoes.length; i++) {

        optionColor = document.createElement('option');
        optionSize = document.createElement('option');

        optionColor.innerHTML = colorTemplate(shoes[i]);
        optionSize.innerHTML = sizeTemplate(shoes[i]);

        menListColor.appendChild(optionColor);
        menListSize.appendChild(optionSize);
    }
}
