(function ( ) {
    "use strict";
    var assignmentsApp = angular.module("LunchApp", []);

    assignmentsApp.controller("LunchContoller", m1Ctrl);

    function m1Ctrl( $scope ){
        $scope.itemsList = "";
        $scope.numberOfItems = 0;

        $scope.updateNumberOfItems = function(){
            $scope.numberOfItems = calculateNumberOfItems( $scope.itemsList );
        }

        $scope.updateItemsMessage = function(){
            $scope.itemsMessage = calculateItemsMessage( $scope.numberOfItems );
        }

        function calculateNumberOfItems( string ){
            return string.split(",").length;
        }

        function calculateItemsMessage( numberOfItems ){
          if(numberOfItems == 0){
            return "Please enter data first";
          } else {
            return numberOfItems < 4 ? "Enjoy!" : "Too much!";
          }
        }
    }

   })();
