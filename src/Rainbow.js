var Rainbow = function(top, left, timeBetweenSteps){
  //this = object.create(Dancer.prototype);
  this._colors = ["white", "red", "blue"];
  this._flag = false;
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  //return this
};
// TODONE: Understand why we don't sub sub class here.
Rainbow.prototype = Object.create(BlinkyDancer.prototype);
Rainbow.prototype.constructor = Rainbow;

Rainbow.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step

  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var newcolor = "10px solid ";
  var transientColor = this._colors.shift();
  newcolor = newcolor + transientColor;
  this._colors.push(transientColor);
  this.$node.css("border", newcolor);
};