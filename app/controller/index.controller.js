angular.module('pdApp')
    .controller('IndexController', IndexController);

function IndexController($scope) {
    $scope.nome = 'Rafael'
    $scope.sobrenome = 'Carvalhedo de Sousa'
    $scope.ola = ola;
    function ola() {
        alert($scope.nome);
    }
}