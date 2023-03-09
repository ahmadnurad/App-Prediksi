(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });


    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    // Pagination
    $(function () {
        const rowsPerPage = 10
        const rows = $(".dataframe tbody tr")
        const rowsCount = rows.length
        const pageCount = Math.ceil(rowsCount / rowsPerPage)
        const numbers = $('#numbers')

        for (let i = 0; i < pageCount; i++) {
            numbers.append('<li><a href="#">' + (i + 1) + '</a></li>')
        }

        $('#numbers li:first-child a').addClass('active')
        displayRows(1)
        $('#numbers li a').click(function (e) {
            let $this = $(this)
            e.preventDefault()
            $('#numbers li a').removeClass('active')
            $this.addClass('active')
            displayRows($this.text())
        })

        function displayRows(index) {
            let start = (index - 1) * rowsPerPage
            let end = start + rowsPerPage
            rows.hide()
            rows.slice(start, end).show()
        }
    });

})(jQuery);

// const form = document.querySelector("#form");
// const fileInput = document.querySelector("#file");
// const progressArea = document.querySelector(".progress-area");
// const uploadedArea = document.querySelector(".uploaded-area");

// form.addEventListener("click", () =>{
//   fileInput.click();
// });

// fileInput.onchange = ({target})=>{
//   let file = target.files[0];
//   if(file){
//     let fileName = file.name;
//     if(fileName.length >= 12){
//       let splitName = fileName.split('.');
//       fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
//     }
//     uploadFile(fileName);
//   }
// }

// function uploadFile(name){
//   let xhr = new XMLHttpRequest();
//   xhr.open("POST", "/");
//   xhr.upload.addEventListener("progress", ({loaded, total}) =>{
//     let fileLoaded = Math.floor((loaded / total) * 100);
//     let fileTotal = Math.floor(total / 1000);
//     let fileSize;
//     (fileTotal < 1024) ? fileSize = fileTotal + " KB" : fileSize = (loaded / (1024*1024)).toFixed(2) + " MB";
//     let progressHTML = `<li class="row">
//                           <i class="fas fa-file-alt"></i>
//                           <div class="content">
//                             <div class="details">
//                               <span class="name">${name} • Uploading</span>
//                               <span class="percent">${fileLoaded}%</span>
//                             </div>
//                             <div class="progress-bar">
//                               <div class="progress" style="width: ${fileLoaded}%"></div>
//                             </div>
//                           </div>
//                         </li>`;
//     uploadedArea.classList.add("onprogress");
//     progressArea.innerHTML = progressHTML;
//     if(loaded == total){
//       progressArea.innerHTML = "";
//       let uploadedHTML = `<li class="row">
//                             <div class="content upload">
//                               <i class="fas fa-file-alt"></i>
//                               <div class="details">
//                                 <span class="name">${name} • Uploaded</span>
//                                 <span class="size">${fileSize}</span>
//                               </div>
//                             </div>
//                             <i class="fas fa-check"></i>
//                           </li>`;
//       uploadedArea.classList.remove("onprogress");
//       uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);
//     }
//   });
//   let data = new FormData(form);
//   xhr.send(data);
// }

let fadeTarget = document.querySelector(".loading")

function show_loading() {
    fadeTarget.style.display = "block";
    fadeTarget.style.opacity = 1;
}
function hide_loading() {
    // fadeTarget.style.display = "none";
    let fadeEffect = setInterval(() => {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect)
            fadeTarget.style.display = "none"
        }
    },100)
}