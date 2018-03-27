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
            this.checkLength()

        } else if (this.position == 'bottom') {
            document.getElementsByTagName('div')[1].setAttribute("id", "bot");
            this.checkLength()
        }
    }
    // check position and remove bar
    checkLength() {
        const containerElem = document.getElementsByClassName('container');
        if(containerElem.length > 1) {
            containerElem[1].remove();
        }
    }

    messages() {
        console.log(this.message)
    }
    // create bar
    bar() {
        const container = document.createElement('div');
        container.setAttribute('class', 'container');

        document.body.appendChild(container);
        this.checkPosition()
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

const btn1 = document.getElementById('btn1');
    const myBar = new MWPjs({
        message: 'msg here - Beautiful and simple website widgets',
        close: function(){ alert('closed') },
        clickOk: function(){ alert('clickok') },
        position: ''
    });



btn1.addEventListener("click", () => myBar.topPosition());
btn2.addEventListener("click", () => myBar.bottomPosition());
