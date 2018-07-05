"use strict";

import PhoneController from "../controllers/PhoneController";

export default function SinglePhoneDirective(){

    return{

        restrict: 'EAC',
        scope:{
            phone: '=singlePhone'

        },//scope
        templateUrl: 'templates/directives/single-phone-directive.html',
        controller: [ '$scope', 'PhoneController', function ($scope, PhoneController){

            $scope.addToCartClick = function (phone){
                PhoneController.addPhoneToCart(phone);
            }//addToCartClick

        }]

    }//return

}//SinglePhoneDirective


