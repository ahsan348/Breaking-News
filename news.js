console.log('hello');

let newsaccordion = document.getElementById('News-accordion');
let source = 'bbc-news';
let apikey = 'a3658aad66msh24c7bda96b7bea4p1ff82djsn975a95fe5ab7';

let xhr = new XMLHttpRequest();
xhr.open('Get', `https://newsapi.org/v2/top-headlines?sources=${source}&apikey=${apikey}`, true);
xhr.onload = function () {
    if (this.status === 200) {
        let Json = JSON.parse(this.responseText);
        let articles = Json.articles;
        console.log(articles);
        let newsHTMl = "";
        articles.forEach(function (element, index) {
            let news = `
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-heading${index}">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${index}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${index}">
                          <b> Breaking News ${index+1} &nbsp;</b>  ${element['title']}
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapse${index}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                        <div class="accordion-body">
                        ${element['content']}. <a href="${element['url']}" target="_blank">Read more here</a> 
                        </div >
                        </div >
                    </div> `
            newsHTMl += news;
        });
        newsaccordion.innerHTML = newsHTMl;
    }
    else {
        console.log('Some error occured');
    }
}
xhr.send();



