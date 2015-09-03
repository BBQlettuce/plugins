(function () {

  $.Tabs = function (el) {
    this.$el = $(el);
    this.$contentTabs = $(this.$el.data("content-tabs"));
    this.$activeTab = $(this.$contentTabs.find(".active"));

    this.$el.on("click", "a", this.clickTab.bind(this));
  };

  $.Tabs.prototype.clickTab = function (event) {
    event.preventDefault();
    var $liToActivate = $(event.currentTarget);
    var $articleToActivate = this.$contentTabs.find($liToActivate.attr("href"));

    this.$activeTab.addClass("transitioning");

    this.$activeTab.one("transitionend", function() {
      this.$activeTab.removeClass("active");
      this.$activeTab.removeClass("transitioning");
      this.$el.find("a.active").removeClass("active");

      $liToActivate.addClass("active");
      $articleToActivate.addClass("active");
      $articleToActivate.addClass("transitioning");
      window.setTimeout(function(){
        $articleToActivate.removeClass("transitioning");
      }, 0);

      this.$activeTab = $articleToActivate;
    }.bind(this));

  };

  $.fn.tabs = function () {
    return this.each(function () {
      new $.Tabs(this);
    });
  };

})();
