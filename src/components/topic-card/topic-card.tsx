import { Component, Prop, Event, EventEmitter } from '@stencil/core';
import { ITopic } from '../../helpers/interfaces'
// import { setBackgroundImageStyles } from '../../helpers/utils';

@Component({
  tag: 'topic-card',
  styleUrl: 'topic-card.scss',
  scoped: true
})
export class TopicCard {

  @Prop() topic: ITopic;

  @Event() cardClicked: EventEmitter<ITopic>

  onCardClicked(topic: ITopic) {
    // Do some UI modification here ??
    this.cardClicked.emit(topic);
  }
  render() {
    return (
      <ion-card onClick={this.onCardClicked.bind(this, this.topic)}>
        <ion-card-content>
          <img class="topic-image" src={this.topic.imgSrc}/>
          <div class="text-container">
            <div class="card-title">{this.topic.title}</div>
            <div class="card-subtitle">{this.topic.subtitle}</div>
          </div>
        </ion-card-content>
      </ion-card>
    );
  }
}

