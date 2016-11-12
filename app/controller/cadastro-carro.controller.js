angular.module('pdApp')
    .controller('CarroController', CarroController);

function CarroController($scope,AlertService) {
    $scope.entidade = {};
    $scope.carros = [];
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.editar = editar;


    function limpar() {
        $scope.carros = [];
        $scope.carroForm.$setUntouched();
        $scope.carroForm.$setPristine();
    }
    function salvar() {
        if($scope.carroForm.$invalid){
            $scope.carroForm.modeloCarro.$setTouched();
            $scope.carroForm.corCarro.$setTouched();
            $scope.carroForm.corCarro.$setTouched();
            AlertService.error('formulario invalido');
            return;
        }
        $scope.carros.push($scope.entidade);
        $scope.entidade = {};
        $scope.carroForm.$setUntouched();
        $scope.carroForm.$setPristine();
        AlertService.success('Gravado com sucesso!',"Sucesss");
    }
    function editar(carro) {
        $scope.entidade  = carro
    }
}