(function(){
	'use strict';




	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOff',ShoppingListCheckOff);

	ToBuyController.$inject = ['ShoppingListCheckOff'];
	function ToBuyController(ShoppingListCheckOff){
		var toBuyItemList = this;
		toBuyItemList.items = ShoppingListCheckOff.getItems();
		toBuyItemList.removeItem = function (itemIndex) {
			ShoppingListCheckOff.removeItem(itemIndex);
		};
		// toBuyItemList.addItem = function (itemIndex) {
		// 	ShoppingListCheckOff.addItem(itemIndex);
		// }
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOff'];
	function AlreadyBoughtController(ShoppingListCheckOff){
		var AlreadyBoughtItemList = this;
		AlreadyBoughtItemList.items = ShoppingListCheckOff.getBoughtItems();

	}

	function ShoppingListCheckOff(){
		var service = this;

		
		var items = [
			{
				name: "Cookie",
				quantity: 1
			},
			{
				name: "Cake",
				quantity: 1
			},
			{
				name: "Chocolates",
				quantity: 2
			}, 
			{
				name: "Apples",
				quantity: 10
			}, 
			{
				name: "Milk",
				quantity: 2
			}
			];

		var boughtItems = [];

		service.addItem = function (itemIndex) {
			boughtItems.push(items(itemIndex));
		};

		service.removeItem = function (itemIndex){
			boughtItems.push(items[itemIndex]);
			items.splice(itemIndex, 1);
			
			// var item = {
		 //      name: "1",
		 //      quantity: 1
		 //    };
		 //    boughtItems.push(item);
		};

		service.getItems = function () {
		    return items;
		  };

		  service.getBoughtItems = function () {
		    return boughtItems;
		  };

	}


})();