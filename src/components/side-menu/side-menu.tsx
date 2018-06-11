import { Component, Prop } from '@stencil/core';
import { IMenuEntry } from '../../helpers/interfaces';

@Component({
    tag: 'dev-side-menu',
    styleUrl: 'side-menu.scss',
  scoped: true    
})
export class SideMenu {
    
    @Prop() menuEntries: IMenuEntry[] = [];

    render(): JSX.Element {
        return (
            <div class="menu-container">
                {this.menuEntries.map( (entry, index) => {
                    <div class="menu-entry">
                        {index + 1}. {entry.text}
                    </div>
                })}
            </div>
        )
    }
}