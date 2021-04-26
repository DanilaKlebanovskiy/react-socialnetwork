import React from "react";

import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {create} from "react-test-renderer";

describe("Profile status component", () => {
    test("status from props should be in the state (testing the wrong way!)", () => {
        const component = create(<ProfileStatus status="it-kamas"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("it-kamas");
    });
});

/*
describe("Profile status component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status = "it-kamas" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("it-kamas");
    });
});*/
