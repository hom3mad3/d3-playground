"use strict";
var data = [8, 16, 32, 78, 4, 3];
var colors = ["red", "blue", "yellow", "green", "orange", "black"];
d3.select(".chart").selectAll("div").data(data).enter().append("div").style("width", function(x) {
  return x * 10 + "px";
}).text(function(x) {
  return x;
});
d3.select(".colors").selectAll("li").data(colors).enter().append("li").style("color", function(x) {
  return x;
}).text(function(x) {
  return x;
});
d3.select("#main").append("circle").attr("cx", 50).attr("cy", 50).attr("r", 50);
d3.select("#main").append("circle").attr("cx", 200).attr("cy", 100).attr("r", 40);
