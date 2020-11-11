$(document).ready(function () {

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