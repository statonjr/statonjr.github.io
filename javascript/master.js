var LS = {
  drawBackground: function() {
    var paper = Raphael(0,0,$(window).width(),$(window).height());
    var violet = paper.circle($(window).width()/2,$(window).height(),550);
    violet.attr('fill', "violet");
    violet.attr('stroke','violet');
    var indigo = paper.circle($(window).width()/2,$(window).height(),500);
    indigo.attr('fill', "indigo");
    indigo.attr('stroke','indigo');
    var blue = paper.circle($(window).width()/2,$(window).height(),450);
    blue.attr('fill', "blue");
    blue.attr('stroke','blue');
    var green = paper.circle($(window).width()/2,$(window).height(),400);
    green.attr('fill', "green");
    green.attr('stroke','green');
    var yellow = paper.circle($(window).width()/2,$(window).height(),350);
    yellow.attr('fill', "yellow");
    yellow.attr('stroke','yellow');
    var orange = paper.circle($(window).width()/2,$(window).height(),300);
    orange.attr('fill', "orange");
    orange.attr('stroke','orange');
    var red = paper.circle($(window).width()/2,$(window).height(),250);
    red.attr('fill', "red");
    red.attr('stroke','red');
    var cent = paper.circle($(window).width()/2,$(window).height(),200);
    cent.attr('fill', "rgb(153, 204, 255)");
    cent.attr('stroke','rgb(153, 204, 255)');
  }
};

window.addEventListener('load',LS.drawBackground,false);