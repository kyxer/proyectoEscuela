/*-------------------------------------------------------------------------
 * Autor: German Mendoza
 * correo: german.mendoza.187@gmail.com
 * Copyright: German Mendoza, en caso de distribución colocar mis referencias
 * Fecha de publicación: 30/07/2015
 * Version: 1.0
 * Descripcion: Aplicación que se encarga de mostrar la vistas de las rutas y cargar las dependencias
 *
 *
 * DEPENDENCIAS
 *  - angular.js
 *  - angular-ui-router.js
 *  - angular-scroll
 *-------------------------------------------------------------------------*/

angular.module('proyectoEscuela', ['ui.router', 'duScroll'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {


        var scrollTop = function ($document) {

            var intTop = 200;
            var intDuration = 800; //milliseconds

            //Mover scroll hasta la posición indicada
            $document.scrollTop(intTop, intDuration).then(function () {
            });
        }

        // En caso de que no haya coincidencias redirigir a home
        $urlRouterProvider.otherwise("/");

        // Preparando las rutas para cargar las vistas
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "views/home.html",
                controller: function ($document) {
                    scrollTop($document);
                }
            })
            .state('sec1', {
                url: "/u/68803275/funvisis/en-venezuela-se-han-danado-escuelas-por-terremotos",
                templateUrl: "views/sec1.html",
                controller: function ($document) {
                    scrollTop($document);
                }
            })
            .state('sec2', {
                url: "/u/68803275/funvisis/venezuela-es-un-pais-sismico",
                templateUrl: "views/sec2.html",
                controller: function ($document) {
                    scrollTop($document);
                }
            })
            .state('sec3', {
                url: "/u/68803275/funvisis/mi-escuela-es-vulnerable",
                templateUrl: "views/sec3.html",
                controller: function ($document) {
                    scrollTop($document);
                }
            })
            .state('sec4', {
                url: "/u/68803275/funvisis/como-reducir-el-riesgo-sismico-en-mi-escuela",
                templateUrl: "views/sec4.html",
                controller: function ($document) {
                    scrollTop($document);
                }
            })
            .state('contact', {
                url: "/u/68803275/funvisis/contactanos",
                templateUrl: "views/contact.html",
                controller: function ($document) {
                    scrollTop($document);
                }
            })
        ;


        $locationProvider.html5Mode(true);

    }).run(function ($rootScope, $window) {

    });