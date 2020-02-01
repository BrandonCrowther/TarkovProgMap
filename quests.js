var structure = [
    { 
        id: 1, 
        name: "Shaking Up Teller", 
        next: 2
    },
    { 
        id: 2, 
        name: "Shaking Up  2", 
        next: 3
    },
    { 
        id: 3, 
        name: "Shaking Up Teller 3", 
    },
]

var links = []

structure.forEach(e => {
    if(e.next){
        if(Array.isArray(e.next))
            e.next.forEach(function(f){
                links.push({source: e.id, target: f})})
        else
            links.push({source: e.id, target: e.next, name: "dont show"})

        console.log(links[0])

    }
})

links.forEach(e => structure.push(e))
structure = structure.map(function(e){ return {data: e}})


module.exports = structure




// {
//     data: { 
//         id: 'AAAA', 
//         name: "Shaking Up Teller", 
//         next: 'b'
//     }
// },
// {
//     data: { id: 'b' }
// },
// {
//     data: {source: 'AAAA', target: 'b'}
// }