(function(){
	'use strict';


	angular.module('LunchCheck', [])
	.controller('LCController', LCController);

	LCController.$inject = ['$scope'];

	function LCController($scope){
		$scope.message = '';

		$scope.sayMessage = function () {

			if (($scope.name)){
				var words = $scope.name.split(',');
				//console.log(words.length);
				if(words.length<=3){
					$scope.message = 'Enjoy!';
				}
				else{
					$scope.message = 'Too much!';
				}
			}
			else{
				$scope.message = 'Please enter data first';
			}


		}
	}


})();