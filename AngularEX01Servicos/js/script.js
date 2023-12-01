let app = angular.module('myApplication', []);

app.controller ('myController', function($scope, $timeout){
    $scope.saudacao = "Olá"
    $timeout(function(){
        $scope.saudacao = "Seja Bem-Vindo!";
    }, 3000);
})