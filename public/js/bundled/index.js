const e=()=>{const e=document.querySelector(".alert");e&&e.parentElement.removeChild(e)},t=(t,o,s=1e3)=>{e();const n=`<div class="alert alert--${t}">${o}</div>`;document.querySelector("body").insertAdjacentHTML("afterbegin",n),window.setTimeout(e,s)},o=async(e,o)=>{const s={...o};try{let o="http://localhost:3000/api/v1/users/";o+="data"===e?"updateMe":"updatePassword";let n=await fetch(o,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(s)});if(!n.ok)throw n;"success"===(await n.json()).status&&(window.location.reload(!0),t("success",`Updated User ${e} successfully`,2e3))}catch(e){e.text().then((e=>{t("error",JSON.parse(e).message,5e3)}))}},s=document.getElementById("map"),n=document.querySelector(".form--login"),a=document.querySelector(".form-user-data"),c=document.querySelector(".form-user-settings"),r=document.querySelector(".nav__el--logout");if(s){(e=>{mapboxgl.accessToken="pk.eyJ1IjoibjI2dDI3NCIsImEiOiJjbDB1MWc2cHcwaTU4M2pueWFtb2luM210In0.AP8PK2VmZP0_PGKF8hkIpA";const t=new mapboxgl.Map({container:"map",style:"mapbox://styles/n26t274/cl0u2ygzj005315p55cds3i6s",scrollZoom:!1}),o=new mapboxgl.LngLatBounds;e.forEach((e=>{const s=document.createElement("div");s.className="marker",new mapboxgl.Marker({element:s,anchor:"bottom"}).setLngLat(e.coordinates).addTo(t),new mapboxgl.Popup({offset:30}).setLngLat(e.coordinates).setHTML(`<p>Day ${e.day}: ${e.description}</p>`).addTo(t),o.extend(e.coordinates)})),t.fitBounds(o,{padding:{top:200,bottom:100,left:100,right:100}})})(JSON.parse(s.dataset.locations))}n&&n.addEventListener("submit",(function(e){e.preventDefault();(async(e,o)=>{try{const s=await fetch("http://localhost:3000/api/v1/users/login",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,password:o})});if(!s.ok)throw s;"success"===(await s.json()).status&&(window.setTimeout((()=>{location.assign("/")}),500),t("success","Logged in successfully"))}catch(e){e.text().then((e=>{t("error",JSON.parse(e).message,5e3)}))}})(document.getElementById("email").value,document.getElementById("password").value)})),r&&r.addEventListener("click",(async()=>{try{const e=await fetch("http://localhost:3000/api/v1/users/logout",{method:"GET",headers:{"content-type":"application/json"}});if(!e.ok)throw e;"success"===(await e.json()).status&&(window.location.replace("/"),t("success","Logged out successfully",1e3))}catch(e){t("error","Error logging out! Try again.")}})),a&&a.addEventListener("submit",(async function(e){if(!e.target.classList.contains("form-user-data"))return;e.preventDefault(),document.querySelector(".btn--save-settings").textContent="UPDATING...";const t=document.getElementById("name").value,s=document.getElementById("email").value;await o("data",{name:t,email:s}),document.querySelector(".btn--save-settings").textContent="SAVE SETTINGS"})),c&&c.addEventListener("submit",(async function(e){if(!e.target.classList.contains("form-user-settings"))return;e.preventDefault(),document.querySelector(".btn--save-password").textContent="UPDATING...";const t=document.getElementById("password-current").value,s=document.getElementById("password").value,n=document.getElementById("password-confirm").value;await o("password",{oldPassword:t,password:s,passwordConfirm:n}),document.querySelector(".btn--save-password").textContent="SAVE PASSWORD",document.getElementById("password-current").value="",document.getElementById("password").value="",document.getElementById("password-confirm").value=""}));
//# sourceMappingURL=index.js.map
