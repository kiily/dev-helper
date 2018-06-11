import { Component, Prop, Event, EventEmitter } from '@stencil/core';


@Component({
    tag: 'dev-navbar',
    styleUrl: 'navbar.scss',
  scoped: true    
})
export class Navbar {

    @Prop() color: string = "dark";
    @Prop() heading: string;

    @Event() menuClicked: EventEmitter<boolean>;

    onMenuClicked(event: UIEvent) {
        console.log(event);
        this.menuClicked.emit(true);
    }

    render(): JSX.Element {
        return (
            <ion-header>
                <ion-toolbar color={this.color}>
                <ion-buttons slot="start">
                    <ion-button onClick={(event: UIEvent) => this.onMenuClicked(event)}>
                        <ion-icon slot="icon-only" name="menu"></ion-icon>
                    </ion-button>
                </ion-buttons>

                <ion-title>{this.heading}</ion-title>
                </ion-toolbar>
            </ion-header>
        )
    }
  }
