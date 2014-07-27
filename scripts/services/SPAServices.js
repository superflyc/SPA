"use strict";
var SPAService = {

    render: function (model, view, target) {

        $.ajax({
            url: "views/" + view
        })
            .done(function (viewHTML) {

                $(target).html(viewHTML);

                var elements = $(target).find("[data-model]");
                elements.each(function () {

                    $(this).html(model[0][$(this).data("model")]);

                });

            })
            .fail(function (jqXHR, status, error) {
                console.log(status + "-" + error);
            });

    }

};