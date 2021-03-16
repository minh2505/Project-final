$(function () {
  // $("li.home").hover(function () {
  //         // over
  //         $("ul.dropdown").animate({top:'50px'},"fast")
  //         $("ul.dropdown-theme").animate({top:'50px'},"fast")
  //     }, function () {
  //         // out
  //         $("ul.dropdown").animate({top:'40px'},"fast")
  //         $("ul.dropdown-theme").animate({top:'40px'},"fast")

  //     }
  // );
  // $("li.page").hover(
  //   function () {
  //     // over
  //     $("ul.dropdown-toggle").animate({ top: "50px" }, 12000);
  //   },
  //   function () {
  //     // out
  //     // $("ul.dropdown-toggle").animate({ top: "50px" }, 600);
  //   }
  // );
  // $(".smallImg").click(function (e) {
  //   e.preventDefault();

  //   $("#productImg").attr("src", $(this).attr("src"));
  // });
  $("li.product").hover(
    function () {
      // over
      $("ul.dropdown-toggle1").animate({ top: "+=10px" }, "fast");
    },
    function () {
      // out
      $("ul.dropdown-toggle1").animate({ top: "-=10px" }, "fast");
    }
  );

  $(".menu-fade").click(function (e) {
    e.preventDefault();
    let test = $(".menu-fade i.fa-angle-down").data("active");

    $(".menu-fadein").fadeToggle(350);
    if (test === "") {
      $(".menu-fade i.fa-angle-down").addClass("ro180deg");
      $(".menu-fade i.fa-angle-down").data("active", "actived");
    } else {
      $(".menu-fade i.fa-angle-down").removeClass("ro180deg");
      $(".menu-fade i.fa-angle-down").data("active", "");
    }
  });
  $(".select-item span").click(function (e) {
    e.preventDefault();
    $(".dropdown-toggle5").fadeToggle(400);
  });

  $(".slide .owl-carousel").owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    lazyLoad: true,
    animateIn: "flipInX",
  });
  $(window).scroll(function () {
    const position = $(window).scrollTop();
    if (position > 20) {
      $("header").addClass("fixed");
      $("ul.dropdown").addClass("ofy");
    } else {
      $("header").removeClass("fixed");
      $("ul.dropdown").removeClass("ofy");
    }
  });

  const datasHome = [
    {
      img:
        "https:demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/07/home-one.jpg",
      id: 01,
      content: "Home 01",
    },
    {
      img:
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/07/home-two1.jpg",
      id: 02,
      content: "Home 02",
    },
    {
      img:
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/07/home-three1.jpg",
      id: 03,
      content: "Home 03",
    },
    {
      img:
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/07/home-four1.jpg",
      id: 04,
      content: "Home 05",
    },
    {
      img:
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/07/home-six1.jpg",
      id: 06,
      content: "Home 06",
    },
    {
      img:
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/07/home-seven1.png",
      id: 07,
      content: "Home 07",
    },
    {
      img:
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/07/home-nine1.jpg",
      id: 08,
      content: "Home 08",
    },
    {
      img:
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/07/home-nine1.png",
      id: 09,
      content: "Home 09",
    },
    {
      img:
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/07/home-one.jpg",
      id: 10,
      content: "Wc marketplace",
    },
    {
      img:
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/07/home-one.jpg",
      id: 11,
      content: "Dokan Marketplace",
    },
    {
      img:
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/06/Furniture.png",
      id: 12,
      content: "Furniture",
    },
    {
      img:
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/06/Grocery.png",
      id: 13,
      content: "Grocery",
    },
    {
      img:
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/06/Parts.png",
      id: 14,
      content: "Auto Parts",
    },
    {
      img:
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/06/Watch.png",
      id: 15,
      content: "Watch",
    },
    {
      img:
        "https://demo.xpeedstudio.com/marketo/home2/wp-content/uploads/sites/2/2020/06/Shoe.png",
      id: 16,
      content: "Shoe",
    },
  ];

  const datasProduct = [
    {
      id: 1,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/40-185x170.png",
      imgBig:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/40.png",
      img2:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/41.png",
      img3:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/39.png",
      img4:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/38.png",
      price: 220.0,
      name: "Mini3D Glass",
      category: ["30%", "70%", "hot sell"],
      categories: ["3D Glass", "Gamepad", "Google Glass"],
    },
    {
      id: 2,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/45-185x170.png",
      price: 199.0,
      name: "Bluetooth Gamepad",
      category: ["30%", "70%", "hot sell"],
    },
    {
      id: 3,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/21-185x170.png",
      price: 299.0,
      name: "Apple iPhone 6s",
      category: ["30%", "70%", "hot sell"],
    },
    {
      id: 4,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/49-185x170.png",
      price: 29.0,
      name: "Kotion Headset",
      category: ["30%", "70%", "hot sell", "trend"],
    },
    {
      id: 5,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/06-185x170.png",
      price: 520.0,
      name: "Waterproof Camera",
      category: ["30%", "70%", "on sell", "trend"],
    },
    {
      id: 6,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/40-185x170.png",
      price: 220.0,
      name: "Moving Camera",
      category: ["30%", "70%"],
    },
    {
      id: 7,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/40-185x170.png",
      price: 220.0,
      name: "Moving Camera",
      category: ["30%", "70%"],
    },
    {
      id: 8,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/04/laptop_features_1-185x170.jpg",
      price: 540.0,
      name: "Xspeed Laptop",
      category: ["45%", "on sell"],
    },
    {
      id: 9,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/laptop_features_21-185x170.jpg",
      price: 699.0,
      name: "Xspeed Laptop V2",
      category: ["45%", "30%"],
    },
    {
      id: 10,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2013/06/3D-VR-Glass-185x170.jpg",
      price: 245.0,
      name: "3D VR Glass",
      category: ["45%"],
    },
    {
      id: 11,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2013/06/3D-VR-Glass-Virtual-Reality-185x170.jpg",
      price: 540.0,
      name: "3D Glass",
      category: ["45%"],
    },
    {
      id: 12,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/30-185x170.png",
      price: 29.0,
      name: "Black Solid Color Full SLeeve",
      category: ["45%"],
    },
    {
      id: 13,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/40-185x170.png",
      price: 220.0,
      name: "Mini 3D Glass",
      category: ["45%"],
    },
    {
      id: 13,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/36-158x158.png",
      price: 499.0,
      name: "Xspeed Projector",
      category: ["on sell"],
    },
    {
      id: 14,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2013/06/Zhndu-Mobile-1-158x158.png",
      price: 160.0,
      name: "Xspeed Moblie",
      category: ["on sell"],
    },
    {
      id: 15,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/24-158x158.png",
      price: 660.0,
      name: "Iphone 7S",
      category: ["on sell"],
    },
    {
      id: 16,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/05-158x158.png",
      price: 300.0,
      name: "Fuers OurDoor",
      category: ["on sell"],
    },
    {
      id: 17,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/06-158x158.png",
      price: 320.0,
      name: "WaterProof Camera",
      category: ["on sell", "hot sell"],
    },
    {
      id: 18,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/19-158x158.png",
      price: 820.0,
      name: "Remote Drone",
      category: ["on sell"],
    },
    {
      id: 19,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/18-158x158.png",
      price: 990.0,
      name: "Profession Drone",
      category: ["on sell"],
    },
    {
      id: 20,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/08-158x158.png",
      price: 200.0,
      name: "CC Camera",
      category: ["on sell"],
    },
    {
      id: 21,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/13-158x158.png",
      price: 1250.0,
      name: "7th Generation",
      category: ["on sell"],
    },
    {
      id: 22,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/04/game_controller_31-158x158.png",
      price: 140.0,
      name: "Game Controller",
      category: ["on sell"],
    },
    {
      id: 23,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/04/game_controller_21-158x158.png",
      price: 240.0,
      name: "Google Glass",
      category: ["on sell"],
    },
    {
      id: 24,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/21-158x158.png",
      price: 1000.0,
      name: "Iphone 6S",
      category: ["hot sell"],
    },
  ];
  const datasTrend = [
    {
      id: 1,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/40-185x170.png",
      price: 220.0,
      name: "Mini3D Glass",
      category: ["feature"],
    },
    {
      id: 2,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/45-185x170.png",
      price: 199.0,
      name: "Bluetooth Gamepad",
      category: ["trending"],
    },
    {
      id: 3,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/21-185x170.png",
      price: 299.0,
      name: "Apple iPhone 6s",
      category: ["trending"],
    },
    {
      id: 4,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/49-185x170.png",
      price: 29.0,
      name: "Kotion Headset",
      category: ["feature", "trending"],
    },
    {
      id: 5,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/06-185x170.png",
      price: 520.0,
      name: "Waterproof Camera",
      category: ["feature", "trending"],
    },
    {
      id: 6,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/40-185x170.png",
      price: 220.0,
      name: "Moving Camera",
      category: ["trending"],
    },
    {
      id: 7,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/40-185x170.png",
      price: 220.0,
      name: "Moving Camera",
      category: ["feature", "trending"],
    },
    {
      id: 8,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/04/laptop_features_1-185x170.jpg",
      price: 540.0,
      name: "Xspeed Laptop",
      category: ["feature"],
    },
    {
      id: 9,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/laptop_features_21-185x170.jpg",
      price: 699.0,
      name: "Xspeed Laptop V2",
      category: ["feature"],
    },
    {
      id: 10,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2013/06/3D-VR-Glass-185x170.jpg",
      price: 245.0,
      name: "3D VR Glass",
      category: ["feature"],
    },
    {
      id: 11,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2013/06/3D-VR-Glass-Virtual-Reality-185x170.jpg",
      price: 540.0,
      name: "3D Glass",
      category: ["feature", "trending"],
    },
    {
      id: 12,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/30-185x170.png",
      price: 29.0,
      name: "Black Solid Color Full SLeeve",
      category: ["feature", "trending"],
    },
    {
      id: 13,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/40-185x170.png",
      price: 220.0,
      name: "Mini 3D Glass",
      category: ["feature", "trending"],
    },
    {
      id: 13,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/36-158x158.png",
      price: 499.0,
      name: "Xspeed Projector",
      category: ["feature"],
    },
    {
      id: 14,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2013/06/Zhndu-Mobile-1-158x158.png",
      price: 160.0,
      name: "Xspeed Moblie",
      category: ["feature"],
    },
    {
      id: 15,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/24-158x158.png",
      price: 660.0,
      name: "Iphone 7S",
      category: ["feature"],
    },
    {
      id: 16,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/05-158x158.png",
      price: 300.0,
      name: "Fuers OurDoor",
      category: ["feature"],
    },
    {
      id: 17,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/06-158x158.png",
      price: 320.0,
      name: "WaterProof Camera",
      category: ["feature"],
    },
    {
      id: 18,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/19-158x158.png",
      price: 820.0,
      name: "Remote Drone",
      category: ["trending"],
    },
  ];
  const datasGadget = [
    {
      id: 1,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/40-185x170.png",
      price: 220.0,
      name: "Mini3D Glass",
      category: ["on sell"],
      detail: "Camera speaker",
    },
    {
      id: 2,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/45-185x170.png",
      price: 199.0,
      name: "Bluetooth Gamepad",
      category: ["on sell"],
      detail: "Drone Gamepad",
    },
    {
      id: 3,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/21-185x170.png",
      price: 299.0,
      name: "Apple iPhone 6s",
      category: ["on sell"],
      detail: "Mobile",
    },
    {
      id: 4,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/49-185x170.png",
      price: 29.0,
      name: "Kotion Headset",
      category: ["on sell"],
      detail: "Speaker Headphone Laptop",
    },
    {
      id: 5,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/06-185x170.png",
      price: 520.0,
      name: "Waterproof Camera",
      category: ["on sell"],
      detail: "Camera Speaker",
    },
    {
      id: 6,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/40-185x170.png",
      price: 220.0,
      name: "Moving Camera",
      category: ["on sell"],
      detail: "Camera Speaker",
    },
    {
      id: 7,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/40-185x170.png",
      price: 220.0,
      name: "Moving Camera",
      category: ["on sell"],
      detail: "Camera Speaker",
    },
    {
      id: 8,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/04/laptop_features_1-185x170.jpg",
      price: 540.0,
      name: "Xspeed Laptop",
      category: ["on sell"],
      detail: "Camera Laptop",
    },
    {
      id: 9,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/laptop_features_21-185x170.jpg",
      price: 699.0,
      name: "Xspeed Laptop V2",
      category: ["on sell"],
      detail: "Camera Laptop",
    },
    {
      id: 10,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2013/06/3D-VR-Glass-185x170.jpg",
      price: 245.0,
      name: "3D VR Glass",
      category: ["on sell"],
      detail: "3D Glass Gamepad Google Glass",
    },
    {
      id: 11,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2013/06/3D-VR-Glass-Virtual-Reality-185x170.jpg",
      price: 540.0,
      name: "3D Glass",
      category: ["on sell"],
      detail: "Gamepad 3D Glass",
    },
    {
      id: 12,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/30-185x170.png",
      price: 29.0,
      name: "Black Solid Color Full SLeeve",
      category: ["feature", "trending"],
    },
    {
      id: 13,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/40-185x170.png",
      price: 220.0,
      name: "Mini 3D Glass",
      category: ["feature", "trending"],
    },
    {
      id: 13,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/36-158x158.png",
      price: 499.0,
      name: "Xspeed Projector",
      category: ["feature"],
    },
    {
      id: 14,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2013/06/Zhndu-Mobile-1-158x158.png",
      price: 160.0,
      name: "Xspeed Moblie",
      category: ["feature"],
    },
    {
      id: 15,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/24-158x158.png",
      price: 660.0,
      name: "Iphone 7S",
      category: ["feature"],
    },
    {
      id: 16,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/05-158x158.png",
      price: 300.0,
      name: "Fuers OurDoor",
      category: ["feature"],
    },
    {
      id: 17,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/06-158x158.png",
      price: 320.0,
      name: "WaterProof Camera",
      category: ["feature"],
    },
    {
      id: 18,
      img:
        "https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/19-158x158.png",
      price: 820.0,
      name: "Remote Drone",
      category: ["trending"],
    },
  ];
  renderHome(datasHome);
  $(".deal-week .owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    slideSpeed: 600,
    transitionStyle: "fade",
    animateIn: "fadeIn",
    animateOut: "fadeOut",
  });
  $(".product-item.owl-carousel").owlCarousel({
    items: 1,
    dots: true,
    slideSpeed: 600,

    transitionStyle: "fade",
    animateIn: "fadeIn",
    animateOut: "fadeOut",
  });
  $(".hot-sell.owl-carousel").owlCarousel({
    items: 1,
    dots: true,
  });
  $(".product-sell.owl-carousel").owlCarousel({
    items: 1,
    nav: false,
    dots: true,
  });
  $(".product-arrival.owl-carousel").owlCarousel({
    items: 6,
    nav: false,
    dots: true,
  });
  $(".product-trend.owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    dots: false,
  });
  // renderOwl(datasProduct, ".product-item.owl-carousel");
  const allCategory = $(".category li a");
  for (let i = 0; i < allCategory.length; i++) {
    if ($(allCategory[i]).hasClass("active")) {
      const category = $(allCategory[i]).data("category");
      const activeProducts = datasProduct.filter((val) =>
        val.category.includes(category)
      );
      renderOwl(activeProducts, ".product-item.owl-carousel");
    }
  }
  $(".category li a").click(function (e) {
    e.preventDefault(); // loai bo su kien mac dinh
    $(".category li a").removeClass("active");
    $(this).addClass("active");

    // lay category
    const category = $(this).data("category");

    const filterProducts = datasProduct.filter((val) =>
      val.category.includes(category)
    );
    // removeOwl(".product-item.owl-carousel");
    removeOwl(datasProduct);
    renderOwl(filterProducts, ".product-item.owl-carousel");
  });
  //------------------Arrival-----------------
  // load san pham ra owl carousel
  // renderOwl(products, ".products-owl .owl-carousel");
  // kiem tra thang nao dang active
  const allCategory1 = $(".category-arrival li a");
  for (let i = 0; i < allCategory1.length; i++) {
    if ($(allCategory1[i]).hasClass("active")) {
      const category1 = $(allCategory1[i]).data("category-arrival");
      const activeProductArrival1 = datasProduct.filter((val) =>
        val.category.includes(category1)
      );
      renderOwlArrival(activeProductArrival1, ".product-arrival.owl-carousel");
    }
  }

  $(".category-arrival li a").click(function (e) {
    console.log(2);
    e.preventDefault(); // loai bo su kien mac dinh
    $(".category-arrival li a").removeClass("active");
    $(this).addClass("active");
    // lay category
    const category1 = $(this).data("category-arrival");

    const filterProducts1 = datasProduct.filter((val) =>
      val.category.includes(category1)
    );
    // removeOwl(".products-owl .owl-carousel");
    removeOwlArrival(datasProduct);
    renderOwlArrival(filterProducts1, ".product-arrival.owl-carousel");
  });

  //--------------Trend---------------

  const allCategory2 = $(".category-trend li a");
  for (let i = 0; i < allCategory2.length; i++) {
    if ($(allCategory2[i]).hasClass("active")) {
      const category2 = $(allCategory2[i]).data("category-trend");
      const activeProductTrend = datasTrend.filter((val) =>
        val.category.includes(category2)
      );
      renderOwlTrend(activeProductTrend, ".product-trend.owl-carousel");
    }
  }

  $(".category-trend li a").click(function (e) {
    e.preventDefault(); // loai bo su kien mac dinh
    $(".category-trend li a").removeClass("active");
    $(this).addClass("active");
    // lay category
    const category3 = $(this).data("category-trend");

    const filterProductsTrend = datasTrend.filter((val) =>
      val.category.includes(category3)
    );
    // removeOwl(".products-owl .owl-carousel");
    removeOwlTrend(datasTrend);
    renderOwlTrend(filterProductsTrend, ".product-trend.owl-carousel");
  });
  //--------------Detail Product------------
  $(".product-item .col2-lg-5 .item .img-product a").click(function (e) {
    // e.preventDefault();
    const idProduct = $(this).data("id-product");
    console.log(idProduct);
    const filterDetail = datasProduct.filter((val) => val.id === idProduct);
    localStorage.setItem("detailProduct", JSON.stringify(filterDetail));
  });
});

function renderDetail(datasDetail) {
  // $(".product-detail .row").empty();
  datasDetail.map((val) => {
    $(`   <div class="col-lg-6">
    <div class="img-product">
        <img src="${val.img}" alt="" id="productImg">
    </div>
   <ul class="flex j-center">
       <li><img src="https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/40-100x100.png" alt="" class="smallImg"></li>
       <li><img src="https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/40-100x100.png" alt="" class="smallImg"></li>
       <li><img src="https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/40-100x100.png" alt="" class="smallImg"></li>
       <li><img src="https://demo.xpeedstudio.com/marketo/home3/wp-content/uploads/sites/3/2018/05/40-100x100.png" alt="" class="smallImg"></li>
   </ul>
</div>`).appendTo(".product-detail .row");
  });
}
function renderHome(datasHome) {
  $(".row.home").empty();
  datasHome.map((val) => {
    $(`<div class="col-lg-3">
        <div class="item">
          <a href=""><img style="max-width: '100%';"  src="${val.img}" alt=""></a>
          <p>${val.content}</p>
        </div>
      </div>`).appendTo(".row.home");
  });
}
function renderOwl(products, selector) {
  for (let i = 1; i <= products.length / 6; i++) {
    let col = "";
    products
      .slice((i - 1) * 6, i * 6)
      .reverse()
      .map((val) => {
        col += `     <div class="col2-lg-5">
        <div class="item">
          <div class="img-product">
           <a href="detail.html" data-id-product="${val.id}"><img src="${val.img}" alt="" class="productImg"></a> 
          </div>
          <div class="content-product">
            <h2>${val.name}</h2>
            <span>$${val.price}.00</span>
          </div>
        </div>
      </div>`;
      });
    $(selector).trigger("add.owl.carousel", [
      `
      <div class="item-container">
      <div class="row1">
      ${col}
      </div>
      </div>
      

    `,
      i - 1,
    ]);
  }
}
function removeOwl(datasProduct) {
  for (let i = 0; i < datasProduct.length; i++) {
    $(".product-item.owl-carousel")
      .trigger("remove.owl.carousel", [i])
      .trigger("refresh.owl.carousel");
  }
}
function renderOwlArrival(list, selector) {
  // dao nguoc 1 array bang .reverse()
  list.reverse().map((val, index) => {
    // remove all item in owl
    // add list san pham vao owl
    $(selector)
      .trigger("add.owl.carousel", [
        `<div class="item-arrival">
      
       
        <div class="item">
          <div class="img-arrival">
            <a href=""><img src="${val.img}" alt=""></a>
          </div>
          <div class="content">
            <h4><a href="">${val.name}</a></h4>
            <span>$${val.price}.00</span>
          </div>
        </div>
      
    
  </div>`,
        index,
      ])
      .trigger("refresh.owl.carousel");
  });
}
function removeOwlArrival(datasProduct) {
  for (let i = 0; i < datasProduct.length; i++) {
    $(".product-arrival.owl-carousel")
      .trigger("remove.owl.carousel", [i])
      .trigger("refresh.owl.carousel");
  }
}
function renderOwlTrend(products, selector) {
  for (let i = 1; i <= products.length / 9; i++) {
    let col = "";
    products
      .slice((i - 1) * 9, i * 9)
      .reverse()
      .map((val) => {
        col += ` <div class="col-lg-4">
        <div class="item flex a-center">
          <div class="img-product">
            <a href=""><img src="${val.img}" alt=""></a>
          </div>
          <div class="content">
            <h5><a href="">${val.name}</a></h5>
            <span>${val.price}.00</span>
          </div>
        </div>
      </div>`;
      });
    $(selector).trigger("add.owl.carousel", [
      `
      <div class="item-trend">
      <div class="row">
      ${col}
      </div>
      </div>
      

    `,
      i - 1,
    ]);
  }
}
function removeOwlTrend(products) {
  for (let i = 0; i < products.length; i++) {
    $(".product-trend.owl-carousel")
      .trigger("remove.owl.carousel", [i])
      .trigger("refresh.owl.carousel");
  }
}
function renderOwlGadget(products, selector) {
  for (let i = 1; i <= products.length / 4; i++) {
    let col = "";
    products
      .slice((i - 1) * 4, i * 4)
      .reverse()
      .map((val) => {
        col += `  <div class="col-lg-6">
        <div class="item flex j-center a-center">
          <div class="img-sell">
            <a href=""><img src="${val.img}" alt=""></a>
            <div class="action flex j-center a-center">
              <span><i class="fas fa-shopping-cart"></i></span>
              <span><i class="far fa-eye"></i></span>
              <span><i class="far fa-heart"></i></span>
            </div>
          </div>
          <div class="content">
            <p><a href="">${val.detail}</a></p>
            <h4><a href="">${val.name}</a></h4>
            <span>$${val.price}.00</span>
          </div>
        </div>
      </div>`;
      });
    $(selector).trigger("add.owl.carousel", [
      `
      <div class="item-sell">
      <div class="row">
      <div class="col-lg-6 left">
      <div class="row">
      ${col}
      </div>
      </div>
      </div>
      </div>
      

    `,
      i - 1,
    ]);
  }
}
function removeOwlGadget(products) {
  for (let i = 0; i < products.length; i++) {
    $(".hot-sell.owl-carousel")
      .trigger("remove.owl.carousel", [i])
      .trigger("refresh.owl.carousel");
  }
}
