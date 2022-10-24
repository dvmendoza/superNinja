class Ninja{
    constructor(name, health = 0, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(this.name)
    }

    showStats(){
        console.log(this.name, this.strength, this.speed, this.health)
    }

    drinkSake(){
        this.health += 10
    }
}

const mendo = new Ninja("mendo");
mendo.sayName()
mendo.showStats()
mendo.drinkSake()
mendo.showStats()

class Sensei extends Ninja{
    constructor(name, wisdom = 10){
        super(name, 200, 10, 10)
        this.wisdom = wisdom;
    }

    speakWisdom(){
        super.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months")
    }
    
}

const paul = new Sensei("paul")
paul.showStats()
paul.speakWisdom()
paul.showStats()