"use strict";
myNgDemo.DirectiveModule.directive('sideNav', [function() {
    return {
        restrict: 'AE',
        scope: true,
        templateUrl: 'js/directives/sidenav.html',
        link: function(scope, elem, attrs) {
            scope.head = 'selection head';
            scope.expander = false;
            $('ul li').on('click', function(e) {
                $('ul li').removeClass('activeClick');
                $(this).addClass('activeClick');
                $(".ripple").remove();

                var posX = $(this).offset().left,
                    posY = $(this).offset().top,
                    buttonWidth = $(this).width(),
                    buttonHeight = $(this).height();

                $(this).prepend("<span class='ripple'></span>");


                if (buttonWidth >= buttonHeight) {
                    buttonHeight = buttonWidth;
                } else {
                    buttonWidth = buttonHeight;
                }

                var x = e.pageX - posX - buttonWidth / 2;
                var y = e.pageY - posY - buttonHeight / 2;

                $(".ripple").css({
                    width: buttonWidth,
                    height: buttonHeight,
                    top: y + 'px',
                    left: x + 'px'
                }).addClass("rippleEffect");
            });
        }
    };

}]);
