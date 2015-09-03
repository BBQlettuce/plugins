(function () {

  $.Tabs = function (el) {
    this.$el = $(el);
    this.$contentTabs = $(this.$el.data("content-tabs"));
    this.$activeTab = $(this.$contentTabs.find(".active"));

    this.$el.on("click", "a", this.clickTab.bind(this));
  };

  $.Tabs.prototype.clickTab = function (event) {
    event.preventDefault();

    this.$activeTab.toggleClass("active");
    this.$el.find("a.active").toggleClass("active");

    var $liToActivate = $(event.currentTarget);
    $liToActivate.toggleClass("active");

    var $articleToActivate = this.$contentTabs.find($liToActivate.attr("href"));
    $articleToActivate.toggleClass("active");

    this.$activeTab = $articleToActivate;
  };

  $.fn.tabs = function () {
    return this.each(function () {
      new $.Tabs(this);
    });
  };

})();
