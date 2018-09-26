/// <reference path="node_modules/@types/jquery/index.d.ts" />
/// <reference path="node_modules/sweetalert/typings/sweetalert.d.ts" />
// import swal from 'sweetalert';
// import from "jquery";
console.log("Hola mundo");
$(document).ready(function () {
    console.log("Página lista y cargada");
    $("h1").text("Hola desde Typescript");
    $("p").text("Hola desde este párrafo");
    $("h1").css("background-color", "red");
    $('#botAlerta').on("click", function () {
        sweetAlert("Oops, something went wrong here!");
    });
});
