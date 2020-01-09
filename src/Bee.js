var Bee = function() {
  //var this = Object.create(bee.prototype);
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
  //return this
};

/* why does this expression need to be outside of the constructor function; whereas
   in the case of the Grub() constructor function it could be inside just as well as out..*/
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

// can we talk about the difference between these two properties?

// .prototype < ---- this is a property that points to the functions prototype object, and its
// specific to function objects only
// vs.
// .__proto__ < ---- this is also a property that points to the objects prototype, and it exists on ALL js objects.

// Create a Bee class, in pseudoclassical style, with:
//  call the Grub superclass
//  set the prototype
//  set the constructor
//  an age property that is set to 5
//  a color property that is set to yellow
//  a food property that is inherited from grub
//  an eat method that is inherited from grub
//  a job property that is set to keep on growing