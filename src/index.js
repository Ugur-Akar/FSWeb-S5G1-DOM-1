const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */
const divContainer = document.body.children[0];

const header = divContainer.children[0];
const headerNav = header.children[0];

for(let i = 0; i < headerNav.children.length; i++){
  headerNav.children[i].textContent = siteContent["nav"]["nav-item-" + (i + 1)];
  headerNav.children[i].setAttribute("class","italic");
}

const headerImg = header.children[1];
headerImg.setAttribute("src", siteContent.images["logo-img"]);

const ctaSection = divContainer.getElementsByClassName("cta")[0];
const ctaHeader = ctaSection.children[0].children[0];
const ctaButton = ctaSection.children[0].children[1];
const ctaImg = ctaSection.children[1];

ctaHeader.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;
ctaImg.setAttribute("src", siteContent.images["cta-img"]);

const mainSection = divContainer.getElementsByClassName("main-content")[0];
const textContainers =  mainSection.getElementsByClassName("text-content");
const mainImg = mainSection.getElementsByTagName("img")[0];

let h4Arr = new Array();
let mainTextArr = new Array();
for(let key in siteContent["ana-içerik"]){
  if(key.includes("h4")){
    h4Arr.push(siteContent["ana-içerik"][key]);
  }
  else{
    mainTextArr.push(siteContent["ana-içerik"][key]);
  }
}

for(let i = 0; i < textContainers.length; i++){
  textContainers[i].children[0].textContent = h4Arr[i];
  textContainers[i].children[1].textContent = mainTextArr[i];
}

mainImg.setAttribute("src", siteContent.images["accent-img"]);

const contactSection = divContainer.getElementsByClassName("contact")[0];
const contactHeader = contactSection.children[0];
const contactParas = contactSection.getElementsByTagName("p");

contactHeader.textContent = siteContent["iletisim"]["iletişim-h4"];
let conArr = new Array();
for(let key in siteContent["iletisim"]){
  if(!key.includes("h4")){
    conArr.push(siteContent["iletisim"][key]);
  }
}

for(let i = 0; i < contactParas.length; i++){
  contactParas[i].textContent = conArr[i];
}

const footer = divContainer.children[divContainer.children.length - 1];

footer.children[0].textContent = siteContent["footer"]["copyright"];
footer.children[0].setAttribute("class", "bold");