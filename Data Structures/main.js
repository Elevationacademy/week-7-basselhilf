class UniqueArray {
    constructor() {
        this.length = 0;
    }

    add(item) {
        for (let i = 0; i < this.length; i++) {
            if (item == this[i]) {
                return
            }
        }
        this[this.length++] = item
    }

    showAll() {
        for (let i = 0; i < this.length; i++) {
            console.log(this[i])
        }
    }

    exists(item) {
        for (let i = 0; i < this.length; i++) {
            if (item == this[i]) {
                console.log(true)
            }
            else console.log(false)
        }
    }

    get(index) {
        for (let i = 0; i < this.length; i++) {
            if (i == index) {
                return this[index]
            }
        }
        return -1
    }
}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"