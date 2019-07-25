export default (callback, ms) => {
  let timer = null;

  return (...args) => {
    const onComplete = () => {
      callback.apply(this, args);
      timer = null;
    };

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(onComplete, ms);
  };
};
