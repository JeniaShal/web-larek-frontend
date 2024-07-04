import { IViewModal } from "../../types";
import { ensureElement } from "../../utils/utils";
import { IEvents } from "../base/events";
import { View } from "./View";

class ViewModal<IViewModal> extends View<IViewModal> {
  protected _content: HTMLElement;
  protected _buttonClose: HTMLButtonElement;

  constructor (containter: HTMLElement, events: IEvents) {
    super(containter, events)
    this._content = ensureElement<HTMLElement>('.modal__content', containter);
    this._buttonClose = ensureElement<HTMLButtonElement>('.modal__close', containter);

    this._buttonClose.addEventListener('click', ()=> {
      this.close()
    })
  }

  open() {                                                      // открыть модальное окно
    this.toggleClass(this.container, 'modal_active', true);
    this.events.emit('viewModal:open')
  }

  close() {                                                     // закрыть модальное окно
    this.toggleClass(this.container, 'modal_active', false);
    this.events.emit('viewModal:close');
  }

  set content(value: HTMLElement) {                             // запись содержания контента (вставить внутрь модального окна)
    this._content.replaceChildren(value);

}
}