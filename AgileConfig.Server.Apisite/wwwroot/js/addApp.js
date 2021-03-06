﻿app.controller('addAppCtrl', function ($scope, $http, $state, $window) {
    $scope.app = {
        id: '',
        name: '',
        secret: '',
        enabled: true
    };

    $scope.save = function () {
        $http.post('/app/add', $scope.app)
            .then(r => {
                if (r.data.success) {
                    alert('新建应用成功。');
                    $state.go('apps.list');
                } else {
                    $scope.error_message = r.data.message;
                }
            }, err => {
                console.log(err);
                alert(err.statusText);
            });
    };

    $scope.cancel = function () {
        $window.history.back();
    };
});