import * as React from "react";
import { ParserNode, ParserNodeAttribute } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";

/**
 * 
<div class="cui-radio-custom">
                        <input type="radio" id="radio-2-1" name="radio-group-2" checked>
                        <label for="radio-2-1" class="cui-content">Radio Custom 1</label>
                    </div>
 */
function createCustomRadio(id: string, text: string, type: string, group: string, disabled: boolean, ...classes: string[]): ParserNode {
    let attr: ParserNodeAttribute = {
        type: type,
        id: id,
        name: group,
    }
    if (disabled) {
        attr.disabled = "true";
    }
    return {
        tag: "div",
        classes: ["cui-radio-custom", ...classes],
        children: [
            {
                tag: "input",
                attributes: attr
            },
            {
                tag: "label",
                classes: ["cui-content"],
                text: text,
                attributes: {
                    htmlFor: id,
                }
            }

        ]
    }
}

function createInput(type: string, placeholder: string, disabled: boolean, ...classes: string[]): ParserNode {
    let cls: string[] = classes ? [...classes] : []
    let a: ParserNodeAttribute = {
        type: type,
        placeholder: placeholder,
    }
    if (disabled) {
        a.disabled = "true";
    }
    return {
        tag: 'input',
        classes: cls,
        attributes: a
    }
}

function createRadio(id: string, group: string, text: string, disabled: boolean, ...classes: string[]): ParserNode {
    let cls: string[] = classes ? [...classes] : []
    let a: ParserNodeAttribute = {
        type: "radio",
        id: id,
        name: group
    }
    if (disabled) {
        a.disabled = "true";
    }

    return {
        tag: "div",
        classes: ["cui-form", "cui-flex", "cui-middle", "cui-reverse"],
        children: [
            {
                tag: 'input',
                classes: cls,
                attributes: a
            },
            {
                tag: "label",
                attributes: {
                    htmlFor: id
                },
                text: text
            }
        ]
    }
}

function createCheckbox(id: string, text: string, disabled: boolean, ...classes: string[]): ParserNode {
    let cls: string[] = classes ? [...classes] : []
    let a: ParserNodeAttribute = {
        type: "checkbox",
        id: id,
    }
    if (disabled) {
        a.disabled = "true";
    }

    return {
        tag: "div",
        classes: ["cui-form", "cui-flex", "cui-middle", "cui-reverse"],
        children: [
            {
                tag: 'input',
                classes: cls,
                attributes: a
            },
            {
                tag: "label",
                attributes: {
                    htmlFor: id
                },
                text: text
            }
        ]
    }
}

function createSelect(placeholder: string, disabled: boolean, ...classes: string[]): ParserNode {
    let cls: string[] = classes ? [...classes] : []
    let a: ParserNodeAttribute = {
        placeholder: placeholder
    }
    if (disabled) {
        a.disabled = "true";
    }
    return {
        tag: 'select',
        classes: cls,
        attributes: a,
        children: [
            { tag: "option", text: "Item 1" },
            { tag: "option", text: "Item 2" },
            { tag: "option", text: "Item 3" },
            { tag: "option", text: "Item 4" }
        ]
    }
}

function createContainer(input: ParserNode, ...classes: string[]): ParserNode {
    let cls: string[] = classes ? [...classes] : []
    return {
        tag: "div",
        classes: cls,
        children: [
            input
        ]
    }
}

function createRange(disabled: boolean, ...classes: string[]): ParserNode {
    let attr: ParserNodeAttribute = {
        type: "range",
        min: "0",
        max: "100",
        value: "50"
    }

    if (disabled) {
        attr.disabled = "true";
    }
    return {
        tag: "input",
        attributes: attr,
        classes: [...classes]
    }
}

function createSwitch(id: string, text: string, disabled: boolean, ...classes: string[]): ParserNode {
    let attr: ParserNodeAttribute = {
        id: id,
        type: "checkbox"
    }
    if (disabled) {
        attr.disabled = "true"
    }
    return {
        tag: "div",
        classes: ["cui-input-switch", ...classes],
        children: [
            {
                tag: "input",
                attributes: attr,
            },
            {
                tag: "label",
                classes: ["cui-content"],
                attributes: {
                    htmlFor: id
                },
                text: text
            }


        ]
    }
}

function createTextarea(text: string, disabled: boolean, ...classes: string[]): ParserNode {
    let attr: ParserNodeAttribute = {
        rows: "3"
    };
    if (disabled) {
        attr.disabled = "true"
    }
    return {
        tag: "textarea",
        text: text,
        classes: ["cui-textarea", ...classes],
        attributes: attr
    }
}

function createMix(text: string, icon: string, btnClasses: string[], classes: string[]): ParserNode {
    return {
        tag: "div",
        classes: ["cui-input-mix", ...classes],
        children: [
            {
                tag: "input",
                attributes: {
                    type: "text",
                    value: text
                },
                classes: ["cui-input"]
            },
            {
                tag: "a",
                attributes: {
                    "cui-icon": icon,
                    href: "#"
                },
                classes: btnClasses

            }
        ]
    }
}

function createForm(label: ParserNode, input: ParserNode, description: ParserNode, ...classes: string[]): ParserNode {
    let children = [label];
    if (description) {
        children.push(description)
    }
    children.push(input);
    return {
        tag: "div",
        classes: ["cui-form", ...classes],
        children: children
    }
}

function createFormLabel(text: string): ParserNode {
    return {
        tag: "label",
        text: text,
        classes: ["cui-form-label"]
    }
}

function createFormDescription(text: string): ParserNode {
    return {
        tag: "label",
        text: text,
        classes: ["cui-form-description"]
    }
}

const inputBaseExample: ParserNode = {
    tag: "div",
    children: [
        createContainer(createInput("text", "Input", false, "cui-input")),
        createContainer(createInput("text", "Input accent", false, "cui-input", "cui-accent"), "cui-margin-top"),
        createContainer(createInput("text", "Input secondary", false, "cui-input", "cui-secondary"), "cui-margin-top"),
        createContainer(createInput("text", "Input error", false, "cui-input", "cui-error"), "cui-margin-top"),
        createContainer(createInput("text", "Input warning", false, "cui-input", "cui-warning"), "cui-margin-top"),
        createContainer(createInput("text", "Input success", false, "cui-input", "cui-success"), "cui-margin-top"),
        createContainer(createInput("text", "Input disabled", true, "cui-input"), "cui-margin-top"),
        createContainer(createInput("text", "Input large", false, "cui-input", "cui-large"), "cui-margin-top"),
        createContainer(createInput("text", "Input small", false, "cui-input", "cui-small"), "cui-margin-top"),
        createContainer(createInput("text", "Input transparent", false, "cui-input", "cui-transparent"), "cui-margin-top"),
    ]
}

const inputSelectExample: ParserNode = {
    tag: "div",
    children: [
        createContainer(createSelect("Select", false, "cui-select")),
        createContainer(createSelect("Select", false, "cui-select", "cui-accent"), "cui-margin-top"),
        createContainer(createSelect("Select", false, "cui-select", "cui-secondary"), "cui-margin-top"),
        createContainer(createSelect("Select", true, "cui-select"), "cui-margin-top"),
        createContainer(createSelect("Select", false, "cui-select", "cui-large"), "cui-margin-top"),
        createContainer(createSelect("Select", false, "cui-select", "cui-small"), "cui-margin-top"),
        createContainer(createSelect("Select", false, "cui-select", "cui-transparent"), "cui-margin-top"),
    ]
}

const inputRadioExample: ParserNode = {
    tag: "div",
    children: [
        createRadio("radio-1-1", 'group-1-1', "Radio 1", false, "cui-radio"),
        createRadio("radio-1-2", 'group-1-1', "Radio 2", false, "cui-radio", "cui-accent"),
        createRadio("radio-1-3", 'group-1-1', "Radio 3", false, "cui-radio", "cui-secondary"),
        createRadio("radio-1-4", 'group-1-1', "Radio 4", true, "cui-radio")
    ]
}

const inputCheckboxExample: ParserNode = {
    tag: "div",
    children: [
        createCheckbox("checkbox-1-1", "Checkbox 1", false, "cui-checkbox"),
        createCheckbox("checkbox-1-2", "Checkbox 2", false, "cui-checkbox", "cui-accent"),
        createCheckbox("checkbox-1-3", "Checkbox 3", false, "cui-checkbox", "cui-secondary"),
        createCheckbox("checkbox-1-4", "Checkbox 4", true, "cui-checkbox")
    ]
}


const customRadioExample: ParserNode = {
    tag: "div",
    children: [
        {
            tag: "div",
            children: [
                createCustomRadio("custom-radio-1-1", "Custom radio 1", "radio", "custom-radio-group-1", false),
                createCustomRadio("custom-radio-1-2", "Custom radio 2", "radio", "custom-radio-group-1", false, "cui-accent", "cui-margin-left"),
                createCustomRadio("custom-radio-1-3", "Custom radio 3", "radio", "custom-radio-group-1", false, "cui-secondary", "cui-margin-left"),
                createCustomRadio("custom-radio-1-4", "Custom radio 4", "radio", "custom-radio-group-1", true, "cui-margin-left"),
            ]
        },
        {
            tag: "div",
            children: [
                createCustomRadio("custom-radio-2-1", "Custom checkbox 1", "checkbox", "custom-radio-group-2", false),
                createCustomRadio("custom-radio-2-2", "Custom checkbox 2", "checkbox", "custom-radio-group-2", false, "cui-accent", "cui-margin-left"),
                createCustomRadio("custom-radio-2-3", "Custom checkbox 3", "checkbox", "custom-radio-group-2", false, "cui-secondary", "cui-margin-left"),
                createCustomRadio("custom-radio-2-4", "Custom checkbox 4", "checkbox", "custom-radio-group-2", true, "cui-margin-left"),
            ]
        }
    ]
}

const inputRangeExample: ParserNode = {
    tag: "div",
    children: [
        createContainer(createRange(false, "cui-range"), "cui-container"),
        createContainer(createRange(false, "cui-range", "cui-accent"), "cui-container", "cui-margin-top"),
        createContainer(createRange(false, "cui-range", "cui-secondary"), "cui-container", "cui-margin-top"),
        createContainer(createRange(true, "cui-range"), "cui-container", "cui-margin-top"),

    ]
}

const switchExample: ParserNode = {
    tag: "div",
    children: [
        createContainer(createSwitch("switch-1-1", "", false)),
        createContainer(createSwitch("switch-1-2", "Switch", false), "cui-margin-top"),
        createContainer(createSwitch("switch-1-3", "Switch", false, "cui-accent"), "cui-margin-top"),
        createContainer(createSwitch("switch-1-4", "Switch", false, "cui-secondary"), "cui-margin-top"),
        createContainer(createSwitch("switch-1-5", "Switch", true), "cui-margin-top")
    ]
}

const textareaExample: ParserNode = {
    tag: "div",
    children: [
        createTextarea("Text", false),
        createTextarea("Accent", false, "cui-accent", "cui-margin-top"),
        createTextarea("Secondary", false, "cui-secondary", "cui-margin-top"),
        createTextarea("Disabled", true, "cui-margin-top"),
    ]
}

const mixExample: ParserNode = {
    tag: "div",
    children: [
        createContainer(createMix("Text", "search", ["cui-icon"], [])),
        createContainer(createMix("Text", "search", ["cui-icon"], ["cui-accent"]), "cui-margin-top"),
        createContainer(createMix("Text", "search", ["cui-icon"], ["cui-secondary"]), "cui-margin-top"),
        createContainer(createMix("Text", "search", ["cui-icon"], ["cui-error"]), "cui-margin-top"),
        createContainer(createMix("Text", "search", ["cui-icon"], ["cui-warning"]), "cui-margin-top"),
        createContainer(createMix("Text", "search", ["cui-icon"], ["cui-success"]), "cui-margin-top"),
        createContainer(createMix("Text", "search", ["cui-icon"], ["cui-reverse"]), "cui-margin-top"),
        createContainer(createMix("Text", "search", ["cui-icon"], ["cui-disabled"]), "cui-margin-top"),
        createContainer(createMix("Text", "search", ["cui-button", "cui-accent"], []), "cui-margin-top"),
        createContainer(createMix("Text", "search", ["cui-button", "cui-secondary"], ["cui-secondary"]), "cui-margin-top"),
    ]
}

const formExample: ParserNode = createForm(
    createFormLabel("Form label"),
    createInput("text", "Text", false, "cui-input"),
    createFormDescription("Description"))

const formInlineExample: ParserNode = createForm(
    createFormLabel("Form label"),
    createInput("text", "Text", false, "cui-input"),
    createFormDescription("Description"), "cui-inline")

const formFlexExample: ParserNode = {
    tag: "div",
    children: [
        createForm(
            createFormLabel("Flex label"),
            createInput("text", "Text", false, "cui-input"),
            createFormDescription("Description")
            , "cui-flex", "cui-middle"),
        createForm(
            createFormLabel("Flex options"),
            createInput("text", "Text", false, "cui-input"),
            null
            , "cui-flex", "cui-middle", "cui-between", "cui-margin-top"),
        createForm(
            createFormLabel("Flex reverse"),
            createInput("text", "Text", false, "cui-input"),
            null
            , "cui-flex", "cui-middle", "cui-between", "cui-reverse", "cui-margin-top"),
        createForm(
            createFormLabel("Switch label"),
            createSwitch("switch-2-1", "", false),
            //createInput("text", "Text", false, "cui-input"),
            null
            , "cui-flex", "cui-middle", "cui-between", "cui-margin-top")
    ]
}

export const CuiDocsInputScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>cUI brings some styling a options to input elements as well as new components build on the top of existing ones.
            All of them come in at least three forms: basic, accent and secondary.
            Basic doesn't require anything to set, but colored options need appropriate class to enable colored styling.
            The most basic element is text input. To set style, add class <span className="style-class">cui-input</span> to the input element.
            Add <span className="style-class">cui-accent</span> or <span className="style-class">cui-secondary</span> to theme the element.
            Basic inputs also support signal colors:</>,
            example: GetTabbedPreview(inputBaseExample, "540px")
        },
        {
            name: "Select",
            description: <>Select also comes with theming options. To add this component add class <span className="style-class">cui-select</span> to element select and proper theme class if needed:</>,
            example: GetTabbedPreview(inputSelectExample, "380px")
        },
        {
            name: "Radio",
            description: <>To setup radio button add class <span className="style-class">cui-radio</span> to element input with type radio and proper theme class if needed:</>,
            example: GetTabbedPreview(inputRadioExample, "100px")
        },
        {
            name: "Checkbox",
            description: <>To setup checkbox add class <span className="style-class">cui-checkbox</span> to element input with type checkbox and proper theme class if needed:</>,
            example: GetTabbedPreview(inputCheckboxExample, "100px")
        },
        {
            name: "Custom",
            description: <>It allows common html element to behave like a radio or checkbox.
            To create such element add <span className="style-element">div</span> with class <span className="style-class">cui-radio-custom</span>, then add input with proper type (radio or checkbox) along with common attributes related to the type, like id or group.
            Next add element <span className="style-element">label</span> with class <span className="style-class">cui-content</span> which will hold whole custom element content.
            Component can be themed with accent or secondary color as on example below:</>,
            example: GetTabbedPreview(customRadioExample, "120px")
        },
        {
            name: "Switch",
            description: <>Switch is built on top of checkbox element.
            Brings additional style similar to the ones known from operating systems. To setup this component add <span className="style-element">div</span> with class <span className="style-class">cui-input-switch</span>.
            Add accent or secondary class modifier if needed to this element.
            Then add <span className="style-element">input</span> with type <span className="style-element">checkbox</span> and id. Additionally setup other input attributes.
            Next add element <span className="style-element">label</span> with class <span className="style-class">cui-content</span>. If needed add text which will be displayed next to switch:</>,
            example: GetTabbedPreview(switchExample, "250px")
        },
        {
            name: "Range",
            description: <>To create range element, add element <span className="style-element">input</span> with type <span className="style-element">range</span> and class <span className="style-class">cui-range</span>.
            Then setup other attributes required by default range implementation: </>,
            example: GetTabbedPreview(inputRangeExample, "200px")
        },
        {
            name: "Textarea",
            description: <>Textarea brings some styling to default element implementation to make it match overall cUI look and feel. To set it up, add class <span className="style-class">cui-textarea</span> to element <span className="style-element">textarea</span> along with theme modifier if needed</>,
            example: GetTabbedPreview(textareaExample, "400px")
        },
        {
            name: "Mix",
            description: <>Input mix bring mixed component - a mix between button/icon or input text box. Component comes with theme and signal colors (add proper class to parent element) as well as reversed option.
            To setup this element add a <span className="style-element">div</span> with class <span className="style-class">cui-input-mix</span>, then add an <span className="style-element">input</span> with class <span className="style-class">cui-input</span> and button or icon with appropriate class:
                <span className="style-class">cui-button</span> or <span className="style-class">cui-icon</span> accordingly. They support their own styling classes. </>,
            example: GetTabbedPreview(mixExample, "520px")
        },
        {
            name: "Form",
            description: <>Form is an element that wraps label, description and input element in one box. It gives multiple options of placing items inside. For basic setup add <span className="style-element">div</span> with class <span className="style-class">cui-form</span>.
            Then add <span className="style-element">label</span> with class <span className="style-class">cui-input-label</span>, element with class <span className="style-class">cui-input-description</span> if needed and input component.
            With basic setup form is a block, label and input are also blocks so label will be placed always above input:</>,
            example: GetTabbedPreview(formExample, "100px")
        },
        {
            name: "Inline form",
            description: <>Add class <span className="style-class">cui-inline</span> to <span className="style-class">cui-form-label</span> to place items in one line: </>,
            example: GetTabbedPreview(formInlineExample, "60px")
        },
        {
            name: "Flex form",
            description: <>Add class <span className="style-class">cui-flex</span> to <span className="style-class">cui-form-label</span> to get access to all modifiers available in <span className="style-class">flex</span> component.
            Add class <span className="style-class">cui-reverse</span> to reverse order of elements inside of form element:</>,
            example: GetTabbedPreview(formFlexExample, "200px")
        },
        {
            name: "CSS options",
            description: "Component name is input and supports following CSS build options:",
            list: [
                { name: "dark", description: "Adds dark mode styling" },
                { name: "print", description: "Adds print mode styling" },
                { name: "theme", description: "Adds theme coloring classes" },
                { name: "signal", description: "Adds signal coloring classes to text and mix elements" },
                { name: "mix", description: "Adds support for input mix" },
                { name: "custom", description: "Adds support for radio custom" },
                { name: "range", description: "Adds support for input range classes" },
                { name: "radio", description: "Adds support for radio input element" },
                { name: "checkbox", description: "Adds support for checkbox element" },
                { name: "textarea", description: "Adds support for textarea" },
                { name: "select", description: "Adds support for select" },
                { name: "switch", description: "Adds support for switch custom element" },
                { name: "form", description: "Adds form styling classes" },
            ]
        }
    ]
}