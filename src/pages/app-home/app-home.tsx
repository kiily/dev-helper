import { Component, Prop, Element } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { setAnimation, animations } from '../../animations';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  scoped: true
})
export class AppHome {

  @Prop() history: RouterHistory;

  private isMenuOpen: boolean = false;

  private sideMenu: HTMLDevSideMenuElement;
  private cardsContainer: HTMLDivElement;

  @Element() host: HTMLElement;
  
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

  componentDidLoad() {
    this.sideMenu = this.host.querySelector('dev-side-menu');
    this.cardsContainer = this.host.querySelector('.cards-container');
  }

  navigateToTopic(){
    this.history.push('/topic');
  }

  toggleMenu(event: CustomEvent) {
    if (event) {
      // Toggle menu state
      this.isMenuOpen = !this.isMenuOpen;  

      if (this.isMenuOpen) {
        this.showMenu();
      } else {
        this.hideMenu();
      }
    }
  }

  showMenu() {
    setAnimation(animations.SLIDE_IN_RIGHT, this.sideMenu, { open: true} );
    this.cardsContainer.style.marginLeft = '25%';      
  }

  hideMenu() {
    setAnimation(animations.SLIDE_IN_RIGHT, this.sideMenu, { open: false} );
    this.cardsContainer.style.marginLeft = '0';
  }

  render() {
    return [
      <dev-navbar onMenuClicked={(event: CustomEvent) => this.toggleMenu(event)} heading="dev(h)el(o)per"></dev-navbar>,
      <ion-content>
        <dev-side-menu></dev-side-menu>
        <div class="cards-container">
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
