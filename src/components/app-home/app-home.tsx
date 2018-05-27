import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  scoped: true
})
export class AppHome {

  @Prop() history: RouterHistory;

  testTopic = {
    imgSrc: './assets/topics/angular-logo.svg',
    title: 'Angular',
    subtitle: 'Angular-related resources and cheatsheets'
  }
o
  navigateToTopic(){
    this.history.push('/topic');
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color='primary'>
          <ion-title>The Dev(h)el(o)per</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <div class="cards-container">
            <topic-card onCardClicked={this.navigateToTopic.bind(this)}topic={this.testTopic}></topic-card>
            <topic-card onCardClicked={this.navigateToTopic.bind(this)}topic={this.testTopic}></topic-card>
            <topic-card onCardClicked={this.navigateToTopic.bind(this)}topic={this.testTopic}></topic-card>
            <topic-card onCardClicked={this.navigateToTopic.bind(this)}topic={this.testTopic}></topic-card>
            <topic-card onCardClicked={this.navigateToTopic.bind(this)}topic={this.testTopic}></topic-card>
            <topic-card onCardClicked={this.navigateToTopic.bind(this)}topic={this.testTopic}></topic-card>
        </div>
        <ion-button href='/profile/stencil'>
          Profile page
        </ion-button>
      </ion-content>
    ];
  }
}
