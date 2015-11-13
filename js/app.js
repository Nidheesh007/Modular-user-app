$(document).ready(function() {
    initiateInstance(".myContainer", Dashboard);
});

function initiateInstance(theSelector, modType) {
    var modNodes = $(document).find(theSelector);

    // // for each instanatiate new instance passing 
    $.each(modNodes, function(i, modNode) {
        new modType(modNode);
    });
}