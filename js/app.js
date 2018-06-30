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



    /*innertext in subbmit*/
    var chairTypes = document.querySelectorAll(".chair_type li");
    var chairColor = document.querySelectorAll(".chair_color li");
    var chairMaterial = document.querySelectorAll(".chair_material li");

    var title = document.querySelector(".title_text");
    var color = document.querySelector(".color_text");
    var material = document.querySelector(".pattern_text");

    var typeValue = document.querySelector(".title_value");
    var colorValue = document.querySelector(".color_value");
    var materialValue = document.querySelector(".pattern_value");
    var transportValue = document.querySelector(".transport_value");
    var sumValue = document.querySelector(".sum");

    /*funkcja przenosząca wybrany element z listy dropdown do podsumowania, cadająca cenę i licząca sumę*/
    var sum = 0;

    var submit = function (list, submitPlace, valuePlace) {
        for (var i=0; i<list.length; i++) {
            list[i].addEventListener("click", function () {
                submitPlace.innerText = this.innerText;
                valuePlace.innerText = this.dataset.price;

                sum = +typeValue.innerText + +colorValue.innerText + +materialValue.innerText + +transportValue.innerText;
                sumValue.innerText = sum;
                this.parentElement.style.display = "none"
            })
        }
    };

    submit(chairTypes, title, typeValue);
    submit(chairColor, color, colorValue);
    submit(chairMaterial, material, materialValue);

    /*checkbox i pojawianie się opcji transport w submit*/
    var tranasport = document.getElementById("transport");
    console.log(tranasport);


    tranasport.addEventListener("change", function () {
        if (this.checked) {
            document.querySelector(".transport_text").innerText = "Transport";
            transportValue.innerText = this.dataset.price;
            console.log(sum+80);
            console.log(sumValue);
            sum += +this.dataset.price;
            sumValue.innerText = sum;

        } else {
            document.querySelector(".transport_text").innerText = "";
            transportValue.innerText = "";
            sum-= +this.dataset.price;
            sumValue.innerText = sum;
        }

    });


    /*pojawianie się odpoiedniej kwoty po wyborze opcji*/
    /*funkcja zwracjaca nazwy poszczególnych elemntów wpisanych w inner text*/
    var elementsInnerText = function (array) {
        var newarray = [];
        for (var i=0; i<array.length; i++) {
            newarray.push (array[i].innerText);
        }
        return newarray;
    };

    /*ceny dodałam do data-set poszczególnych elementów*/
    // console.log(chairTypes[0].dataset.price);

});