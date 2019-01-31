const buttonsProto = {
    registerEvent (type, callback) {
        this.events.push({
            id: Date.now(),
            type: type,
            callback: callback
        });
    },
    getEvents () {
        return this.events
    },
    clearEvents () {
        this.events = [];
    },
    getEvenstByType (type) {
        return this.events.filter(function (event) {
            return event.type === type;
        })
    }
};

function createButton (label, width, height) {
    let obj = Object.create(buttonsProto);
    obj.label = label;
    obj.width = width;
    obj.height = height;
    obj.events = [];
    return obj;
}

let btn1 = createButton();
btn1.registerEvent('click', ()=>{});
console.log(btn1.getEvenstByType('click'));