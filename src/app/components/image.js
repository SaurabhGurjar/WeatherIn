export default class Image {
    constructor(src="", alt="") {
        this.src = src;
        this.alt = alt;
        this.html = document.createElement('img');
        this.html.src = this.src;
        this.html.alt = this.alt;
        this.id = '';
    }

    addSrc(src) {
        this.html.src = src;
    }

    addAlt(alt) {
        this.html.alt = alt;
    }

    addClass(cls) {
        this.html.classList.add(...cls);
    }

    removeClass(cls) {
        this.html.remove(cls);
    }
    
    getClasses() {
        return this.html.classList;
    }
    
    getId() {
        return this.html.id;
    }

    setId(id) {
        this.html.id = id;
    }


}