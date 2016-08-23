"use strict";
d3.json("../json/visits.json", function(data) {
  var canvas = d3.select("body").append("svg").attr("width", "100%").attr("height", "500");
  canvas.selectAll("circle").data(data).enter().append("circle").attr("cx", function(d) {
    return d.x;
  }).attr("cy", function(d) {
    return d.y;
  }).attr("r", function(d) {
    return d.y / 10;
  });
});
d3.json("../json/resume.json", function(error, data) {
  var titles = "";
});
