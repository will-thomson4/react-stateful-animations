type AnimationCallbacks = {
  start: () => void;
  end: () => void;
};

const animations: Record<string, AnimationCallbacks> = {};

export const registerAnimation = (
  id: string,
  callbacks: AnimationCallbacks
) => {
  animations[id] = callbacks;
};

export const unregisterAnimation = (id: string) => {
  delete animations[id];
};

export const animationStart = (id: string) => {
  const animation = animations[id];
  if (animation) {
    animation.start();
  }
};

export const animationEnd = (id: string) => {
  const animation = animations[id];
  if (animation) {
    animation.end();
  }
};
