import { configure, render } from '@testing-library/react';
import * as React from "react";
import renderer from "react-test-renderer";

configure({ testIdAttribute: 'App' });

test('ts-jest initial configuration', () => {
    expect(true).toBeTruthy();
})
