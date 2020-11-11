$(function () {

    $('.js-delivery-form').on('change', function () {
        if($('.block-checkbox-under input:checkbox:checked').length >= 1) {
            $('.delivery-further__button').attr('disabled', false);
        } else {
            $('.delivery-further__button').attr('disabled', true);
        }
    });

    $('.js-all-label-checkbox').on('click', function () {
        if($('.block-checkbox-under').hasClass('checkbox-under-show')) {
            $('.block-checkbox-under').removeClass('checkbox-under-show');
        }
        if($(this).prev('.ds-checkbox:checked').length === 0) {
            $(this).closest('.delivery-checkbox-form').addClass('checkbox-show');
            $('.checkbox-other input:checkbox').prop('checked', true)
        } else {
            $(this).closest('.delivery-checkbox-form').removeClass('checkbox-show');
            $('.checkbox-other input:checkbox').prop('checked', false)
            $('.block-checkbox-under').removeClass('checkbox-under-hide');
        }


    });

    $('.js-delivery-label').on('click', function () {

        if($('.delivery-checkbox-form').hasClass('checkbox-show')) {
            if($(this).prev('.ds-checkbox:checked').length === 1) {
                $(this).nextAll('.block-checkbox-under').addClass('checkbox-under-hide');
                $(this).nextAll('.block-checkbox-under').find('input:checkbox').prop('checked', false)
            } else {
                $(this).nextAll('.block-checkbox-under').removeClass('checkbox-under-hide');
                $(this).nextAll('.block-checkbox-under').find('input:checkbox').prop('checked', true)
            }
        } else {
            if($(this).prev('.ds-checkbox:checked').length === 0) {
                $(this).nextAll('.block-checkbox-under').addClass('checkbox-under-show');
                $(this).nextAll('.block-checkbox-under').find('input:checkbox').prop('checked', true)
            } else {
                $(this).nextAll('.block-checkbox-under').removeClass('checkbox-under-show');
                $(this).nextAll('.block-checkbox-under').find('input:checkbox').prop('checked', false)
            }
        }

    });

});

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


















