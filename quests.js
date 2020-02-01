const crypto = require("crypto");


var links = [] //init later
var structure = [
    // PRAPOR
    {
        id: 1, 
        name: "Debut", 
        requirements: {
            "MP-133 Shotgun": 3,
            "Test": 1
        },
        next: 2
    },
    { 
        id: 2, 
        name: "Checking", 
        next: [3,4]
    },
    { 
        id: 3, 
        name: "Shootout picnic", 
    },
    { 
        id: 4, 
        name: "Delivery from the past", 
    },
]



const linkNext = e => {
    if(e.next){
        if(Array.isArray(e.next))
            e.next.forEach(f => links.push({source: e.id, target: f}))
        else
            links.push({source: e.id, target: e.next})
    }
}

const linkReqs = e => {
    if(e.requirements){
        Object.keys(e.requirements).forEach(f => {
            structure.push({
                id: crypto.randomBytes(20).toString('hex'), 
                name: f + " - " + e.requirements[f], 
                next: e.id
            })
        })
    }
}

structure.forEach(linkReqs)
structure.forEach(linkNext)



links.forEach(e => structure.push(e))
//format data properly
structure = structure.map(function(e){ return {data: e}})

module.exports = structure