import { GlobalProp, MessageBoxProp } from "@/store/props";
import { SHOW_MESSAGE_BOX } from "@/store/type";

export const createMessageBoxContainer = () => {
    const div = document.createElement('div');
    // div.setAttribute('class', 'h-full w-full fixed top-0');
    // div.style.zIndex = '-1';
    div.id = 'message_box';
    document.body.appendChild(div);
}

export const showMessageBox = (config: MessageBoxProp, store: any) => {
    store.commit(SHOW_MESSAGE_BOX, config);
}
