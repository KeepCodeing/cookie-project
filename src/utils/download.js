import axios from 'axios'
export const download = (filename, link) => {
  axios({
    url: link,
    method: 'get',
    responseType: "blob",
  }).then(data => {
    let url = window.URL.createObjectURL(new Blob([data.data]));
    let link = document.createElement('a');
    link.style.display = 'none';
    link.href = url;
    link.setAttribute('download', filename + '.png');

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
};
