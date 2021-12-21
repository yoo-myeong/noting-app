import { BaseComponent, Component } from "../component.js";

export interface Composable {
  addChild(child: Component): void;
}

type OncloseListener = () => void;

interface SectionContainer extends Component, Composable {
  setOnCloseListener(listener: OncloseListener): void;
}

type SectionContainerConstructor = {
  new (): SectionContainer;
}; // 아무것도 받지 않는 생성자를

export class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements SectionContainer
{
  private closeListener?: OncloseListener;
  constructor() {
    super(`
    <li class="page-item">
      <section class="page-item__body">
        <div class="page-tiem__controls">
          <button class="close">x</button>
        </div>
      </section>
    </li>`);
    const closeBtn = this.element.querySelector(".close")! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
  }

  addChild(child: Component) {
    const container = this.element.querySelector(
      ".page-item__body"
    )! as HTMLElement;
    child.attachTo(container);
  }

  setOnCloseListener(listener: OncloseListener) {
    this.closeListener = listener;
  }
}

export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable
{
  constructor(private pageItemConstructor: SectionContainerConstructor) {
    super(`<ul class = ""page>This is PageComponent!</ul>`);
  }

  addChild(section: Component) {
    const item = new this.pageItemConstructor();
    item.addChild(section);
    item.attachTo(this.element, "beforeend");
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}
