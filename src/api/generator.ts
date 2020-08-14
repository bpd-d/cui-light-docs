type ElementType = "text" | "h1" | "h2" | "span" | "paragraph" | "div";
export interface IElementRender<T> {
    name: string;
    get(content: string): T;
}

export interface IElementRenderEngine<T> {
    render(element: GeneratorElement): T;
}

export interface ElementGeneratorSetup {
    headerClass?: string;
    subheaderClass?: string;
    paragraphClass?: string;
}

export interface GeneratorElement {
    type: string;
    content?: string;
    children?: GeneratorElement[];
}

export interface IElementBuilder<T> {
    render(...elements: GeneratorElement[]): T[];
}

export interface ElementRenderDict<T> {
    [id: string]: IElementRender<T>;
}

export class ElementRenderBase {
    createNodeWithContent(tag: string, content?: string): Element {
        let node = document.createElement(tag);
        if (content) {
            node.textContent = content;
        }
        return node;
    }
}

export class SpanElementRender extends ElementRenderBase implements IElementRender<Element> {
    name: string = "span";
    get(content: string): Element {
        return this.createNodeWithContent(this.name, content);
    }

}

export class TextElementRender implements IElementRender<Element> {
    name: string = "text";
    get(content: string): Element {
        return document.createTextNode(content) as any;
    }
}


export class PreLineRender extends ElementRenderBase implements IElementRender<Element> {
    name: string = "line";
    get(content: string): Element {
        return this.createNodeWithContent('span');
    }
}

export class PreIndentRender extends ElementRenderBase implements IElementRender<Element> {
    name: string = "indent";
    get(content: string): Element {
        let indent = this.createNodeWithContent('span');
        indent.classList.add('cui-indent-' + content);
        return indent;
    }
}

export class PreTagRender extends ElementRenderBase implements IElementRender<Element> {
    name: string = "tag";
    get(content: string): Element {
        let indent = this.createNodeWithContent('span', content);
        indent.classList.add('cui-tag');
        return indent;
    }
}

export class PreVarRender extends ElementRenderBase implements IElementRender<Element> {
    name: string = "var";
    get(content: string): Element {
        let indent = this.createNodeWithContent('span', content);
        indent.classList.add('cui-var');
        return indent;
    }
}

export class HtmlElementRenderingEngine implements IElementRenderEngine<Element> {
    #renders: ElementRenderDict<Element>;
    constructor(renders: ElementRenderDict<Element>) {
        this.#renders = renders;
    }
    render(element: GeneratorElement): Element {
        let renderer = this.#renders[element.type];
        if (!renderer) {
            console.log("Unknown element " + element.type);
            return null;
        }
        let out: Element = renderer.get(element.content);
        if (element.children && element.children.length > 0) {
            element.children.forEach(child => {
                out.appendChild(this.render(child))
            })
        }
        return out;
    }
}

export class ElementBuilder<T> implements IElementBuilder<T> {
    #engine: IElementRenderEngine<T>;

    constructor(engine: IElementRenderEngine<T>) {
        this.#engine = engine;
    }

    render(...elements: GeneratorElement[]): T[] {
        if (!elements || elements.length === 0) {
            return null;
        }
        return elements.map(item => {
            return this.#engine.render(item);
        });
    }
}