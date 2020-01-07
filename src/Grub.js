var Grub = function() {
    this.age = 0;
    this.color = 'pink';
    this.food = 'jelly';
    // this.eat = function() {}
};

Grub.prototype.eat = function(){ };//why does this work inside and out Grub function, why do we need
// a constructor when we use this.eat instead of prototype.eat
Grub.prototype.constructor = Grub;

// Sub Classing
// Build your first class in Grub.js. Grub will act as the superclass for all
// other types of bees. Work through the repo in the order specified below,
// making sure to pass all of the Specs in test/index.html --which you can
// run by simply opening it in your browser and refreshing the page whenever
// you make changes.

// Things To Note:
// This assignment must be written in pseudoclassical style.
// Although there are multiple tests for each class, you will only be able to see
// one test at a time. As soon as one test fails the spec runner stops running and
// you must pass the current test to continue.

// Create a Grub class, in pseudoclassical style, with:
// an age property that is set to 0
// a color property that is set to pink
// a food property that is set to jelly
// an eat method