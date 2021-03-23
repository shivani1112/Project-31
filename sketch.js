const Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// Main Variables(Engine, World)
var engine;
var world;

var totalDrops = 100;
var drops = [];
var umbrella;
var rainSound;
var thunderbolt, thunderImage1, thunderImage2, thunderImage3, thunderImage4;
var thunderFrame;
var thunderGroup;

function preload(){
    
    um_image = loadImage("images/Walking Frame/walking_1.png");

    rainSound = loadSound("rain.mp3");

    thunderImage1 = loadImage("images/thunderbolt/1.png");

    thunderImage2 = loadImage("images/thunderbolt/2.png");

    thunderImage3 = loadImage("images/thunderbolt/3.png");

    thunderImage4 = loadImage("images/thunderbolt/4.png");

}

function setup(){
   
    var canvas = createCanvas(300, 600);

    rainSound.loop();

    engine = Engine.create();
    world = engine.world;

    for(var i = 0; i < totalDrops; i++){

        drops.push(new Drops(random(0, 400), random(-200, 800), 5));

    }

    umbrella = new Umbrella(150, 510, 210);

    thunderGroup = createGroup();

}

function draw(){
    
    background("black");

    Engine.update(engine);

    thunder();

    if(thunderFrame + 10 === frameCount && thunder){

        thunderGroup.destroyEach();

    }

    for(var i = 0; i < totalDrops; i++){

        drops[i].display();
        drops[i].update();

    }

    umbrella.display();

    drawSprites();

}   

function thunder() {
    
    var rand = Math.round(random(1, 4));

    if(frameCount % 80 === 0){

        thunderbolt = createSprite(random(0, 300), random(20, 50), 10, 10);

        thunderFrame = frameCount;

        switch(rand){

            case 1: thunderbolt.addImage(thunderImage1);
                break;

            case 2: thunderbolt.addImage(thunderImage2);
                break;
            
            case 3: thunderbolt.addImage(thunderImage3);
                break;

            case 4: thunderbolt.addImage(thunderImage4);
                break;
            default: break;

        }

        thunderbolt.scale = random(0.3, 0.6);

        thunderGroup.add(thunderbolt);

    }
    
}