var Bee = function() {
    this.age = 5;
    this.color = 'yellow';
    Grub.call(this.food);
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;