let waypoint2 = new Waypoint({
  element: document.getElementById("skill-bars"),
  handler: function () {
    $(".progress-bar").each(function (index) {
      let value = $(this).attr("data-value");
      $(this).animate(
        {
          width: value + "%",
        },
        { duration: 0 }
      );
    });
  },
  offset: 450,
});
