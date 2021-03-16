$(function () {
    


    $("li.home").hover(function () {
            // over
            $("ul.dropdown").animate({top:'50px'},"fast")
            $("ul.dropdown-theme").animate({top:'50px'},"fast")
        }, function () {
            // out
            $("ul.dropdown").animate({top:'40px'},"fast")
            $("ul.dropdown-theme").animate({top:'40px'},"fast")

        }
    );
    $("li.page").hover(function () {
            // over
            $("ul.dropdown-toggle").animate({top:'50px'},50)
        }, function () {
            // out
            $("ul.dropdown-toggle").animate({top:'40px'},50)
        }
    );
    $("li.product").hover(function () {
        // over
        $("ul.dropdown-toggle1").animate({top:'+=10px'},"fast")
    }, function () {
        // out
        $("ul.dropdown-toggle1").animate({top:'-=10px'},"fast")
    }
);
$(".menu-fade").click(function (e) { 
    e.preventDefault();
   let test=$(".menu-fade i.fa-angle-down").data("active");

    $(".menu-fadein").fadeToggle(350);
    if(test===""){
        $(".menu-fade i.fa-angle-down").addClass("ro180deg");
        $(".menu-fade i.fa-angle-down").data("active","actived");
    }else{

        $(".menu-fade i.fa-angle-down").removeClass("ro180deg");
        $(".menu-fade i.fa-angle-down").data("active","");
    }
    
});
$(".select-item span").click(function (e) { 
    e.preventDefault();
    $(".dropdown-toggle5").fadeToggle(400);
    
});
$(".owl-carousel").owlCarousel({
    items: 1,
    margin:10,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    lazyLoad:true,
    animateIn: 'flipInX',


    
  });
  $(window).scroll(function () { 
      const position = $(window).scrollTop();
      if(position>20){
          $("header").addClass("fixed");
      }else{
        $("header").removeClass("fixed");
      }
  });
    const home=JSON.parse(localStorage.getItem("row"))||[
        {
            img:"https:demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/07/home-one.jpg",
            id:01,
            content:"Home 01",
        },
        {
            img:"https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/07/home-two1.jpg",
            id:02,
            content:"Home 02",
        },
        {
            img:"https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/07/home-three1.jpg",
            id:03,
            content:"Home 03",
        },
        {
            img:"https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/07/home-four1.jpg",
            id:04,
            content:"Home 05",
        },
        {
            img:"https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/07/home-six1.jpg",
            id:06,
            content:"Home 06",
        },
        {
            img:"https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/07/home-seven1.png",
            id:07,
            content:"Home 07",
        },
        {
            img:"https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/07/home-nine1.jpg",
            id:08,
            content:"Home 08",
        },
        {
            img:"https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/07/home-nine1.png",
            id:09,
            content:"Home 09",
        },
        {
            img:"https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/07/home-one.jpg",
            id:10,
            content:"Wc marketplace",
        },
        {
            img:"https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/07/home-one.jpg",
            id:11,
            content:"Dokan Marketplace",
        },
        {
            img:"https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/06/Furniture.png",
            id:12,
            content:"Furniture",
        },
        {
            img:"https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/06/Grocery.png",
            id:13,
            content:"Grocery",
        },
        {
            img:"https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/06/Parts.png",
            id:14,
            content:"Auto Parts",
        },
        {
            img:"https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/06/Watch.png",
            id:15,
            content:"Watch",
        },
        {
            img:"https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/06/Shoe.png",
            id:16,
            content:"Shoe",
        },
      

    ]

    renderHome()
    function renderHome(){
        $(".row.home").empty();
        home.map((val)=>{
            $(`<div class="col-lg-3">
            <div class="item">
              <a href=""><img src="${val.img}" alt=""></a>
              <p>${val.content}</p>
            </div>
          </div>`).appendTo(".row");
        })
    }
});