import React, { Component, CSSProperties } from 'react';
import styles from 'animate.css';

declare const AnimateTypes: [
  'bounce',
  'flash',
  'pulse',
  'rubberBand',
  'shakeX',
  'shakeY',
  'headShake',
  'swing',
  'tada',
  'wobble',
  'jello',
  'heartBeat',

  'bounceIn',
  'bounceInDown',
  'bounceInLeft',
  'bounceInRight',
  'bounceInUp',

  'bounceOut',
  'bounceOutDown',
  'bounceOutLeft',
  'bounceOutRight',
  'bounceOutUp',

  'fadeIn',
  'fadeInDown',
  'fadeInDownBig',
  'fadeInLeft',
  'fadeInLeftBig',
  'fadeInRight',
  'fadeInRightBig',
  'fadeInUp',
  'fadeInUpBig',

  'fadeOut',
  'fadeOutDown',
  'fadeOutDownBig',
  'fadeOutRight',
  'fadeOutRightBig',
  'fadeOutUp',
  'fadeOutUpBig',

  'flip',
  'flipInX',
  'flipInY',
  'flipOutX',
  'flipOutY',

  'lightSpeedIn',
  'lightSpeedOut',

  'rotateIn',
  'rotateInDownLeft',
  'rotateInDownRight',
  'rotateInUpLeft',
  'rotateInUpRight',

  'rotateOut',
  'rotateOutDownLeft',
  'rotateOutDownRight',
  'rotateOutUpLeft',
  'rotateOutUpRight',

  'slideOutUp',
  'slideOutDown',
  'slideOutLeft',
  'slideOutRight',

  'zoomIn',
  'zoomInDown',
  'zoomInLeft',
  'zoomInRight',
  'zoomInUp',

  'zoomOut',
  'zoomOutDown',
  'zoomOutLeft',
  'zoomOutRight',
  'zoomOutUp',

  'hinge',
  'jackInTheBox',
  'rollIn',
  'rollOut',
];
export declare type AnimateType = typeof AnimateTypes[number];

// const mapper = {
//   bounce: 'animate__bounce',
//   flash: 'animate__flash',
//   pulse: 'animate__pulse',
//   rubberBand: 'animate__rubberBand',
//   shakeX: 'animate__shakeX',
//   shakeY: 'animate__shakeY',
//   headShake: 'animate__headShake',
//   swing: 'animate__swing',
//   tada: 'animate__tada',
//   wobble: 'animate__wobble',
//   jello: 'animate__jello',
//   heartBeat: 'animate__heartBeat',
// };

interface IAnimateWrapperState {
  style: string;
}

interface IAnimateWrapperProps {
  type: AnimateType;
  className?: string;
  style?: CSSProperties;
}

class AnimateWrapper extends Component<
  IAnimateWrapperProps,
  IAnimateWrapperState
> {
  state = {
    style: '',
  };

  componentDidMount() {
    this.animate();
  }

  // componentDidUpdate(prevProps: IAnimateWrapperProps) {
  //   const {type} = prevProps
  //   if (this.props.type !== type) {
  //     this.animate()
  //   }
  // }

  public animate = () => {
    const { type } = this.props;
    this.setState({
      style: type,
    });
  };

  onAnimationEnd = () => {
    this.setState({ style: '' });
  };

  render() {
    const { style } = this.state;
    const { className = '', style: containerStyle = {} } = this.props;
    return (
      <div
        className={`${styles.animate__animated} ${
          styles[`animate__${style}`]
        } ${className}`}
        style={containerStyle}
        onAnimationEnd={this.onAnimationEnd}
      >
        {this.props.children}
      </div>
    );
  }
}

export default AnimateWrapper;
