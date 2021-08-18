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
} // end addPurchase function

function readyNow(){
  // display budgetOut
  // target budgetOut by ID
  let el = $( '#budgetOut' );
  el.empty();
  el.append( budget );
  // handle click event
  $( '#addPurchaseButton' ).on( 'click', addPurchase);
} // end readyNow
