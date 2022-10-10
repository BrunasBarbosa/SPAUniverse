export default function Path() {
  const homeRoute = document.querySelector('nav :nth-child(1)');
  const universeRoute = document.querySelector('nav :nth-child(2)');
  const explorationRoute = document.querySelector('nav :nth-child(3)');
  const body = document.querySelector('body');

  function universePage() {
    body.classList.add('bg-universe');
    body.classList.remove('bg-home', 'bg-exploration');
    homeRoute.classList.remove('brightness');
    universeRoute.classList.add('brightness');
    explorationRoute.classList.remove('brightness');
  }

  function homePage() {
    body.classList.add('bg-home');
    body.classList.remove('bg-universe', 'bg-exploration');
    homeRoute.classList.add('brightness');
    universeRoute.classList.remove('brightness');
    explorationRoute.classList.remove('brightness');
  }

  function explorationPage() {
    body.classList.add('bg-exploration');
    body.classList.remove('bg-universe', 'bg-home');
    homeRoute.classList.remove('brightness');
    universeRoute.classList.remove('brightness');
    explorationRoute.classList.add('brightness');
  }

  function notFoundPage() {
    body.classList.add('bg-home');
    body.classList.remove('bg-universe', 'bg-exploration');
    homeRoute.classList.remove('brightness');
    universeRoute.classList.remove('brightness');
    explorationRoute.classList.remove('brightness');
  }

  function routeChange() {
    let { hash } = window.location

    switch (hash) {
      case '':
        homePage();
        break;

      // case '#/home':
      //   homePage();
      //   break;

      case '#/universe':
        universePage();
        break;

      case '#/exploration':
        explorationPage();
        break;

      default:
        notFoundPage();
    }
  }

  return {
    homeRoute,
    universeRoute,
    explorationRoute,
    body,
    universePage,
    homePage,
    explorationPage,
    routeChange,
    notFoundPage
  }
}