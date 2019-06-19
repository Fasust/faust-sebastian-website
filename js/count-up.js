let waypoint = new Waypoint({
  element: document.getElementById("fh5co-features"),
  handler: function() {
    $(".counter").each(function() {
      var $this = $(this),
        countTo = $this.attr("data-count");

      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo
        },

        {
          duration: 2000,
          easing: "linear",
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        }
      );
    });
  },
  offset: 400
});
