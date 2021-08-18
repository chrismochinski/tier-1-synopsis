$( document ).ready( readyNow );

const budget = 25000;
let purchases = [];

function addPurchase(){
    console.log( 'in addPurchase function' );
    // get user input and create a new object
    let newPurchase = {
      name: $( '#purchaseNameIn' ).val(),
      price: $( '#purchasePriceIn' ).val()
    }
    // push new purchase into array
      purchases.push( newPurchase );
    // empty inputs
      $( '#purchaseNameIn' ).val( '' );
      $( '#purchasePriceIn' ).val( '' );
    // calculate remainingBudget
    calculateRemainingBudget()
    //update DOM
    displayPurchases();
}
//end addPurchase function


function calculateRemainingBudget(){
  console.log( 'in calculateRemainingBudget' );
  // loop through purchases Array
  let totalPrices = 0;
  for(let i=0; i<purchases.length; i++){
    // for each purchase, add up total of all prices
    totalPrices += Number(purchases[i].price);
  }
  // end for loop
  console.log( 'totalPrices', totalPrices );
  // subtract totalPrices from the budget for remainingBudget
  const remainingBudget = budget - totalPrices;
  // display remainingBudget
  let el = $ ('#remainingBudgetOut');
  el.empty();
  el.append(remainingBudget);
}
//end calculateRemainingBudget Function


function displayPurchases(){
  console.log( 'in displayPurchases' );
  //target output by // ID
  let el = $( '#purchasesOut' );
  //E M P T Y
  el.empty();
  //loop through purchases Array
  for( purchase of purchases ){
    // for each purchase, create a list item
    // el.append( `<li>` + purchase.name + `: $` + purchase.price + `</li>`);
    el.append( `<li>` + purchase.name + ` - $` + purchase.price + `</li>`);

  } // end for of loop
}
// end displayPurchases


function readyNow(){
  // display budgetOut
  // target budgetOut by ID
  let el = $( '#budgetOut' );
  el.empty();
  el.append( budget );
  // handle click event
  $( '#addPurchaseButton' ).on( 'click', addPurchase);
  // init display
  calculateRemainingBudget();
}
// end readyNow function
