var app = angular.module('app.todos', ['xeditable']);

app.controller('todoController', ['$scope','svTodos', function ($scope, svTodos){
    
    $scope.appName = "Node todos !!!";
    
    $scope.formData = {};
    $scope.loading = true;
    $scope.todos = [];
    // Load data from api
    svTodos.get().then(function (response){
        //console.log(response.data);
        $scope.todos = response.data;
        $scope.loading = false;
    },function(err){
        console.log(err, 'Can not get data');
    });
 
    $scope.createTodo = function() {
        //console.log($scope.formData);
        $scope.loading = true;
        var todo = {
            text: $scope.formData.text,
            isDone: false
        };
        svTodos.create(todo).then( function (response) {
            $scope.todos = response.data;
            //console.log(response.data);
            $scope.formData.text = "";
            $scope.loading = false;
        },function(err){
            console.log(err, 'Can not create data');
        });
    }

    $scope.updateTodo = function(todo) {
        //console.log("Update:", todo);
        $scope.loading = true;

        svTodos.update(todo).then( function(response){
            $scope.todos = response.data;
            $scope.loading = false;
        });
    }

    $scope.deleteTodo = function(todo) {
        //console.log("Delete:" + todo);
        $scope.loading = true;
        svTodos.delete(todo._id).then(function(response){
            $scope.todos = response.data;
            $scope.loading = false;
        });
    }
}]);