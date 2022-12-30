import { writable, get, derived } from "svelte/store";

export let renderedElementsStore = writable({});

export let cssStore = undefined
if (localStorage.getItem("cssStore")) {
    cssStore = writable(JSON.parse(localStorage.getItem("cssStore")))

} else {
    cssStore = writable({})
}

export let cssStringsStore = derived(cssStore, $cssStore => {
    let cssStringObject = {}
    for (const key in $cssStore) {
        cssStringObject[key] = Object.entries($cssStore[key]).reduce((acc, [cssProp, cssValue]) => {
            return acc + cssProp + ":" + cssValue + ";"
        }, "")
    }
    return cssStringObject;
})


export let controlsNode = writable();
// console.log(get(cssStringsStore))


// export let activeElementStore = writable({
//     Id: 0, type: ""
// });
export let siteEditMode = writable(false)
export let activeElementStore = writable();
export let selfClosingElements = ["input", "textarea", "br", "img"];
export let allElementTypes = ["section", "div", "input", "textarea", "br", "img"];
export let elementsArrayStore = writable([
    {
        Id: 1,
        type: "nav",
        text: "",
        order: 1,
        parent: "",
        level: 1,
    },

    {
        Id: 2,
        type: "div",
        text: "Logo",
        order: 1,
        parent: 1,
        level: 2,
    },

    {
        Id: 3,
        type: "div",
        text: "",
        order: 1,
        parent: 1,
        level: 2,
    },
    {
        Id: 4,
        type: "div",
        text: "Home",
        order: 1,
        parent: 3,
        level: 3,
    },
    {
        Id: 5,
        type: "div",
        text: "About",
        order: 2,
        parent: 3,
        level: 3,
    },

    {
        Id: 6,
        type: "main",
        text: "",
        order: 2,
        parent: "",
        level: 1,
    },

    {
        Id: 7,
        type: "div",
        text: "Content",
        order: 1,
        parent: 6,
        level: 2,
    },
    {
        Id: 8,
        type: "p",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, incidunt nulla. Dolores ut, officia cupiditate nesciunt tenetur repudiandae provident voluptatibus perferendis, ullam hic cumque. Officiis amet architecto temporibus officia commodi",
        order: 2,
        parent: 6,
        level: 2,
    },

])

export let elementsDataStore = writable({
    1: {
        Id: 1,
        type: "section",
        text: "section 1",
        css: {},
        order: 1,
        elementsData: {
            11: {
                Id: 11,
                type: "div",
                text: "Division 1",
                css: {},
                order: 1,
                elementsData: {},
            },
            12: {
                Id: 12,
                text: "Sample input text",
                type: "input",
                css: {},
                order: 2,
                elementsData: {},
            },
            13: {
                Id: 13,
                text: "sample textarea text",
                type: "textarea",
                css: {},
                order: 3,
                elementsData: {},
            },
        },
    },
    2: {
        Id: 2,
        type: "div",
        text: "section 1",
        css: {},
        order: 2,
        editMode: false,
        elementsData: {
            21: {
                Id: 21,
                text: "Dogs",
                type: "div",
                order: 1,
                css: {},
                elementsData: {
                    211: {
                        Id: 211,
                        type: "h1",
                        text: "Heading 211",
                        order: 1,
                        elementsData: {},
                    },
                    212: {
                        Id: 212,
                        type: "div",
                        text: "button 212",
                        css: {},
                        order: 2,
                        elementsData: {},
                    },
                    213: {
                        Id: 213,
                        text: "Div 213",
                        type: "div",
                        css: {},
                        order: 3,
                        elementsData: {
                            2131: {
                                Id: 2131,
                                text: "button 2131",
                                type: "button",
                                css: {},
                                order: 1,
                                elementsData: {},
                            },
                            2132: {
                                Id: 2132,
                                type: "div",
                                text: "blah 2132",
                                order: 2,
                                elementsData: {
                                    21321: {
                                        Id: 21321,
                                        text: "Some text 21321",
                                        type: "div",
                                        css: {},
                                        order: 1,
                                        elementsData: {},
                                    },
                                },
                            },
                        },
                    },
                },
            },
            22: {
                Id: 22,
                text: "Goats",
                type: "div",
                css: {},
                elementsData: {
                    221: {
                        Id: 221,
                        text: "parkour.gif",
                        type: "div",
                        css: {},
                        elementsData: {},
                    },
                    222: {
                        Id: 222,
                        text: "rampage.gif",
                        type: "div",
                        css: {},
                        elementsData: {},
                    },
                },
            },
            23: {
                Id: 23,
                text: "cat roomba",
                type: "div",
                css: {},
                elementsData: {},
            },
            24: {
                Id: 24,
                text: "duck shuffle",
                type: "div",
                css: {},
                elementsData: {},
            },
            25: {
                Id: 25,
                text: "monkey on a pig",
                type: "div",
                css: {},
                elementsData: {},
            },
        },
    },
    3: {
        Id: 3,
        text: "Section 3",
        type: "section",
        css: {},
        order: 3,
        elementsData: {},
    },
});