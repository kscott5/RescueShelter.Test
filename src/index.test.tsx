import { configure, render } from '@testing-library/react';
import * as React from "react";
import renderer from "react-test-renderer";
import NavLinks from "../rescueshelter/src/components/shared/navlinks";

configure({ testIdAttribute: 'App' });

test('ts-jest initial configuration', () => {
    expect(true).toBeTruthy();
})