/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
// import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    await import('serviceworker-webpack-plugin/lib/runtime')
      .then((module) => module.default)
      .then((runtime) => runtime.register())
      .catch((error) => console.log(error));
    // await runtime.register();
    return;
  }
  console.log('Service worker not supported in this browser');
};

export default swRegister;
