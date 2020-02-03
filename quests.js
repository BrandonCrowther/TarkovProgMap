const crypto = require("crypto");


var links = [] //init later
var prapor = require('./prapor');
var therapist = require('./therapist');
var hideout = require('./hideout');



var structure = hideout;

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
                classes: ["red"],
                next: e.id
            })
        })
    }
}

structure.forEach(linkReqs)
structure.forEach(linkNext)



links.forEach(e => structure.push(e))
//format data properly
structure = structure.map(function(e){ return {data: e, classes: "prapor"}})

module.exports = structure