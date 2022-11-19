export class Router {
  routes = {};
  pageBackground = {};

  add(key, value) {
    this.routes[key] = value;
  }

  addBackGround(key, value) {
    this.pageBackground[key] = value;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  handle() {
    const path = window.location.pathname;
    const route = this.routes[path] || this.routes[404];

    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#page').innerHTML = html;
    })

    this.handlebg(path);
  }

  handlebg(path) {
    this.allButtons = document.querySelectorAll('nav a');
    for(const button of this.allButtons) {
      button.classList.remove('select');
    }

    const clickedButton = document.querySelector(`a[href = "${path}"]`);
    clickedButton.classList.add('select');

    const body = document.body;
    body.style.backgroundImage = `url(${this.pageBackground[path]})`;

  }

}