import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";

function createContainer(navbars: ParserNode[]): ParserNode {
    return {
        tag: "div",
        children: navbars
    }
}

function createNavbar(children: ParserNode[], cls: string): ParserNode {
    return {
        tag: "nav",
        classes: ["cui-navbar", cls],
        children: children
    }
}

function createList(cls: string, items: ParserNode[]): ParserNode {
    return {
        tag: "ul",
        classes: [cls],
        children: items
    }
}

function createListItem(cls: string, text: string, isText?: boolean): ParserNode {
    let attr = isText ? undefined : { "href": "#" };
    return {
        tag: "li",
        children: [
            {
                tag: isText ? "span" : "a",
                classes: [cls],
                attributes: attr,
                text: text
            }
        ]
    }
}


export const navbarExample = createNavbar([
    createList("", [
        createListItem("cui-navbar-title", "Navbar"),
        createListItem("", "Item")
    ])
], "")

export const navbarOptionsExample = createContainer([
    createNavbar([
        createList("", [
            createListItem("cui-navbar-title", "Navbar space"),
            createListItem("", "cui-space")
        ])
    ], "cui-space"),
    createNavbar([
        createList("", [
            createListItem("cui-navbar-title", "Navbar large"),
            createListItem("", "cui-large")
        ])
    ], "cui-large cui-margin-top"),
    createNavbar([
        createList("", [
            createListItem("cui-navbar-title", "Navbar transparent"),
            createListItem("", "cui-transparent")
        ])
    ], "cui-transparent cui-margin-top")
])

export const navbarPlacementExample = createContainer([
    createNavbar([
        createList("cui-navbar-left", [
            createListItem("cui-navbar-title", "Left"),
            createListItem("", "Item")
        ]),
        createList("cui-navbar-middle", [
            createListItem("cui-navbar-title", "Middle"),
            createListItem("", "Item")
        ]),
        createList("cui-navbar-right", [
            createListItem("cui-navbar-title", "Right"),
            createListItem("", "Item")
        ])
    ], "")
])

export const navbarItemExample = createContainer([
    createNavbar([
        createList("", [
            createListItem("cui-navbar-title", "Navbar"),
            createListItem("cui-navbar-item", "Item 1"),
            createListItem("cui-navbar-item cui-active", "Item 2"),
            createListItem("cui-navbar-item", "Item 3")
        ])
    ], ""),
    createNavbar([
        createList("", [
            createListItem("cui-navbar-title", "Navbar"),
            createListItem("cui-navbar-item ", "Item 1"),
            createListItem("cui-navbar-item cui-active", "Item 2"),
            createListItem("cui-navbar-item ", "Item 3")
        ])
    ], "cui-margin-top cui-accent"),
    createNavbar([
        createList("", [
            createListItem("cui-navbar-title", "Navbar"),
            createListItem("cui-navbar-item", "Item 1"),
            createListItem("cui-navbar-item cui-active", "Item 2"),
            createListItem("cui-navbar-item", "Item 3")
        ])
    ], "cui-margin-top cui-secondary"),

])

export const CuiDocsNavbarScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: `Add nav od div element to document with class cui-navbar. This will create flex, pre-styled container for navbar items.
            Items should be placed in ul elements:`,
            example: GetTabbedPreview(navbarExample)
        },
        {
            name: "Options",
            description: `Navbar panel comes with few options to choose. 
            Component height can be expanded by addition of padding to list elements when using cui-space or cui-large classes. 
            Also background color and shadow can be removed by using class cui-transparent:`,
            example: GetTabbedPreview(navbarOptionsExample),
            hint: {
                title: "Transparent",
                content: "When using cui-transparent and darker background color it is proper to add cui-dark along to cui-navbar."
            }
        },
        {
            name: "Alignment",
            description: `To place list of items to specific part of navbar, use one of following classes on ul element:`,
            list: [
                { name: "cui-navbar-left", description: "Places list on the left side of the navbar" },
                { name: "cui-navbar-middle", description: "Places list in the center" },
                { name: "cui-navbar-right", description: "Places list on the right side of the navbar" },
            ],
            example: GetTabbedPreview(navbarPlacementExample)
        },
        {
            name: "Item",
            description: `There is a special kind of navbar link that brings current page indicator. 
            To use it, add cui-navbar item to anchor element. Also add cui-active to link indicating current page.
            Navbar item comes with two themed options: cui-accent and cui-secondary:`,
            example: GetTabbedPreview(navbarItemExample)
        },
        {
            name: "CSS options",
            description: "Component name is navbar and supports following CSS build options:",
            list: [
                { name: "dark", description: "Adds dark mode styling" },
                { name: "print", description: "Adds print mode styling" },
                { name: "theme", description: "Adds theme color classes to navbar items" },
                { name: "responsive", description: "Adds responsive navbar options" },
                { name: "animation", description: "Adds support for transition effect in navbar item" },
            ]
        }
    ]
}