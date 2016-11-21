editviewapp.directive('modelHeader', function() {
    return {
        scope: {
            name: '='
        },
        restrict: 'E',
        template: "<div class='modal-header'><h3 class='modal-title' id='modal-title'>{{name}} </h3></div>"
    };
});