// editviewapp.directive('accessibleForm', function() {
//     return {
//         restrict: 'A',
//         link: function(scope, elem) {

//             // set up event handler on the form element
//             elem.on('submit', function() {

//                 // find the first invalid element
//                 var firstInvalid = elem[0].querySelector('.ng-invalid');

//                 if (firstInvalid) {
//                     firstInvalid.focus();
//                 }
//             });
//         }
//     };
// });





editviewapp.directive('accessibleForm', function() {
    return {
        restrict: 'A',
        link: function(scope, elem) {
            // set up event handler on the form element
            elem.on('submit', function() {

                var firstInvalid = elem[0].querySelector('.ng-invalid');

                firstInvalid.focus();
                var firstInvalidselect = elem[0][1];
                $('select').each(function() {
                    var testtt = $(this).attr('class');
                    if (testtt.indexOf('ng-invalid-required') !== -1) {
                        firstInvalidselect.focus();
                        return false;
                    }
                });

            });
        }
    };
});