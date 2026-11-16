// Colleague Interface
class Airplane {
    requestTakeoff() {}
    requestLanding() {}
    notifyAirTrafficControl(message) {}
}

// Concrete Colleague
class CommercialAirplane extends Airplane {
    constructor(mediator) {
        super();
        this.mediator = mediator;
    }

    requestTakeoff() {
        this.mediator.requestTakeoff(this);
    }

    requestLanding() {
        this.mediator.requestLanding(this);
    }

    notifyAirTrafficControl(message) {
        console.log(`Commercial Airplane: ${message}`);
    }
}

// Mediator Interface
class AirTrafficControlTower {
    requestTakeoff(airplane) {}
    requestLanding(airplane) {}
}

// Concrete Mediator
class AirportControlTower extends AirTrafficControlTower {
    requestTakeoff(airplane) {
        // Logic for coordinating takeoff
        airplane.notifyAirTrafficControl("Requesting takeoff clearance.");
    }

    requestLanding(airplane) {
        // Logic for coordinating landing
        airplane.notifyAirTrafficControl("Requesting landing clearance.");
    }
}

// Main function
(() => {
    // Instantiate the Mediator (Airport Control Tower)
    const controlTower = new AirportControlTower();

    // Instantiate Concrete Colleagues (Commercial Airplanes)
    const airplane1 = new CommercialAirplane(controlTower);
    const airplane2 = new CommercialAirplane(controlTower);

    // Set up the association between Concrete Colleagues and the Mediator
    airplane1.requestTakeoff();
    airplane2.requestLanding();

    // Output:
    // Commercial Airplane: Requesting takeoff clearance.
    // Commercial Airplane: Requesting landing clearance.
})();
