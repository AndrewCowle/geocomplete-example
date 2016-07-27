$(document).ready(function() {
    
    // Attach plugin to input element with the class 'geocomplete'

    $('.geocomplete').geocomplete({
        country: 'GB',
        details: '.address',
        detailsAttribute: "data-geo"
    });

});
