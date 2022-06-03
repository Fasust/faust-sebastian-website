document
  .getElementById("days-since-birth")
  .setAttribute(
    "data-count",
    getDaysBetween(new Date(), new Date("1997-08-27T12:00:00"))
  );

document
  .getElementById("coffees")
  .setAttribute(
    "data-count",
    Math.round(
      getDaysBetween(
        new Date("2015-08-27T12:00:00"),
        new Date("1997-08-27T12:00:00")
      ) * 1.2
    )
  );

function getDaysBetween(firstDate, secondDate) {
  let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

  let diffDays = Math.round(
    Math.abs((secondDate.getTime() - firstDate.getTime()) / oneDay)
  );
  return diffDays;
}
