$(function () {

    $(document).on("click", ".add-product-basket", function () {

        let id = parseInt($(this).attr("data-id"));

        $.ajax({
            url: `home/addproducttobasket?id=${id}`,
            type: 'post',
            success: function (response) {

                $(".rounded-circle").text(response.count);
                $(".basket-total-price").text(`CART($${response.total})`);

            }
        })

    })

})
