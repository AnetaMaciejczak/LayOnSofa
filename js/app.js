document.addEventListener("DOMContentLoaded", function () {

    var leftProduct = document.querySelector(".product-left");
    leftProduct.addEventListener("mouseover", function () {
        document.querySelector(".product-title").style.visibility = "hidden";
    });
    leftProduct.addEventListener("mouseout", function () {
        document.querySelector(".product-title").style.visibility = "visible";
    });

    var centerProduct = document.querySelector(".product-center");
    centerProduct.addEventListener("mouseover", function () {
        document.querySelector(".center").style.visibility = "hidden";
    });
    centerProduct.addEventListener("mouseout", function () {
        document.querySelector(".center").style.visibility = "visible";
    });



});