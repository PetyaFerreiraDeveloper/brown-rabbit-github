const highlights = [
    {
        id: 1,
        img: './img/highlight01.jpg'
    },
    {
        id: 2,
        img: './img/highlight02.jpg'
    },
    {
        id: 3,
        img: './img/highlight03.jpg'
    },
    {
        id: 4,
        img: './img/highlight04.jpg'
    },
    {
        id: 5,
        img: './img/highlight05.jpg'
    }
];

const news = [
    {
        id: 1,
        img: './img/article01.jpg',
        title: 'Wonderful Copenhagen 2011',
        date: '23/1-2011',
        description: 'The aim is to understand the science behind our sensory...'
    },
    {
        id: 2,
        img: './img/article02.jpg',
        title: 'Nordic Barista Cup 2011 in Copenhagen',
        date: '22/1-2011',
        description: 'Nordic Barista Cup 2011 will be held in Copenhagen, Denmark...'
    },
    {
        id: 3,
        img: './img/article03.jpg',
        title: '2010 Winners: Sweden',
        date: '12/1-2011',
        description: 'Oh my goodness, the final night is here!...'
    },
    {
        id: 4,
        img: './img/article01.jpg',
        title: 'Wonderful Copenhagen 2011',
        date: '23/1-2011',
        description: 'The aim is to understand the science behind our sensory...'
    },
    {
        id: 5,
        img: './img/article02.jpg',
        title: 'Nordic Barista Cup 2011 ...',
        date: '22/1-2011',
        description: 'Nordic Barista Cup 2011 will be held in Copenhagen, Denmark...'
    },
    {
        id: 6,
        img: './img/article03.jpg',
        title: '2010 Winners: Sweden',
        date: '12/1-2011',
        description: 'Oh my goodness, the final night is here!...'
    },
    {
        id: 7,
        img: './img/article01.jpg',
        title: 'Wonderful Copenhagen 2011',
        date: '23/1-2011',
        description: 'The aim is to understand the science behind our sensory...'
    },
    {
        id: 8,
        img: './img/article02.jpg',
        title: 'Nordic Barista Cup 2011 ...',
        date: '22/1-2011',
        description: 'Nordic Barista Cup 2011 will be held in Copenhagen, Denmark...'
    },
    {
        id: 9,
        img: './img/article03.jpg',
        title: '2010 Winners: Sweden',
        date: '12/1-2011',
        description: 'Oh my goodness, the final night is here!...'
    },
    {
        id: 10,
        img: './img/article01.jpg',
        title: 'Wonderful Copenhagen 2011',
        date: '23/1-2011',
        description: 'The aim is to understand the science behind our sensory...'
    },
    {
        id: 11,
        img: './img/article02.jpg',
        title: 'Nordic Barista Cup 2011 ...',
        date: '22/1-2011',
        description: 'Nordic Barista Cup 2011 will be held in Copenhagen, Denmark...'
    },
    {
        id: 12,
        img: './img/article03.jpg',
        title: '2010 Winners: Sweden',
        date: '12/1-2011',
        description: 'Oh my goodness, the final night is here!...'
    },
    {
        id: 13,
        img: './img/article01.jpg',
        title: 'Wonderful Copenhagen 2011',
        date: '23/1-2011',
        description: 'The aim is to understand the science behind our sensory...'
    },
    {
        id: 14,
        img: './img/article02.jpg',
        title: 'Nordic Barista Cup 2011 ...',
        date: '22/1-2011',
        description: 'Nordic Barista Cup 2011 will be held in Copenhagen, Denmark...'
    },
    {
        id: 15,
        img: './img/article03.jpg',
        title: '2010 Winners: Sweden',
        date: '12/1-2011',
        description: 'Oh my goodness, the final night is here!...'
    }
];

const sponsorsList = [
    {
        id: 101,
        img: './img/sponsors01.jpg'
    },
    {
        id: 102,
        img: './img/sponsors02.jpg'
    },
    {
        id: 103,
        img: './img/sponsors03.jpg'
    },
    {
        id: 104,
        img: './img/sponsors04.jpg'
    },
    {
        id: 105,
        img: './img/sponsors05.jpg'
    },
    {
        id: 106,
        img: './img/sponsors06.jpg'
    },
    {
        id: 107,
        img: './img/sponsors07.jpg'
    },
    {
        id: 108,
        img: './img/sponsors08.jpg'
    },
    {
        id: 109,
        img: './img/sponsors09.jpg'
    },
    {
        id: 110,
        img: './img/sponsors10.jpg'
    },
    {
        id: 111,
        img: './img/sponsors11.jpg'
    },
    {
        id: 112,
        img: './img/sponsors12.jpg'
    },
    {
        id: 113,
        img: './img/sponsors13.jpg'
    },
    {
        id: 114,
        img: './img/sponsors14.jpg'
    },
    {
        id: 115,
        img: './img/sponsors15.jpg'
    },
    {
        id: 116,
        img: './img/sponsors16.jpg'
    },
    {
        id: 117,
        img: './img/sponsors17.jpg'
    },
    {
        id: 118,
        img: './img/sponsors18.jpg'
    },
    {
        id: 119,
        img: './img/sponsors19.jpg'
    },
    {
        id: 120,
        img: './img/sponsors20.jpg'
    },
    {
        id: 121,
        img: './img/sponsors21.jpg'
    },
];

const flickrImages = [
    {
        id: 201,
        img: './img/footer_images01.jpg'
    },
    {
        id: 202,
        img: './img/footer_images02.jpg'
    },
    {
        id: 203,
        img: './img/footer_images03.jpg'
    },
    {
        id: 204,
        img: './img/footer_images04.jpg'
    },
    {
        id: 205,
        img: './img/footer_images05.jpg'
    },
    {
        id: 206,
        img: './img/footer_images06.jpg'
    },
    {
        id: 207,
        img: './img/footer_images07.jpg'
    },
    {
        id: 208,
        img: './img/footer_images08.jpg'
    },
    {
        id: 209,
        img: './img/footer_images09.jpg'
    },
];

// lets set an index for choosing a slider image
let currentItem = 0;

// lets grab the slider image
let img = document.getElementById('slider');

// create a function which generates a random number 
// and changes the src of the img
function randomImage() {
    currentItem = Math.floor(Math.random() * highlights.length);
    let highlight = highlights[currentItem];
    img.src = highlight.img;
}

// lets get the articles
let newsSection = document.getElementById('news');

function printArticle() {
    let articles = news.map(article => 
        `<article class="news-article" id=${article.id}>
            <div class="news-articles-images">
                <img class="news-article-image" src=${article.img} alt="Article image">
            </div>
            <div class="news-articles-details">
                <h2>${article.title}</h2>
                <p class="news-article-posted">Posted: ${article.date}</p>
                <p class="news-article-text">${article.description}</p>
                <button class="read-more">Read more</button>
            </div>
        </article>`
    ).join('');
    newsSection.innerHTML = articles;
}

// lets get the sponsors logos
let sponsorsSection = document.getElementById('sponsors');

function loadSponsors() {
    let sponsorLogo = sponsorsList.map(logo => 
        `<div class="sponsor-image" id=${logo.id}>
        <img class="image" src=${logo.img} alt="logo image">
    </div>`
    ).join('');          
    sponsorsSection.innerHTML = sponsorLogo;
}

// lets get the flickr images
let flickr = document.querySelector('.footer-flickr-images');

function loadFlickr() {
    let flickrImage = flickrImages.map(image => 
        `<div class="flickr-image">
        <img src=${image.img} alt="Flickr image">
    </div>`
        ).join('');
        flickr.innerHTML = flickrImage;
}

// load all images when DOM Content is loaded
window.addEventListener('DOMContentLoaded', function() {
    randomImage()
    printArticle();
    loadSponsors();
    loadFlickr();
    });

// open the mobile nav 

let mobileNav = document.getElementById('mobile-nav');
let hamburgerBars = document.getElementById('hamburger-bars');
let backdrop = document.querySelector('.backdrop');

hamburgerBars.addEventListener('click', function() {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

// hide the mobile nav

backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open');
});