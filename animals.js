export default class Book {
    constructor(){
        this.animals = {
            'crab' : {
                'name-upper' : 'cr',
                'name-lower' : 'ab',
                'upper-img' : 'flip-flap-imgs/crab-top.png',
                'lower-img' : 'flip-flap-imgs/crab-bottom.png',
                'background-hex' : '#88D213',
                'poem' : {
                    'upper' : "My claws are clicky-clacky and I use them when I fight. My eyes are up on little stalks to give me better sight",
                    'lower' : "I fir through narrow spaces as my body is quite flat. And as for scuttling sideways, well - I am the best at that!"
                }
            },
            'seal' : {
                'name-upper' : 's',
                'name-lower' : 'eal',
                'upper-img' : 'flip-flap-imgs/seal-top.png',
                'lower-img' : 'flip-flap-imgs/seal-bottom.png',
                'background-hex' : '#01C4ED',
                'poem' : {
                    'upper' : "I'm noisy when I want my food, you'll hear me far and wide. I look quite like a seal but I have ear flaps on each side",
                    'lower' : 'My flippers are so strong that I can move about on land. I hop along the rocky shores and lie upon the sand.'
                }
            },
            'shark' : {
                'name-upper' : 'sh',
                'name-lower' : 'ark',
                'upper-img' : 'flip-flap-imgs/shark-top.png',
                'lower-img' : 'flip-flap-imgs/shark-bottom.png',
                'background-hex' : '#01C4ED',
                'poem' : {
                    'upper' : "You'll see my fin from far away as it stands up so tall. My jaws are full of pointy teeth, I've hundreds all in all!",
                    'lower' : "I must keep swimming all the time and if I stop I'l sink. Just you try swimming on and on, it's harder thank you think!"
                }
            },
            'octopus' : {
                'name-upper' : 'octop',
                'name-lower' : 'us',
                'upper-img' : 'flip-flap-imgs/octo-top.png',
                'lower-img' : 'flip-flap-imgs/octo-bottom.png',
                'background-hex' : '#8B01C9',
                'poem' : {
                    'upper' : "My eyesight is fantastic and my head is rather wide. I change my colour if I'm scared and then I'll try to hide ",
                    'lower' : "I've got eight slippery tentacles with suckers in two rows. They help me find the way and if I lose one - it regrows!"
                }
            },
            'tang' : {
                'name-upper' : 't',
                'name-lower' : 'ang',
                'upper-img' : 'flip-flap-imgs/tang-top.png',
                'lower-img' : 'flip-flap-imgs/tang-bottom.png',
                'background-hex' : '#bb9c48',
                'poem' : {
                    'upper' : "I'm flat just like a pancake and my body's fairly round. I live in a small group or pair - we hardly make a sound!",
                    'lower' : "When I lay eggs I like to change, from dark to quite pale blue. I mainly munch on plankton, but I do like algae too."
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