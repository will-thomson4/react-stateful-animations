# React Stateful Animations 📽️

Use this library of stateful animations in your **React** application. Current animations:

- Upload
- Download
- _(More coming soon)_

# What is a stateful animation

What we mean by stateful animations is an animation which exists within different states. Currently, when using animated icons in an app these typically play once forward for a set amount of time, or loop.

In this package the animated icons hold a state, for example, our Download icon has an initial state, then you can trigger the animation when download starts the icon animates into to a loading state which loops forever, until you trigger the animation again when downloading has finished, then it moves to an end state and finally back to the initial state ready to start again..

## How to use

```jsx
import {
  Download,
  animationStart,
  animationEnd,
} from '@wt-4/react-stateful-animations';

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
