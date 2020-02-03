module.exports = [
    {
        id: 9000,
        name: "Air Filtering Unit"
    },
    {
        id: 9001,
        name: "Bitcoin Farm (Level 1)",
        next: [9002],
    },
    {
        id: 9002,
        name: "Bitcoin Farm (Level 2)",
        next: [9003],
    },
    {
        id: 9003,
        name: "Bitcoin Farm (Level 3)",
        next: [],
    },
    {
        id: 9004,
        name: "Booze Generator",
        next: [],
    },
    {
        id: 9005,
        name: "Generator (Level 1)",
        next: [9006, 9012, 9024],
    },
    {
        id: 9006,
        name: "Generator (Level 2)",
        next: [9007, 9010, 9012, 9026, 9028, 9042],
    },
    {
        id: 9007,
        name: "Generator (Level 3)",
        next: [9000, 9002, 9016, 9029, 9035, 9039, 9045],
    },
    {
        id: 9008,
        name: "Heating (Level 1)",
        next: [9009],
    },
    {
        id: 9009,
        name: "Heating (Level 2)",
        next: [9010, 9028, 9037],
    },
    {
        id: 9010,
        name: "Heating (Level 3)",
        next: [9029, 9039, 9045],
    },
    {
        id: 9011,
        name: "Illumination (Level 1)",
        next: [9012],
    },
    {
        id: 9012,
        name: "Illumination (Level 2)",
        next: [9013, 9034, 9047],
    },
    {
        id: 9013,
        name: "Illumination (Level 3)",
        next: [9033],
    },
    {
        id: 9014,
        name: "Intelligence Center (Level 1)",
        next: [9015],
    },
    {
        id: 9015,
        name: "Intelligence Center (Level 2)",
        next: [9016, 9002, 9030],
    },
    {
        id: 9016,
        name: "Intelligence Center (Level 3)",
        next: [9039],
    },
    {
        id: 9017,
        name: "Lavatory (Level 1)",
        next: [9018],
    },
    {
        id: 9018,
        name: "Lavatory (Level 2)",
        next: [9019, 9025],
    },
    {
        id: 9019,
        name: "Lavatory (Level 3)",
        next: [9026],
    },
    {
        id: 9020,
        name: "Library",
        next: [],
    },
    {
        id: 9021,
        name: "Medstation (Level 1)",
        next: [9022],
    },
    {
        id: 9022,
        name: "Medstation (Level 2)",
        next: [9023],
    },
    {
        id: 9023,
        name: "Medstation (Level 3)",
        next: [9015],
    },
    {
        id: 9024,
        name: "Nutrition Unit (Level 1)",
        next: [9025],
    },
    {
        id: 9025,
        name: "Nutrition Unit (Level 2)",
        next: [9026],
    },
    {
        id: 9026,
        name: "Nutrition Unit (Level 3)",
        next: [9004, 9015],
    },
    {
        id: 9027,
        name: "Rest Space (Level 1)",
        next: [9028],
    },
    {
        id: 9028,
        name: "Rest Space (Level 2)",
        next: [9029],
    },
    {
        id: 9029,
        name: "Rest Space (Level 3)",
        next: [9020],
    },
    {
        id: 9030,
        name: "Scav Case",
        next: [],
    },
    {
        id: 9031,
        name: "Security (Level 1)",
        next: [9032],
    },
    {
        id: 9032,
        name: "Security (Level 2)",
        next: [9033, 9006, 9014],
    },
    {
        id: 9033,
        name: "Security (Level 3)",
        next: [9007, 9015],
    },
    {
        id: 9034,
        name: "Shooting Range",
        next: [],
    },
    {
        id: 9035,
        name: "Solar Power",
        next: [9003],
    },
    {
        id: 9036,
        name: "Stash (Level 1)",
        next: [9037],
    },
    {
        id: 9037,
        name: "Stash (Level 2)",
        next: [9038, 9026, 9048],
    },
    {
        id: 9038,
        name: "Stash (Level 3)",
        next: [9039],
    },
    {
        id: 9039,
        name: "Stash (Level 4)",
        next: [],
    },
    {
        id: 9040,
        name: "Vents (Level 1)",
        next: [9041],
    },
    {
        id: 9041,
        name: "Vents (Level 2)",
        next: [9042, 9006, 9014, 9037],
    },
    {
        id: 9042,
        name: "Vents (Level 3)",
        next: [9000, 9007],
    },
    {
        id: 9043,
        name: "Water Collector (Level 1)",
        next: [9044, 9018],
    },
    {
        id: 9044,
        name: "Water Collector (Level 2)",
        next: [9045, 9019],
    },
    {
        id: 9045,
        name: "Water Collector (Level 3)",
        next: [9003, 9004],
    },
    {
        id: 9046,
        name: "Workbench (Level 1)",
        next: [9047],
    },
    {
        id: 9047,
        name: "Workbench (Level 2)",
        next: [9048, 9010, 9044],
    },
    {
        id: 9048,
        name: "Workbench (Level 3)",
        next: [9035, 9039],
    },
]