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
    brand : 'Morati',
    in_stock : 3,
    photo: "men.jpg"
  }
];
var addBrand =  document.getElementById('addBrand');
var addSize =  document.getElementById('addSize');
var addPrize =  document.getElementById('addPrize');
var addQty =  document.getElementById('addQty');
var addColor =  document.getElementById('addColor');
var browseImg =  document.getElementById('browseImg');

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
var jumbotron = document.querySelector(".jumbotron");
var myTemplate = document.getElementById("myTemplate");
var myTemplateInstance = Handlebars.compile(myTemplate.innerHTML);
var sbtn = document.getElementById("sbtn");

var stockTemplate = document.getElementById("addStock");
var stockTempInstance = Handlebars.compile(stockTemplate.innerHTML);

window.onload = function () {
    renderOPtions();
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

  for (var i = 0; i < shoes.length; i++) {
    if ((menListColor.value === shoes[i].color) && (menListSize.value == shoes[i].size)) {
      filteredShoes.push(shoes[i]);
        }
  }

  var genRatedValue = myTemplateInstance({shoes : filteredShoes});
  displayMenu.innerHTML = genRatedValue;

};


sbtn.addEventListener('click', searchRslts);
addmnBtn.addEventListener('click', function(){
  if (userName.value === 'admin' && passCode.value === 'admin') {
    //displayMenu.innerHTML  = '';
    jumbotron.innerHTML = stockTempInstance();

  }
});
