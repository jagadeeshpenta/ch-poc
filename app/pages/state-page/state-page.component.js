chApp.component('statePage', {
    templateUrl: 'pages/state-page/state-page.tpl.html',
    controller: ['$routeParams', function ($routeParams) {
        var self = this;
        self.Page = 'StatePage';
    }]
});