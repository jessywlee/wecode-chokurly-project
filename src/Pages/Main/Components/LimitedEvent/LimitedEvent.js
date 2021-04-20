import React, { Component } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './LimitedEvent.scss';

class LimitedEvent extends Component {
  constructor() {
    super();
    this.state = {
      time: '',
    };
  }

  componentDidMount() {
    this.setTimer();
  }

  componentWillUnmount() {
    this.setTimer();
  }

  setTimer = () => {
    const x = setInterval(() => {
      let countdownDate = new Date('Apr 24, 2021, 00:00:00').getTime();
      let now = new Date().getTime();
      let remaining = countdownDate - now;
      let hours = Math.floor(
        (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((remaining % (1000 * 60)) / 1000);
      const twoDigits = time => {
        return (time < 10 ? '0' : '') + time;
      };
      this.setState({
        time: `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`,
      });
      if (remaining < 0) {
        clearInterval(x);
        return;
      }
    }, 1000);
  };

  render() {
    const { time } = this.state;
    const eventProduct = {
      id: 1,
      thumbnail_image: '/images/Main/limited.jpg',
      name: '1[디저트] 솔티드 버터 캐러멜 2종',
      discount_rate: 0.15,
      discounted_price: 1900,
      original_price: 21000,
      sticker: '20%농할쿠폰',
      comment: '피부 미용에 도움을 주는 캐러멜!',
    };
    return (
      <div className="event-container">
        <div className="event-info">
          <div className="event-title">
            <span className="event-name">일일특가</span>
            <span className="event-subname">24시간 한정 특가</span>
            <span className="event-msg">🕒 망설이면 늦어요!</span>
          </div>
          <div className="event-product">
            <ProductCard
              product={eventProduct}
              productSize={{
                height: '340px',
                width: '695px',
              }}
            />
            <div className="event-timer">
              <span className="time">{time} 남음</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LimitedEvent;
