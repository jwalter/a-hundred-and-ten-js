class Location {
    constructor(name, nearlocations, type, vehicles) {
        this.name = name;
        this.nearlocations = nearlocations;
        this.type = type;
        this.vehicles = vehicles;
    }
}
const Gatolia_Hill = new Location({
    name: "Gatolia Hill",
    nearlocations: [
        "Sofia_Town",
        "Molos_Airfield",
        "Molos_Bay_South",
        "Molos_Hill",
        "Limnichori"
    ],
    type: "Outpost",
    vehicles: []
});
const Nidasos = new Location({
    name: "Nidasos",
    nearlocations: [
        "Nidasos_Hill",
        "Hotel",
        "Sofia_Town",
        "Agios_Andreas"
    ],
    type: "Outpost",
    vehicles: []
});
const Molos_Town = new Location({
    name: "Molos Town",
    nearlocations: [
        "Molos_Hill",
        "Molos_Airfield",
        "Molos_Bay_South",
        "Cap_Strigla"
    ],
    type: "Outpost",
    vehicles : []
});
const Cap_Strigla = new Location({
    name: "Cap Strigla",
    nearlocations: [
        "Molos_Hill",
        "Molos_Airfield",
        "Molos_Bay_South",
        "Molos_Town"
    ],
    type: "Outpost",
    vehicles : []
});
const Molos_Airfield = new Location({
    name: "Molos Airfield",
    nearlocations : [
        "Molos_Hill",
        "Molos_Bay_South",
        "Molos_Town",
        "Cap_Strigla"
    ]
});
const Molos_Bay_South {
    name: "Molos Bay South";
    nearlocations[]: {
        "Molos_Hill",
        "Molos_Airfield",
        "Molos_Town",
        "Cap_Strigla"
    };
    type: "Outpost";
    vehicles[]: {};
};
const Molos_Hill {
    name: "Molos Hill";
    nearlocations[]: {
        "Molos_Airfield",
        "Molos_Bay_South",
        "Molos_Town",
        "Cap_Strigla",
        "Limnichori"

    };
    type: "Outpost";
    vehicles[]: {};
};
const Limnichori {
    name: "Limnichori";
    nearlocations[]: {
        "Molos_Airfield",
        "Molos_Bay_South",
        "Molos_Town",
        "Cap_Strigla"
    };
    type: "Outpost";
    vehicles[]: {};
};
const Agios_Andreas {
    name: "Agios Andreas";
    nearlocations[]: {
        "Limnichori",
        "Nidasos",
        "Nidasos_Hill",
        "Sofia_Town"
    };
    type: "Outpost";
    vehicles[]: {};
};
const Nidasos_Hill {
        name: "Nidasos Hill";
        nearlocations[]: {
            "Limnichori",
            "Nidasos",
            "Sofia_Town",
            "Hotel"
        };
        type: "Outpost";
        vehicles[]: {};
