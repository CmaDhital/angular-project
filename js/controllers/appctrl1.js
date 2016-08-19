angular.module("app")
    .controller("appctrl1",["$scope",'itemService', function($scope,itemService){

        //$scope.name="Seema";
        //$scope.itemList = itemService.itemList;
        //console.log($scope.itemList);
        //$scope.items = itemService.items;
        //console.log($scope.items);

            $scope.selectId=0;


            $scope.itemTypes=itemService.itemList;
            $scope.item=itemService.items;

            $scope.chooseSelectedItem=function(itemID, itemDes) {


                    $scope.selectId = itemID;
                    $scope.itemDescription = itemDes;

                    $scope.sortedlist = [];
                    for (var i = 0; i < $scope.item.length; i++) {
                            if ($scope.item[i].itemType == $scope.selectId) {
                                   // alert($scope.selectId);
                                    $scope.sortedlist.push($scope.item[i]);
                            }
                    }

            };

    }]);