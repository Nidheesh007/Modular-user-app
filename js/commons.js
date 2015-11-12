function CommonWidget(rootNode) {
    this.showPopup = function(popUpId) {
        $("body #abc").css("display", "block");
        $("#" + popUpId).css({
            display: "block",
            opacity: "1"
        }).siblings().css("opacity", "0.4");
        return false;
    };

    this.hidePopup = function(popUpId) {
        $("#" + popUpId).css({
            display: "none",
            opacity: "0"
        }).siblings().css("opacity", "1");
        $("body #abc").css("display", "none");
        $("body").css("overflow", "visible");
        return false;
    };
};