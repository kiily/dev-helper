import { Component, Prop, State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  scoped: true
})
export class AppHome {

  @Prop() history: RouterHistory;

  @State() isMenuOpen: boolean = false;
  
  angular = {
    imgSrc: './assets/topics/angular-logo.svg',
    title: 'Angular',
    subtitle: 'Angularize your code'
  }

  commandLine = {
    imgSrc: './assets/topics/command-line-logo.svg',
    title: 'Command Line',
    subtitle: 'Take control of CMD'
  }

  navigateToTopic(){
    this.history.push('/topic');
  }

  toggleMenu(event: CustomEvent) {
    if (event) {
      // Toggle menu state
      this.isMenuOpen = !this.isMenuOpen;
    }

  }

  render() {
    let menuMargin = this.isMenuOpen ? '20%' : '0';
    return [
      <dev-navbar onMenuClicked={(event: CustomEvent) => this.toggleMenu(event)} heading="dev(h)el(o)per"></dev-navbar>,
      <ion-content>
        {this.isMenuOpen ? <dev-side-menu></dev-side-menu> : null}
        <div style={{ 'margin-left': menuMargin }} class="cards-container">
            <topic-card onCardClicked={this.navigateToTopic.bind(this)}topic={this.angular}></topic-card>
            <topic-card onCardClicked={this.navigateToTopic.bind(this)}topic={this.angular}></topic-card>
            <topic-card onCardClicked={this.navigateToTopic.bind(this)}topic={this.angular}></topic-card>
            <topic-card onCardClicked={this.navigateToTopic.bind(this)}topic={this.angular}></topic-card>
            <topic-card onCardClicked={this.navigateToTopic.bind(this)}topic={this.commandLine}></topic-card>
            <topic-card onCardClicked={this.navigateToTopic.bind(this)}topic={this.commandLine}></topic-card>
        </div>
        <ion-button href='/profile/stencil'>
          Profile page
        </ion-button>
      </ion-content>
    ];
  }
}
