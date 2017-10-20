/**
 * Created by Administrator on 2017/10/19 0019.
 */
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('purchase',{
            url:"/purchase",
            templateUrl:"App/Views/purchase.html"
        });
    $urlRouterProvider.otherwise("/purchase");
});