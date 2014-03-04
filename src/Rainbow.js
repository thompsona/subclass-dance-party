var Rainbow = function(top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this._colors = [];
  this._flag = false;
};
// TODO: Understand why we don't sub sub class here.
Rainbow.prototype = Object.create(BlinkyDancer);
Rainbow.prototype.constructor = Rainbow;

Rainbow.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step

  BlinkyDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var newcolor = "10px solid ";
  this.$node.css("border", newcolor);
};