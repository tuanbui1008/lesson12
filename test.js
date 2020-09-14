$(document).ready(function() {
    $("#select").on("change", function() {
        var value = $(this).val().toLowerCase();

        function sortByPrice(a, b) {
            return $(a).find('.card-text').text() > $(b).find('.card-text').text() ? 1 : -1;
        }

        function sortByPriceDesc(a, b) {
            // console.log()
            return $(a).find('.card-text').text() < $(b).find('.card-text').text() ? 1 : -1;
        }
        if (value === "decrease") {
            reorderEl($('.product').sort(sortByPriceDesc));

        } else if (value === "increase") {
            reorderEl($('.product').sort(sortByPrice));
        }

        function reorderEl(el) {
            var container = $('.list-product');
            container.html('');
            el.each(function() {
                $(this).appendTo(container);
            });
        }
    })
})