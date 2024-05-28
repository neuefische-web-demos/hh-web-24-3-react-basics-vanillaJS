import { Button } from "./components/Button/Button.js";

const rootElement = document.querySelector("[data-js='root']");

function App() {
  const appContainer = document.createElement("div");
  appContainer.classList.add("App");

  const button1 = Button();
  const button2 = Button();

  appContainer.append(button1, button2);

  return appContainer;
}

const app = App();
rootElement.append(app);
