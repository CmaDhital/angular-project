/**
 * Created by Seema on 8/5/2016.
 */
angular.module('app').directive('leftcontainerDir', [function($scope){

    return {
        restrict:'EA',
        templateUrl: "/angular-project/views/leftcontainer.html",
        link:function(scope,el,attr,ctrl)
        {
            el.on('click',function(evt){
               evt.stopPropagation();
                evt.preventDefault();
                scope.$apply(function(){
                })
            });



        }

    };


}]);