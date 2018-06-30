document.addEventListener("DOMContentLoaded", function () {

    /*znikanie opisu obrazków*/
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

    /********************************************************/
    /*slajder*/
    var next = document.querySelector(".banner-next");
    var previus = document.querySelector(".banner-prev");
    var imgList = document.querySelectorAll(".banner-img");
    var index = 0;
    /*tworzę zmienne do timeInterwal*/



    console.log(next);
    console.log(previus);
    console.log(imgList);

    imgList[index].classList.add("visible");

    previus.addEventListener("click", function (element) {
        imgList[index].classList.remove("visible");
        index --;

        if(index < 0) {
            index = imgList.length - 1;
        }
        imgList[index].classList.add("visible");
    });


    next.addEventListener("click", function (element) {
        imgList[index].classList.remove("visible");
        index ++;

        if(index >= imgList.length) {
            index = 0;
        }

        imgList[index].classList.add("visible");
    });


/*dropdownlist*/
    var listArrow = document.querySelectorAll(".list_arrow");

    for (var i=0; i<listArrow.length; i++) {
        listArrow[i].addEventListener("click", function () {
            if (this.nextElementSibling.style.display === "block") {
                this.nextElementSibling.style.display = "none";
            } else {
                this.nextElementSibling.style.display = "block"
            }
        });
    }



});