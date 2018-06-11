export interface IMenuEntry {
    text?: string;
    HTML?: HTMLElement;
    subEntries?: IMenuEntry[];
    image?: string;
}