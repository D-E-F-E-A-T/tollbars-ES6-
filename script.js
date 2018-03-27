class MWPjs {
    constructor(date) {
        this.message = date.message;
        this.close = date.close;
        this.clickOk = date.clickOk;
        this.position = date.position;
    }

    checkPosition() {
        if(this.position == 'top') {
            document.getElementById('bars').style.top = '0';
        } else if (this.position == 'bottom') {
            document.getElementById('bars').style.bottom = '0';
        }
        console.log('test ?')
    }

    messages() {
        console.log(this.message)
    }

    bar() {
        const container = document.createElement('div');
        container.setAttribute('class', 'container');
        container.setAttribute('id', 'bars');
        document.body.appendChild(container);
        this.checkPosition()
    }

    topPosition() {

    }

    bottomPosition() {

    }

}

const btn1 = document.getElementById('btn1');
    const myBar = new MWPjs({
        message: 'msg here - Beautiful and simple website widgets',
        close: function(){ alert('closed') },
        clickOk: function(){ alert('clickok') },
        position: 'top'
    });



btn1.addEventListener("click", () => myBar.bar());
