const request = (page, cb, ...args) => {
    const [
        method = 'GET',
        url = 'https://api.chucknorris.io/jokes' + page,
        async = true] = args;
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, async);
    xhr.send();
    xhr.addEventListener('load', (event) => {
        const json = JSON.parse(event.target.response);
        // console.log('request======================>',json);
        if (xhr.status !== 200) {
            console.log(`${xhr.status} : ${xhr.statusText}`);
        }
        else {
           return cb(json);
        }
    });
};

export default request;
