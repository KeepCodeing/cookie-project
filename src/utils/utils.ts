import { SearchProp, MessageBoxProp } from "@/store/props";
import { SHOW_MESSAGE_BOX } from "@/store/type";

export const createTeleportElement = (eid: Array<string>) => {
  eid.map((id) => {
    const div = document.createElement("div");
    div.id = id;
    document.body.appendChild(div);
  });
};

export const showMessageBox = (config: MessageBoxProp, store: any) => {
  store.commit(SHOW_MESSAGE_BOX, config);
};

export const object2Parma = (parma: SearchProp) =>
  Object.keys(parma)
    .map((key) => {
      if (
        key === "keyword" ||
        key === "type" ||
        key === "join" ||
        key === "pn" ||
        key === "limit"
      )
        return key + "=" + parma[key];
    })
    .join("&");
