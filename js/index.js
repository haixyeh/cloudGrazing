$(function() {
    console.log( "ready!" );
    var mySwiper = new Swiper('.swiper-container', {
        // effect: 'coverflow',
        slidesPerView: 'auto',
        centeredSlides: true,
        //左右切換
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        //分頁器
        pagination: {
            el: ".swiper-pagination",
            clickable: true, // 允許點擊小圓點跳轉
        },
        loop: true,
    });

    // new Swiper('.swiper-container');
    var errorHandel = function(res) {
        if (res.status !== 200) {
            alert(res.msg);
            return true;
        }
        return false;
    }

    var classNames = function(obj) {
        var str = "";
        var index = 0;
        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                
                const element = obj[key];
                if (element) {
                    str += key;
                    index += 1;
                    if (index != 0) str = str + " ";
                }
            }
        }
        return str;
    }
    var event3dSlider = function(idName, appendDom, data, width = 350, textTop = false) {

    }

    $.ajax({
        url: "./fakeApi/swiper.json"
    }).done(function(res) {
        // console.log(res)
        var error = errorHandel(res);
        if (error) {
            return;
        }
        if (res.dataList && res.dataList.length) {
            var idName = "idTest";
            var sliderData = res.dataList;
            var textTop = false;
            var cardDom = [];
            var width = 350;
            var zIndex = 1;
            var create3dSliderDom = $("<div>",
                {
                    "id": idName,
                    "class": "swiper-container-2 swiper-container-coverflow swiper-container-3d swiper-container-initialized swiper-container-horizontal"
                }
            ).appendTo(".swiper-list-first");
            var container = $("<div>",{"class": "swiper-wrapper slider-container-3d"}).appendTo(create3dSliderDom);

            
            sliderData.forEach((item, index) => {
                
                var cardWrapCass= classNames({
                    "swiper-slide slider-card-wrap": true,
                    "swiper-slide-active": index === 3,
                    "swiper-slide-next": index === 4,
                    "is-working": !item.is_working
                });

                var cardWrap = $("<div>", {
                    "class": cardWrapCass,
                })
                var card = $("<div>", {class: "card" }).appendTo(cardWrap);
                if (textTop) {
                    var cardBody = $("<div>", {class: "card-body"}).appendTo(card);
                    $(card).append($("<img>", {class: "card-img", src: item.img_url, alt: "" }));
                } else {
                    $(card).append($("<img>", {class: "card-img", src: item.img_url, alt: "" }));
                    var cardBody = $("<div>", {class: "card-body"}).appendTo(card)
                }
                $(cardBody).append($("<h3>"+ item.title +"</h3>")).append($("<span>"+ item.describe +"</span>"));
                cardDom.push(cardWrap);
            });
            $(container).append(cardDom)
            $(container).append("<span class='swiper-notification' aria-live='assertive' aria-atomic='true'>")
            var idTest= new Swiper("#"+idName, {
                effect: 'coverflow',
                slidesPerView: 'auto',
                centeredSlides: true,
                coverflowEffect: {
                    slideShadows: true,
                    rotate: 20,
                    stretch: 0,
                    depth: 350,
                    modifier: 1,
                },
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
            });
            
        }
    });
});

