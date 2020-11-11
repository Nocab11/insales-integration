
    $(function () {
        $('.js-delivery-form').on('change', function () {
            if($('.ds-checkbox-under input:checkbox:checked').length >= 1) {
                $('.delivery-further__button').attr('disabled', false);
            } else {
                $('.delivery-further__button').attr('disabled', true);
            }

        });
        $('.js-choose-all-checkbox').on('click', function () {
            $('.js-delivery-form').addClass('checkbox-show');
            $('.ds-checkbox-under').addClass('ds-checkbox-under-block');
            $('.js-delivery-form input:checkbox').prop('checked', true);

        });

        var all_rest_checkboxes= $('.js-rest-checkbox input:checkbox:checkbox').length;
        $('.js-rest-checkbox input:checkbox:checkbox').on('change', function () {
            var marked_checkbox = $('.js-rest-checkbox input:checkbox:checked').length;
            if (all_rest_checkboxes == marked_checkbox) {
                $('.js-choose-all-checkbox input:checkbox').prop('checked', true);
            } else {
                $('.js-choose-all-checkbox input:checkbox').prop('checked', false);
            }
        });

        $('.js-delivery-form .ds-checkbox-box').on('click', function (event) {
            $(event.target).nextAll(".ds-checkbox-under").addClass( "ds-checkbox-under-block");
            $(event.target).nextAll(".ds-checkbox-under").find("input:checkbox").prop('checked', true);
            if($(this).find(".ds-checkbox-under-block input:checkbox:checked").length == 0) {
                $(event.target).parent().prevAll('.ds-input-checkbox').prop('checked', false);
            } else {
                $(event.target).parent().prevAll('.ds-input-checkbox').prop('checked', true);
                $(this).find('.revealing-checkbox').prop('checked', true);
            }

        });

    })

    $(function () {
        function setChecked(target) {
            var checked = $(target).find("input[type='checkbox']:checked").length;
            if (checked) {
                $(target).find('select option:first').html('Выбрано: ' + checked);
            } else {
                $(target).find('select option:first').html('Выберите вид оплаты');
            }
        }

        $.fn.checkselect = function() {
            this.wrapInner('<div class="checkselect-popup"></div>');
            this.prepend(
                '<div class="checkselect-control">' +
                '<select class="form-control"><option></option></select>' +
                '<div class="checkselect-over"></div>' +
                '</div>'
            );

            this.each(function(){
                setChecked(this);
            });
            this.find('input[type="checkbox"]').click(function(){
                setChecked($(this).parents('.checkselect'));
            });

            this.parent().find('.checkselect-control').on('click', function(){
                $popup = $(this).next();
                $('.checkselect-popup').not($popup).css('display', 'none');
                if ($popup.is(':hidden')) {
                    $popup.css('display', 'block');
                    $(this).find('select').focus();
                } else {
                    $popup.css('display', 'none');
                }
            });

            $('html, body').on('click', function(e){
                if ($(e.target).closest('.checkselect').length == 0){
                    $('.checkselect-popup').css('display', 'none');
                }
            });
        };
        $('.checkselect').checkselect();
    });
















