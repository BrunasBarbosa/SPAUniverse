export class Router {

  routes = {}

  add(hash, page) {
    this.routes[hash] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  handle() {
    const { hash } = window.location;
    const route = this.routes[hash] || this.routes[404];

    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html
      });
  }
}