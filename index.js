


function calculateTax (amount) {
    amount = amount *0.10
    console.log(amount)
    return amount
}



function convertToUpperCase (text) {

     text = text.toUpperCase();
 
    console.log(text)
    return text

}


function findMaximum(num1, num2) {
    if (num1 > num2) {

      return num1;

    }  
    else {

      return num2;
    }
  }

  
function isPalindrome(word) { 
    for (let i = 0 ;i < word.length / 2; i++){
        if(word[i] !=word[word.length - 1 - i]) {
            return false; 
        }
    }
    return true;
}

function calculateDiscountedPrice(originalPrice, discountPercentage){
    if(discountPercentage === 0){
        expectedDiscountedPrice = orginalPrice;
        return expectedDiscountedPrice;
    }

    if (discountPercentage > 0) {
        return originalPrice - (originalPrice * discountPercentage / 100)
    }

    numdiscount = discountPercentage/100;
    numdiscount = numdiscount *originalPrice;
    expectedDiscountedPrice = numdiscount - originalPrice;

    
    return expectedDiscountedPrice;

}



//The function should calculate and return the price after applying the discount. For example, if originalPrice is $100 and discountPercentage is 20, the function should return $80.


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };