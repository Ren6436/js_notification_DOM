var e=function(e,t,i,n,s){var a=document.createElement("div");a.classList.add("notification",s);var o=document.createElement("h2");o.classList.add("title"),o.textContent=i,a.appendChild(o);var d=document.createElement("p");d.classList.add("description"),d.textContent=n,a.appendChild(d),a.style.top=e+"px",a.style.right=t+"px",document.body.appendChild(a),setTimeout(function(){a.style.visibility="hidden"},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.8a697310.js.map