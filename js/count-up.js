let waypoint = new Waypoint({
  element: document.getElementById("datapoints"),
  handler: function() {
    $(".counter").each(function() {
      let $this = $(this),
        countTo = $this.attr("data-count");

      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo
        },

        {
          duration: 1300,
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
