import * as React from "react";
import * as ReactDOM from "react-dom";

import {render, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "rescueshelter/components/app";

let appContent;

beforeAll(() => {
    var title = document.createElement("title");
    document.head.appendChild(title);

    var og = document.createElement("meta");
    og.setAttribute("property", "og:description");
    document.head.appendChild(og);

    og = document.createElement("meta");
    og.setAttribute("property", "og:determiner");
    document.head.appendChild(og);

    og = document.createElement("meta");
    og.setAttribute("property", "og:locale");
    document.head.appendChild(og);

    og = document.createElement("meta");
    og.setAttribute("property", "og:site_name");
    document.head.appendChild(og);

    og = document.createElement("meta");
    og.setAttribute("property", "og:title");
    document.head.appendChild(og);

    og = document.createElement("meta");
    og.setAttribute("property", "og:url");
    document.head.appendChild(og);

    const {container} = render(<App/>);
    appContent = container;
})

afterAll(() => {
    cleanup();
    appContent = null;
});

it('<App/> test https://ogp.me/ meta tag property', () => {

    var meta = document.querySelector("meta[property='og:description']") as HTMLMetaElement;
    expect(meta.content).toBe('');

    meta = document.querySelector("meta[property='og:determiner']") as HTMLMetaElement;
    expect(meta.content).toBe('');
    
    meta = document.querySelector("meta[property='og:locale']") as HTMLMetaElement;
    expect(meta.content).toBe('en_US');

    meta = document.querySelector("meta[property='og:site_name']") as HTMLMetaElement;
    expect(meta.content).toBe('Rescue Shelter');

    meta = document.querySelector("meta[property='og:title']") as HTMLMetaElement;
    expect(meta.content).toBe('Rescue Shelter: Single Page Application, SPA');

    meta = document.querySelector("meta[property='og:url']") as HTMLMetaElement;
    expect(meta.content).toBe('http://localhost:3301');    
    
});

it('<App/> test navigation links', () => {
    var link = document.querySelector("div[id='home'] a") as HTMLAnchorElement;
    expect(link.href).toBe('/');
    expect(link.innerText).toBe('Home');

    link = document.querySelector("div[id='animals'] a") as HTMLAnchorElement;
    expect(link.href).toBe('/animas');
    expect(link.innerText).toBe('Animals');

    link = document.querySelector("div[id='sponsors'] a") as HTMLAnchorElement;
    expect(link.href).toBe('/sponsors');
    expect(link.innerText).toBe('Sponsors');
});