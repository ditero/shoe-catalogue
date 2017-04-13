var shoes = [
  {
    color : 'Brown',
    price : 2300.00,
    size  : 5,
    brand : 'Kurt Geiger',
    in_stock : 5,
    photo: "tusoni.png"
  },
  {
    color : 'Black',
    price : 1500.00,
    size  : 6,
    brand : 'Tusoni',
    in_stock : 3,
    photo: "monk2.png"
  },
  {
    color : 'Dark Brown',
    price : 575.00,
    size  : 7,
    brand : 'Magnanni',
    in_stock : 10,
    photo: "wmnboot.png"
  },
  {
    color : 'Pink',
    price : 875.00,
    size  : 8,
    brand : 'Tusoni',
    in_stock : 10,
    photo: "laceUp.png"
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

var menListColor =  document.querySelector(".menListColor");
var menListSize =  document.querySelector(".menListSize");

var optColor = document.getElementById('listColor');
var optSize = document.getElementById('listSize');
var colorTemplate = Handlebars.compile(optColor.innerHTML);
var sizeTemplate = Handlebars.compile(optSize.innerHTML);
var optionColor = null;
var optionSize = null;
var kgBrand = document.getElementById('kgBrand');
var tsBrand = document.getElementById('tsBrand');
var mgnBrand = document.getElementById('mgnBrand');

var login = document.querySelector('.login');
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
    errorMsg.innerHTML = "Wrong password. Default user and password is 'admin'";
  }
  exitStock.addEventListener('click', function(e){
    addStockStyle.innerHTML = "";
  });


  // Add Stock into the Object.
     addStockBtn.addEventListener('click', function(){
       var extOption = shoes.length;
      var myImg = new Image();
      myImg = browseImg.value.replace("C:\\fakepath\\","");

      var size = [];

      var map = {};
      var colorValue = addColor.value;
      var priceValue = addPrice.value;
      var sizeValue = addSize.value;
      var brandValue = addBrand.value;
      var in_stockValue  = addQty.value;
      var photoValue = myImg;

      if(colorValue !== "" && priceValue !== "" && sizeValue !== "" && brandValue !== "" && in_stockValue !== ""&&
photoValue !== ""){
        shoes.push({color: colorValue,
              price: priceValue,
              size: sizeValue,
              brand: brandValue,
              in_stock: in_stockValue,
              photo: photoValue});
      }
      showShoes(shoes);
  }, false);
});

//Create unique color list dropdown values.
function uniqColorList(shoeList){
  var shoeColors = [];
  var mapColor = {};
  for (var y = 0; y < shoeList.length; y++) {
    var colorData = shoeList[y];
    if (mapColor[colorData.color]  === undefined) {
      mapColor[colorData.color] = colorData.color;
      shoeColors.push(colorData.color);

    }
  }
  return shoeColors;
};
//Create unique size list dropdown values.
function uniqSizeList(shoeList){
  var shoeSizes = [];
  var mapSizes = {};
  for (var y = 0; y < shoeList.length; y++) {
    var sizeData = shoeList[y];
    if (mapSizes[sizeData.size]  === undefined) {
      mapSizes[sizeData.size] = sizeData.size;
      shoeSizes.push(sizeData.size);

    }
  }
  return shoeSizes;
};


window.onload = function () {
    showShoes(shoes);

}

function showShoes(data) {
 var thisColor = uniqColorList(shoes);
 var thisSize = uniqSizeList(shoes);

      menListColor.innerHTML = colorTemplate({shoes:thisColor});
      menListSize.innerHTML = colorTemplate({shoes:thisSize});
      var allShoes = myTemplateInstance({shoes: shoes});
      displayMenu.innerHTML = allShoes;

}

function getBrand(){
    var myBrand = [];
    for(var t = 0; t < shoes.length; t++){
        if(shoes[t].brand === kgBrand.value){
          myBrand.push(shoes[t]);
    }
    else if (shoes[t].brand === mgnBrand.value) {
      myBrand.push(shoes[t]);

    }
    // else if (shoes[t].brand === tsBrand.value) {
    //   myBrand.push(shoes[t]);
    // }

    }
     console.log("Tusoni Shoes");
    var showMyBrand = myTemplateInstance({shoes : myBrand});
    displayMenu.innerHTML = showMyBrand;
}
var myBrand = [];
var showMyBrand = null;
var countBrands = null;
kgBrand.addEventListener('click', function(){
  countBrands = 0;
  displayMenu.innerHTML = "";
      for(var t = 0; t < shoes.length; t++){

          if(shoes[t].brand === kgBrand.value){
            if (countBrands === 0) {
                myBrand.push(shoes[t]);
            }

      }
    }
    showMyBrand = myTemplateInstance({shoes : myBrand});
    displayMenu.innerHTML = showMyBrand;
    countBrands++;
});

tsBrand.addEventListener('click', function(){
  countBrands = 0;
  displayMenu.innerHTML = "";
      for(var t = 0; t < shoes.length; t++){

          if(shoes[t].brand === tsBrand.value){
            if (countBrands === 0) {
                myBrand.push(shoes[t]);
            }

      }
    }
    showMyBrand = myTemplateInstance({shoes : myBrand});
    displayMenu.innerHTML = showMyBrand;
    countBrands++;
});

mgnBrand.addEventListener('click', function(){
  countBrands = 0;
  displayMenu.innerHTML = "";
      for(var t = 0; t < shoes.length; t++){

          if(shoes[t].brand === mgnBrand.value){
            if (countBrands === 0) {
                myBrand.push(shoes[t]);
            }

      }
    }
    showMyBrand = myTemplateInstance({shoes : myBrand});
    displayMenu.innerHTML = showMyBrand;
    countBrands++;
});
