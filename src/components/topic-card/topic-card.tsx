import { Component, Prop, Event, EventEmitter, Element } from '@stencil/core';
import { ITopic } from '../../helpers/interfaces'
import { setAnimation, animations } from '../../animations';
import { setBackgroundImageStyles } from '../../helpers/utils';

@Component({
  tag: 'topic-card',
  styleUrl: 'topic-card.scss',
  scoped: true
})
export class TopicCard {

  @Prop() topic: ITopic;

  @Element() host: HTMLStencilElement;

  @Event() cardClicked: EventEmitter<ITopic>

  private textContainer: HTMLDivElement;

  componentDidLoad() {
    this.textContainer = this.host.querySelector('.text-container');
  }

  onCardClicked(topic: ITopic) {
    // Do some UI modification here ??
    this.cardClicked.emit(topic);
  }

  onMouseEnter(event: UIEvent) {
    console.log(event);
    setAnimation(animations.FADE_IN_AND_SCALE, this.textContainer, { open: true} );
  }

  onMouseLeave(event: UIEvent) {
    console.log(event);
    setTimeout(() => {
      setAnimation(animations.FADE_IN_AND_SCALE, this.textContainer, { open: false} ); 
    }, 300);
  }

  render(): JSX.Element {
    return (
      <ion-card 
        onMouseEnter={ (event: UIEvent) => { this.onMouseEnter(event) }}
        onMouseLeave={ (event: UIEvent) => { this.onMouseLeave(event) }}
        onClick={this.onCardClicked.bind(this, this.topic)}
        >
        <ion-card-content>
          <div class="topic-image" style={setBackgroundImageStyles(this.topic.imgSrc)} ></div>
          <div class="text-container">
            <div class="card-title">{this.topic.title}</div>
          </div>
        </ion-card-content>
      </ion-card>
    );
  }
}

