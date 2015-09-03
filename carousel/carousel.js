(function () {

  $.Carousel = function (el) {
    this.$el = $(el);
    this.activeIdx = 0;
    this.$el.on("click", ".slide-left", this.slide.bind(this, 1));
    this.$el.on("click", ".slide-right", this.slide.bind(this, -1));
  };

  $.Carousel.prototype.slide = function(dir) {
    var newIdx = this.activeIdx + dir;
    if (newIdx > this.$el.find(".items li").length - 1) {
      newIdx = 0;
    } else if (newIdx < 0) {
      newIdx = this.$el.find(".items li").length - 1;
    };

    var $oldPic = this.$el.find(".items li").eq(this.activeIdx)
    var $newPic = this.$el.find(".items li").eq(newIdx)

    if (this.transitioning) {
      return;
    };
    this.transitioning = true;

    if (dir === -1) {
      $newPic.addClass("active left");
      var oldDir = "right";
    } else if (dir === 1) {
      $newPic.addClass("active right");
      var oldDir = "left";
    };

    window.setTimeout(function() {
      $newPic.removeClass("left right");
      $oldPic.addClass(oldDir)
    }, 0);

    $oldPic.one("transitionend", function() {
      $oldPic.removeClass("left right");
      $oldPic.removeClass("active");
      this.transitioning = false;
    }.bind(this));

    this.activeIdx = newIdx;
  };

  $.fn.carousel = function() {
    return this.each(function() {
      new $.Carousel(this);
    });
  };

})();
