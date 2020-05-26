$(document).ready(() => {
    var data;
    $.ajax({
        url: '/static/data/xmldata',
        async: false,
        success: (xmlData) => {
            let parser = new DOMParser();
            data = parser.parseFromString(xmlData, 'text/xml');
        }
    });

    let baseLink = data.querySelector('archive').getAttribute('path');
    let groups = data.querySelectorAll('group');
    for (let i in groups) {
        let group = groups[i];

        let groupBlock = $('<div></div>');

        let image = {
            link: group.querySelector('image').innerHTML,
            width: group.querySelector('image').getAttribute('width')
        };
        groupBlock.append(`<img src="${image.link}" usemap="#nav-map${i}">`)

        let map = $(`<map name="nav-map${i}"></map>`);
        let articles = group.querySelector('articles').querySelectorAll('article');
        for (let article of articles) {
            let articleLink = article.querySelector('link').innerHTML;
            let shape = article.querySelector('area').querySelector('shape').innerHTML;
            let coords = article.querySelector('area').querySelector('coords').innerHTML;

            map.append(`<area shape="${shape}" coords="${coords}" href="${baseLink + articleLink}">`);
        }

        groupBlock.append(map);

        $('main').append(groupBlock);
    }
});