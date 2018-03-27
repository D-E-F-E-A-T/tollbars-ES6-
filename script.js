class MWPjs {
    constructor(date) {
        this.message = date.message;
        this.close = date.close;
        this.clickOk = date.clickOk;
        this.position = date.position;
    }
    // check position
    checkPosition() {
        if(this.position == 'top') {
            document.getElementsByTagName('div')[1].setAttribute("id", "top");
            this.checkLength();


        } else if (this.position == 'bottom') {
            document.getElementsByTagName('div')[1].setAttribute("id", "bot");
            this.checkLength()
        }
    }
    // check position and remove bar
    checkLength() {
        const containerElem = document.getElementsByClassName('container');
        console.log(containerElem)
        if(containerElem.length > 1) {
            containerElem[1].remove();
        }
    }

    messages() {
        const messageDiv = document.createElement('p');
        messageDiv.setAttribute('class', 'message');
        document.getElementById('top').appendChild(messageDiv)
        if (this.position == 'top') {
            document.getElementsByClassName('message').innerHTML = this.message;
        }
    }
    // create main bar
    bar() {
        const container = document.createElement('div');
        const ancher = document.createElement('a');
        container.setAttribute('class', 'container');
        ancher.setAttribute('class', 'ancher');
        container.appendChild(ancher);
        document.body.appendChild(container);
        this.checkPosition();
        this.setAnchorText();
    }

    setAnchorText() {
        console.log(document.getElementsByClassName('ancher'))
        const anchor = document.getElementsByClassName('ancher')[0];
        anchor.textContent = 'take your survey';
        anchor.onclick = () => this.clickOk();
    }

    topPosition() {
        this.position = 'top';
        this.bar();
    }

    bottomPosition() {
        this.position = 'bottom';
        this.bar();
    }

}

const myBar = new MWPjs({
    message: 'msg here - Beautiful and simple website widgets',
    close: function(){ alert('closed') },
    clickOk: function(){ alert('clickok') },
    position: ''
});

btn1.addEventListener("click", () => myBar.topPosition());
btn2.addEventListener("click", () => myBar.bottomPosition());
