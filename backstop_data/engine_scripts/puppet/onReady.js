module.exports = async (page, scenario, vp) => {
    page.evaluate(async () => {
        document.querySelectorAll('img').forEach((elem) => {
          elem.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
          elem.lazy = "eager";
          elem.decoding = "sync"
        });
        
        document.querySelectorAll('iframe').forEach((elem) => {
            elem.src = "about:blank"
        })
    });
};
