export default class Book {
    constructor(){
        this.animals = {
            'crab' : {
                'name-upper' : 'cr',
                'name-lower' : 'ab',
                'upper-img' : './flip-flap-imgs/crab-top.png',
                'lower-img' : './flip-flap-imgs/crab-bottom.png',
                'background-hex' : '#88D213',
                'poem' : {
                    'upper' : "My claws are clicky-clacky and I use them when I fight. My eyes are up on little stalks to give me better sight",
                    'lower' : "I fir through narrow spaces as my body is quite flat. And as for scuttling sideways, well - I am the best at that!"
                }
            },
            'seal' : {
                'name-upper' : 's',
                'name-lower' : 'eal',
                'upper-img' : './flip-flap-imgs/seal-top.png',
                'lower-img' : './flip-flap-imgs/seal-bottom.png',
                'background-hex' : '#01C4ED',
                'poem' : {
                    'upper' : "I'm noisy when I want my food, you'll hear me far and wide. I look quite like a seal but I have ear flaps on each side",
                    'lower' : 'My flippers are so strong that I can move about on land. I hop along the rocky shores and lie upon the sand.'
                }
            },
            'shark' : {
                'name-upper' : 'sh',
                'name-lower' : 'ark',
                'upper-img' : './flip-flap-imgs/shark-top.png',
                'lower-img' : './flip-flap-imgs/shark-bottom.png',
                'background-hex' : '#01C4ED',
                'poem' : {
                    'upper' : "You'll see my fin from far away as it stands up so tall. My jaws are full of pointy teeth, I've hundreds all in all!",
                    'lower' : "I must keep swimming all the time and if I stop I'l sink. Just you try swimming on and on, it's harder thank you think!"
                }
            },
            'octopus' : {
                'name-upper' : 'octop',
                'name-lower' : 'us',
                'upper-img' : './flip-flap-imgs/octo-top.png',
                'lower-img' : './flip-flap-imgs/octo-bottom.png',
                'background-hex' : '#8B01C9',
                'poem' : {
                    'upper' : "My eyesight is fantastic and my head is rather wide. I change my colour if I'm scared and then I'll try to hide ",
                    'lower' : "I've got eight slippery tentacles with suckers in two rows. They help me find the way and if I lose one - it regrows!"
                }
            },
            'tang' : {
                'name-upper' : 't',
                'name-lower' : 'ang',
                'upper-img' : './flip-flap-imgs/tang-top.png',
                'lower-img' : './flip-flap-imgs/tang-bottom.png',
                'background-hex' : '#bb9c48',
                'poem' : {
                    'upper' : "I'm flat just like a pancake and my body's fairly round. I live in a small group or pair - we hardly make a sound!",
                    'lower' : "When I lay eggs I like to change, from dark to quite pale blue. I mainly munch on plankton, but I do like algae too."
                }
            },
            'lobster' : {
                'name-upper' : 'lobst',
                'name-lower' : 'er',
                'upper-img' : './flip-flap-imgs/lob-top.png',
                'lower-img' : './flip-flap-imgs/lobster-bottom.png',
                'background-hex' : '#f2437b',
                'poem' : {
                    'upper' : "I like to snap my pincers. Please don't think I'm being rude! My sense of smell is excellent - that's how I find my food!",
                    'lower' : "I use my long and spindly legs to cross the sandy bed. And sometimes I propel myself the other way instead."
                }
            },
            'whale' : {
                    'name-upper' : 'wh',
                    'name-lower' : 'ale',
                    'upper-img' : './flip-flap-imgs/whale-top.png',
                    'lower-img' : './flip-flap-imgs/whale-bottom.png',
                    'background-hex' : '#e7cc00',
                    'poem' : {
                        'upper' : "I am the biggest animal that you will ever see. I'm taller than a building and as heavy as can be.",
                        'lower' : "I can't breathe underwater so I surface to breathe air. Most fish will swim away from me - I give them all a scare!"
                    }
            },
            'dolphin' : {
                'name-upper' : 'dolph',
                'name-lower' : 'in',
                'upper-img' : './flip-flap-imgs/dolphin-top.png',
                'lower-img' : './flip-flap-imgs/dolphin-bottom.png',
                'background-hex' : '#ff4400',
                'poem' : {
                    'upper' : "My beak and tail are powerful, but don't be scared of me! I click and whistle as I swim and have fun in the sea.",
                    'lower' : "I love to dive and race my friends, I'm never, EVER slow. My fins and flippers help me control which way I go."
                }
            },
            'jellyfish' : {
                'name-upper' : 'jell',
                'name-lower' : 'yfish',
                'upper-img' : './flip-flap-imgs/jelly-top.png',
                'lower-img' : './flip-flap-imgs/jelly-bottom.png',
                'background-hex' : '#d6d14e',
                'poem' : {
                    'upper' : "I'm mostly made of water so I wobble to and fro. And deep beneathe the ocean I can make my body glow.",
                    'lower' : "The current moves me gracefully, I float past everything. My tentacles are very long - don't touch them or they'll sting!"
                }
            },
            'turtle' : {
                'name-upper' : 't',
                'name-lower' : 'urtle',
                'upper-img' : './flip-flap-imgs/turtle-top.png',
                'lower-img' : './flip-flap-imgs/turtle-bottom.png',
                'background-hex' : '#9fc5c2',
                'poem' : {
                    'upper' : "My sturdy shell protects me from the dangers in the sea. It's hard and wide which means that no one else will munch on me!",
                    'lower' : "My flippers are like paddles and they help me to swim fast. But if there was race on land I'm slow, so I'd come last."
                }
            },
            'squid' : {
                'name-upper' : 'squ',
                'name-lower' : 'id',
                'upper-img' : './flip-flap-imgs/squid-top.png',
                'lower-img' : './flip-flap-imgs/squid-bottom.png',
                'background-hex' : '#00a35f',
                'poem' : {
                    'upper' : "My eyes are big and so' my brain, in fact, I'm very smart. My beak is sharp and pointy and I've got three tiny hearts!",
                    'lower' : "I've also got two tentacles and arms with suckers, too. And when I'm scared I'll squirt out ink - it's think and blackish-blue"
                }
            }
        }

        // incrementors for cycling through images (top & bottom)
        this.i=0;
        this.j=0;
        
        // access container divs
        this.topContainer = document.querySelector('.img-top');
        this.bottomContainer = document.querySelector('.img-bottom');
        
        //change images
        this.topContainer.addEventListener('click', (event) => {
            const animals = Object.keys(this.animals);
            event.target.src = this.animals[animals[this.i]]['upper-img'];
            this.changeName(this.animals[animals[this.i]],'.name-top', 'name-upper');
            this.changePoem(this.animals[animals[this.i]], '.p-top', 'upper')
            this.i == animals.length-1 ? this.i = 0 : this.i++
        });
        
        this.bottomContainer.addEventListener('click', (event) => {
            const animals = Object.keys(this.animals);
            event.target.src = this.animals[animals[this.j]]['lower-img'];
            this.changeName(this.animals[animals[this.j]],'.name-bot', 'name-lower');
            this.changePoem(this.animals[animals[this.j]], '.p-bot', 'lower')
            this.j == animals.length-1 ? this.j = 0 : this.j++
        });
    }
        //change names
    changeName(animal, area, rename){
        const name = document.querySelector(area);
        name.innerHTML = animal[rename];
        name.style.background = animal['background-hex'];
    }

    changePoem(animal, area, half){
        const container = document.querySelector(area);
        container.innerHTML = animal['poem'][half]

    }

}