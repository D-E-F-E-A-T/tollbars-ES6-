class MWPjs {
    constructor(date) {
        this.message = date.message;
        this.close = date.close;
        this.clickOk = date.clickOk;
        this.position = date.position;
    }

    checkPosition() {
        const p = document.getElementsByTagName('p');
        const clickElem = document.getElementById('iDcloseSpan');
        if(this.position == 'top') {
            document.getElementsByTagName('div')[1].setAttribute("id", "top");
            this.checkLength();

        } else if (this.position == 'bottom') {
            document.getElementsByTagName('div')[1].setAttribute("id", "bot");
            this.checkLength();

            if (p.length != 0) { // if p(message) dont exist, do not set innerHTML
                document.getElementsByTagName('p')[0].innerHTML = '';
            }
        }
    }
    // check position and remove bar, we dont wanna create more than one
    checkLength() {
        const containerElem = document.getElementsByClassName('container');
        if(containerElem.length > 1) {
            containerElem[1].remove();
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
        this.exitClick();
        this.onclick();
    }

    messages() {
        const messageDiv = document.createElement('p'); //create message with elements
        messageDiv.setAttribute('class', 'message');
        document.getElementById('top').appendChild(messageDiv)
        const p = document.getElementsByTagName('p');
        if (this.position == 'top') {
            document.getElementsByTagName('p')[0].innerHTML = this.message;
            if(p.length > 1) { // remove message from bottom bar
                p[1].remove();
            }
        }
    }

    setAnchorText() {
        const anchor = document.getElementsByClassName('ancher')[0];
        anchor.textContent = 'take your survey';
        anchor.onclick = () => this.clickOk();
    }

    exitClick() {
        const spanLength = document.getElementsByTagName('span');
        const closeSpan = document.createElement('span');
        closeSpan.setAttribute('class', 'closeSpan');
        closeSpan.setAttribute('id', 'iDcloseSpan');
        document.getElementsByClassName('container')[0].appendChild(closeSpan);

        if(spanLength.length > 1) {
            spanLength[1].remove(); // stop creating span's
        }
        closeSpan.innerHTML = "X"
    }

    onclick() {
        const idSpan = document.getElementById('iDcloseSpan');
        idSpan.onclick = () => {
            this.close();
            document.getElementsByClassName('container')[0].remove();
        }
    }

    topPosition() {
        this.position = 'top';
        this.bar();
        this.messages();
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
