$(function() {
    console.log( "ready!" );
    var mySwiper = new Swiper('.swiper-container', {
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
    });
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
                    if (index != 0) str = str + " ";
                    index += 1;
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
            var textTop = true;
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
                    "swiper-slide-active": !index,
                    "swiper-slide-next": index === 1
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
            });
            
        }
    });
});

