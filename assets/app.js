var app = angular.module ('app', [])

app.controller ('PostsCtrl', function ($scope, $http) {
    $scope.addPost = function () {
        if ($scope.postBody) {
            $http.post ('/api/posts', {
                username: 'vytas',
                body: $scope.postBody
            }).success (function (post) {
                $scope.posts.unshift (post)
                $scpoe.postBody = null
            })
        }
    }

    $http.get ('/api/posts').success (function (posts) {
        $scope.posts = posts
    })
})