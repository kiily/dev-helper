import { Component, Prop, Event, EventEmitter } from '@stencil/core';


@Component({
    tag: 'dev-search-bar',
    styleUrl: 'search-bar.scss',
    scoped: true    
})
export class SearchBar {

    @Prop({mutable: true}) value: string = "dark";
    @Prop() heading: string;

    @Event() menuClicked: EventEmitter<boolean>;

    onMenuClicked(event: UIEvent) {
        console.log(event);
        this.menuClicked.emit(true);
    }

    render(): JSX.Element {
        return (
            <div class="search-input-container">
                {/*  */}
            </div>
        )
    }
  }
