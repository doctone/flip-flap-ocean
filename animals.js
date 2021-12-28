export default class Book {
    constructor(){
        this.animals = {
            'crab' : {
                'name-upper' : 'cr',
                'name-lower' : 'ab',
                'upper-img' : 'flip-flap-imgs/crab-top.png',
                'lower-img' : 'flip-flap-imgs/crab-bottom.png',
                'background-hex' : '#88D213'
            },
            'seal' : {
                'name-upper' : 's',
                'name-lower' : 'eal',
                'upper-img' : 'flip-flap-imgs/seal-top.png',
                'lower-img' : 'flip-flap-imgs/seal-bottom.png',
                'background-hex' : '#01C4ED'
            },
            'shark' : {
                'name-upper' : 'sh',
                'name-lower' : 'ark',
                'upper-img' : 'flip-flap-imgs/shark-top.png',
                'lower-img' : 'flip-flap-imgs/shark-bottom.png',
                'background-hex' : '#01C4ED'
            },
            'octopus' : {
                'name-upper' : 'octop',
                'name-lower' : 'us',
                'upper-img' : 'flip-flap-imgs/octo-top.png',
                'lower-img' : 'flip-flap-imgs/octo-bottom.png',
                'background-hex' : '#8B01C9'
            },
            'tang' : {
                'name-upper' : 'tan',
                'name-lower' : 'g',
                'upper-img' : 'flip-flap-imgs/tang-top.png',
                'lower-img' : 'flip-flap-imgs/tang-bottom.png',
                'background-hex' : '#bb9c48'
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
            this.i == animals.length-1 ? this.i = 0 : this.i++
        });
        
        this.bottomContainer.addEventListener('click', (event) => {
            const animals = Object.keys(this.animals);
            event.target.src = this.animals[animals[this.j]]['lower-img'];
            this.changeName(this.animals[animals[this.j]],'.name-bot', 'name-lower');
            this.j == animals.length-1 ? this.j = 0 : this.j++
        });
    }
        //change names
    changeName(animal, area, rename){
        const name = document.querySelector(area);
        name.innerHTML = animal[rename];
        name.style.background = animal['background-hex'];
    }

}