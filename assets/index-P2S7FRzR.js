(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();async function o(){let a="";try{a=(await(await fetch("https://turajarmin.github.io/json_1/db.json")).json()).menu.map(t=>`
        <li class="nav-item">
          <a class="nav-link text-white text-capitalize" href=${t.link}>${t.name}</a>
        </li>`),document.querySelector(".navbar-nav").insertAdjacentHTML("afterbegin",a.join(""))}catch(r){console.log(r.message)}}async function c(){let a="";try{a=(await(await fetch("https://6624d25904457d4aaf9d0adb.mockapi.io/products")).json()).map(t=>` <div class="col-5">
            <h3>title:${t.title}</h3>
            <p class="text-truncate">description:${t.description}</p>
            <img src=${t.image} class="img-fluid" alt="" />
            <div class="d-flex justify-content-between">
              <p>price:${t.price}</p>
              <p>rate:${t.rate}</p>
            </div>
          </div>`),document.querySelector(".products").insertAdjacentHTML("afterbegin",a.join(""))}catch(r){console.log(r.message)}}async function l(){let a="";try{a=(await(await fetch("https://turajarmin.github.io/json_1/db.json")).json()).slider.map(t=>`
            <div class="swiper-slide">
                <img src=${t.image} alt=${t.alt} />
            </div>`),document.querySelector(".swiper-wrapper").insertAdjacentHTML("afterbegin",a.join(""))}catch(r){console.log(r.message)}}async function d(){await o(),await l(),await c(),u()}d();function u(){new Swiper(".mySwiper",{spaceBetween:0,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}
