
editviewapp.directive('modal', function () {
  return {
    template: '<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content" ng-transclude><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="myModalLabel">Modal title</h4></div></div></div></div>',
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: { visible: '=', onSown: '&', onHide: '&' },
    link: function postLink(scope, element, attrs) {

      $(element).modal({
        show: false,
        keyboard: attrs.keyboard,
        backdrop: attrs.backdrop
      });

      scope.$watch(function () { return scope.visible; }, function (value) {

        if (value == true) {
          $(element).modal('show');
        } else {
          $(element).modal('hide');
        }
      });

      $(element).on('shown.bs.modal', function () {
        scope.$apply(function () {
          scope.$parent[attrs.visible] = true;
        });
      });

      $(element).on('shown.bs.modal', function () {
        scope.$apply(function () {
          scope.onSown({});
        });
      });

      $(element).on('hidden.bs.modal', function () {
        scope.$apply(function () {
          scope.$parent[attrs.visible] = false;
        });
      });

      $(element).on('hidden.bs.modal', function () {
        scope.$apply(function () {
          scope.onHide({});
        });
      });
    }
  };
}
);

editviewapp.directive('modalHeader', function () {
  return {
    template: '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title text-center">{{title}}</h4></div>',
    replace: true,
    restrict: 'E',
    scope: { title: '@' }
  };
});

editviewapp.directive('modalBody', function () {
  return {
    template: '<div class="modal-body" ng-transclude></div>',
    replace: true,
    restrict: 'E',
    transclude: true
  };
});

editviewapp.directive('modalFooter', function () {
  return {
    template: '<div class="modal-footer">'
    + '<button class="button_custom button_custom_reset" data-dismiss="modal" ng-click="hide()">cancel</button>'
    + '<button class="button_custom" ng-click="Submit()">Submit</button>'
    + '</div>',
    replace: true,
    restrict: 'E',
    scope: {
      sub: '=',
      test: '='
    },
    transclude: true,
    link: function (scope, element) {

      // console.log(scope.test);
      // scope.Submit = function () {
      //   scope.sub.gg = true;
      //   if (scope.sub.$valid) {
      //     scope.$emit('formSubmit')
      //   }
      // }
    }
  };
});

editviewapp.controller('ModalControlleraa', function ($scope) {
  // $scope.title = "Angularjs Bootstrap Modal Directive Example";
  // $scope.showModal1 = false;
  // $scope.showModal2 = false;

  // $scope.hide = function (m) {
  //   // if (m === 1) {
  //   //   $scope.showModal1 = false;
  //   // } else {
  //   //   $scope.showModal2 = false;
  //   // }
  // }

  // $scope.modalOneShown = function () {
  //   console.log('model one shown');
  // }

  // $scope.modalOneHide = function () {
  //   console.log('model one hidden');
  // }
});



editviewapp.directive('medModal', function () {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
   scope: {
  ngModel: '=ngModel'
},
    templateUrl: 'stackedModal.html',
    link: function (scope, element) {
       transclude(scope, function(clone, scope) {
        element.append(clone);
      });

      // scope.$watch('activate', function (val) {
      //   if (val === true) {
      //     element.addClass('active').attr('aria-hidden','false').closest('body').addClass('dialogIsOpen');
      //   } else {
      //     element.removeClass('active').attr('aria-hidden','true').closest('body').removeClass('dialogIsOpen');
      //   }
      // });

    }
  };
});
