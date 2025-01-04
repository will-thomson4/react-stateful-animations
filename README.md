# React Stateful Animations 📽️

Use this library of stateful animations in your **React** application. Current animations:

- Upload
- Download
- Send
- _(More coming soon)_

See examples [here](https://will-thomson4.github.io/)

# What is a stateful animation

Traditional animated icons either play once and stop, or loop continuously.

This package is different. Our animations have state, at the moment they can:

1. Start in an initial state
2. Animate _into_ a loading state (instead of just loading a new icon)
3. Loop this loading state indefinitely until it is told to stop
4. Transition _into_ a completion state (instead of just loading a new icon)
5. Return to the initial state ready to start again

This might be useful say if you want a Download icon to transition to an indefinite loading state while something is downloading, and then transition into a finished state when complete.

We are looking to add more states and use cases for our animations, let us know if you have any ideas!

## How to use

```jsx
import {
  Download,
  animationStart,
  animationEnd,
} from 'react-stateful-animations';

const App = () => {
  return (
    <>
      <button onClick={() => animationStart('download')}>Start</button>
      <button onClick={() => animationEnd('download')}>End</button>
      <Download id="download" />
    </>
  );
};
```

Import the animation into your app, and give it an **id**. Also import the `animationStart` and `animationEnd` functions into your app. When triggering the start of your animation call `animationStart(id)` with the `id` that you registered your animation with.

All animations built in [LottieLab](https://www.lottielab.com/)
