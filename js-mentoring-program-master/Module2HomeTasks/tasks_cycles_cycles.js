/**
 * Write the function that will calculate the amount of discount
 * considering the redemption amount
 * Rules are the following:
 * - 0    - 350:  0%
 * - 351  - 1350: 15%
 * - 1351 - 2700: 30%
 * - 2701 - 6500: 45%
 * @param {number} redemption amount (0 - 9999)
 * @returns {number} discount in percent
 */

function calculateDiscount(redemption) {
  let discount;

  //PLACE YOUR CODE HERE
    let redemption;
  if (redemption >= 350) {
      discount = 0;
  }  else if  (redemption == 351 || redemption <= 1350){
      discount = 15;
  } else if (redemption == 1351 || redemption <= 2700){
      discount = 30;
  } else if (redemption == 2701 || redemption <= 6500){
      discount = 45;
  } else {
      console.log ('Discount should not be counted');
  };
// THE END OF MY CODE

  return discount;
}

/** TODO
 * implement factorial algorithm using for, while, do..while operators
 */
{
  const i = 10; //10! = 3628800
//MY CODE
    function factorialize(i) {
        var result = i;
        if (i === 0 || i === 1)
        return 1;
        while (i > 1) {
            i--;
            result *= i;
        }
        return result;
    }
    factorialize(i);
  }
}

/**
 * return concatenated string from an array of substring
 */
{
  const substr = ["I", " love", " JS"];
// MY CODE
    console.log(substr.join(' '));
}

/**
 * calculate a total of income of certain person
 */
{
  const personIncomes = {
    salary: 1985,
    rent: -600,
    interestOnDeposit: 250,
    otherExpences: -300
  };
    const sum = personIncomes.salary + personIncomes.rent + personIncomes.interestOnDeposit + personIncomes.otherExpences
}

//module.exports = calculateDiscount;
