module.exports = [
    {
        id: 1, 
        name: "Debut", 
        // requirements: {
        //     "MP-133 Shotgun": 3,
        //     "Test": 1
        // },
        next: 2,
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
        next: 5
    },
    { 
        id: 5, 
        name: "Bad rep evidence", 
        next: 6
    },
    { 
        id: 6, 
        name: "Ice cream cones", 
        next: 7
    },
    { 
        id: 7, 
        name: "Postman Pat - Part 1", 
        next: 8
    },
    { 
        id: 8, 
        name: "Ice cream cones", 
        next: 9
    },
    { 
        id: 9, 
        name: "Shaking up teller", 
        next: [10,11,12]
    },
    { 
        id: 10, 
        name: "The Punisher - Part 1", 
        next: 13
    },
    { 
        id: 11, 
        name: "Perfect mediator",

    },
    { 
        id: 12, 
        name: "Grenadier",
        next: [18,19]
    },
    { 
        id: 13, 
        name: "The Punisher - Part 2", 
        next: 14,
    },
    { 
        id: 14, 
        name: "The Punisher - Part 3", 
        next: 15,
    },
    { 
        id: 15, 
        name: "The Punisher - Part 4", 
        next: 16,
    },
    { 
        id: 16, 
        name: "The Punisher - Part 5", 
        next: 17,
    },
    { 
        id: 17, 
        name: "The Punisher - Part 6", 
    },
    
    { 
        id: 18, 
        name: "Insomnia", 
    },
    { 
        id: 19, 
        name: "Test drive - Part 1",
    },


    //

    // {
    //     id: 20,
    //     name: "Polikhim hobo",
    //     next: 21
    // },
    // {
    //     id: 21,
    //     name: "Regulated Materials"
    // }
]