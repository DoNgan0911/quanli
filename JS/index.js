
// Đổi màu logo và thanh navbar khi cuộn trang
// window.addEventListener('scroll', function() {
//     var logo = document.getElementById("logo_1").style;
//     var navbar = document.getElementById("navbar_1").style
//     if (window.scrollY === 0) {
//     logo.backgroundImage = "linear-gradient(#6FC5AE,#84CEBA5F,#91D4C200)";
//     logo.backgroundColor = "#fff";
//     navbar.backgroundColor = "transparent";

//     } else {
//       navbar.backgroundColor="#dfdfdf";

//       logo.backgroundColor = "#dfdfdf";

//     }
//   });




// SLIDESHOW

// var background = document.querySelectorAll('.background img')
// var dot = document.querySelectorAll('.next')


// dot.forEach( function(dott, index){
//   dott.addEventListener('click', function(){
//     const activeDot = document.querySelector('.dot .active');
//     if (activeDot) {
//       activeDot.classList.remove('active');
//     }

//     dot[index].classList.add('active')

//     background[0].style.opacity=0;
//     setTimeout(()=> {

//       if(index == 0) background[0].src = "./img/Background.svg"
//       background[0].src = background[index].getAttribute('src');
//       background[0].style.opacity=1;
//     },400)
//   })

// })




// SLIDESHOW tự chuyển

  

    // ===================== THANH TÌM KIẾM ========================

    var search  = document.querySelector('.icon-search')
    var inputhihi = document.querySelector('.input')
    var inputhehe = document.querySelector('.input-text')

    var close = document.querySelector('.close')
    
    var logo = document.getElementById("logo_1").style;
    var navbar = document.getElementById("navbar_1").style

    var click = document.querySelector('.click_icon')
    var profile = document.querySelector('.profile')
    var name_click = document.querySelector('.name_click')



    
    // ===================== ICON LOGIN ========================
   
    
    click.addEventListener('click', function(){
      profile.classList.remove('hidden')
      inputhihi.classList.add('hidden')
      close.classList.add('hidden')
      
    })
    name_click.addEventListener('click', function(){
      profile.classList.add('hidden')
    
    })

    // ===================== ký hiệu giỏ hàng khi có hàng ========================

    // var sign = document.querySelector('.sign')
    // var dot_click = document.querySelector('.dot_click')

    // dot_click.addEventListener('click', function(){
    //   sign.classList.remove('hidden')
    // })




    // ==========================MODAL xóa khách hàng=================
    var sure_delete = document.querySelectorAll(".delete")
    var modal_delete = document.querySelector(".modalx")
    var cancel = document.querySelectorAll(".cancel")
    
    
    // const openModal = function(){
    //   modal_delete.classList.remove('hidden')
    // }

    const openModal = function(event){
      event.preventDefault()
      modal_delete.classList.remove('hidden')
      const link = this.getAttribute('href')
      const yesButton = document.querySelector('.modalx button[type="button"]')
      yesButton.addEventListener('click', function(){
          window.location.href = link
      })
  }
    const closeModal = function(){
      modal_delete.classList.add('hidden')
    }

    for(let i = 0; i <sure_delete.length ; i++){
      sure_delete[i].addEventListener('click',openModal)
    }
    for(let i = 0; i <cancel.length ; i++){
      cancel[i].addEventListener('click',closeModal)
    }


   


   

    








