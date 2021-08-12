import { SearchProp, MessageBoxProp } from "@/store/props";
import { SHOW_MESSAGE_BOX } from "@/store/type";
import axios from "axios";

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

export const download = (cdn_url: string) => {
  axios({
    url: cdn_url,
    method: "get",
    responseType: "blob",
  }).then((data) => {
    const url = window.URL.createObjectURL(new Blob([data.data]));
    const link = document.createElement("a");
    const imageName = cdn_url.substr(cdn_url.lastIndexOf('/') + 1);

    link.style.display = "none";
    link.href = url;
    link.setAttribute("download", imageName);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
};
