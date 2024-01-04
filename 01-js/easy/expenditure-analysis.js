/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categories = {};
  // console.log(transactions);
  for (key in transactions){
    // console.log(key, transactions[key].category, transactions[key].price);
    if (!categories[transactions[key].category]){
      categories[transactions[key].category] = {'category' : transactions[key].category, 'totalSpent' : transactions[key].price};
    }
    else{
      categories[transactions[key].category]['totalSpent'] += transactions[key].price
    }
    // console.log(categories);
  }

  const analytics = [];

  for (key in categories){
    // console.log(categories[key]);
    analytics.push(categories[key])
  }

  // console.log('analytics : ', analytics);
  return analytics;
}

module.exports = calculateTotalSpentByCategory;
