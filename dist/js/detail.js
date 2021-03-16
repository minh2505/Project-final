//
$(function () {
  let detail = localStorage.getItem("detailProduct");
  detail = JSON.parse(detail);

  // $(".product-detail .row .col-lg-6 .img-product img").attr("src", detail.img);
  renderDetail(detail);
  $(".smallImg").click(function (e) {
    e.preventDefault();

    $("#productImg").attr("src", $(this).attr("src"));
  });
  $(".row.detail .col-lg-6 ul li img").click(function (e) {
    e.preventDefault();
    $(".row.detail .col-lg-6 ul li img").removeClass("actived");
    $(this).addClass("actived");
  });
});
function renderDetail(datasDetail) {
  $(".row.detail").empty();
  datasDetail.map((val) => {
    $(` <div class="col-lg-6">
    <div class="img-product">
        <img src="${val.imgBig}" alt="" id="productImg">
    </div>
   <ul class="flex j-center">
       <li><img src="${val.imgBig}" alt="" class="smallImg actived"></li>
       <li><img src="${val.img2}" alt="" class="smallImg"></li>
       <li><img src="${val.img3}" alt="" class="smallImg"></li>
       <li><img src="${val.img4}" alt="" class="smallImg"></li>
   </ul>
</div>
<div class="col-lg-6">
                    <div class="detail">
                        <h1>WaterProof Camera</h1>
                        <p>Categories: <a href="" alt="">${val.categories}</a> </p>
                        <div class="rate">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                        <span>$220.00</span>
                        <div class="quantity flex">
                            <div class="btn">
                                <input type="button" value="-" class="sub">
                                <input type="number" name="" id="quantity" min="1">
                                <input type="button" value="+" class="plus">
                            </div>
                            <div class="btn-cart">
                                <button>Add to cart</button>
                            </div>

                        </div>
                    </div>
                </div>`).appendTo(".row.detail");
  });
}
