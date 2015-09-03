(function() {

  $.Thumbnails = function(el) {
    this.$el = $(el);
    this.$gutterImages = this.$el.find(".gutter-images img");
    this.$activeImg = this.$gutterImages.first();
    this.activate(this.$activeImg);
    this.$el.on("click", ".gutter-images img", this.clickHandler.bind(this));
    this.$el.on("mouseenter", ".gutter-images img", this.enterHandler.bind(this));
    this.$el.on("mouseleave", ".gutter-images img", this.leaveHandler.bind(this));
  };

  $.Thumbnails.prototype.activate = function ($img) {
    var $dogClone = $img.clone();
    this.$el.find(".active").empty();
    this.$el.find(".active").append($dogClone);
  };

  $.Thumbnails.prototype.clickHandler = function(event) {
    $clickedImg = $(event.currentTarget);
    this.$activeImg = $clickedImg;
    this.activate(this.$activeImg);
  };

  $.Thumbnails.prototype.enterHandler = function(event) {
    $mousedImg = $(event.currentTarget);
    this.activate($mousedImg);
  };

  $.Thumbnails.prototype.leaveHandler = function(event) {
    this.activate(this.$activeImg);
  };

  $.fn.thumbnails = function () {
    return this.each(function () {
      new $.Thumbnails(this);
    });
  };

})();
