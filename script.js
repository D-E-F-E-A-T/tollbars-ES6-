class MWPjs {
    constructor(date) {
        this.message = date.message;
        this.close = date.close;
        this.clickOk = date.clickOk;
        this.position = date.position;
    }

    messages() {
        console.log(this.message)
    }

    test() {
        this.messages();
        const container = document.createElement('div');
        container.setAttribute('class', 'container');
        document.body.appendChild(container);
    }
}

const btn1 = document.getElementById('btn1');

    const myBar = new MWPjs({
        message: 'msg here - Beautiful and simple website widgets',
        close: function(){ alert('closed') },
        clickOk: function(){ alert('clickok') },
        position: 'top'
    });



btn1.addEventListener("click", () => myBar.test());
