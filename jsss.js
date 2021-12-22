

    var backCol = document.getElementById('bdy')

        function toggleMenu(toggleId,list){
            let Logo = document.getElementById(toggleId),
            myList = document.getElementById(list)
            if(Logo && myList){
                Logo.addEventListener('click',()=>{
                    myList.classList.add('show')
                    backCol.style.backgroundColor = 'rgba(0,0,0,0.4)'
                    backCol.style.transition = '.4s';

                })
            }
        }

        toggleMenu('logo','myList')

        var closeList = document.getElementsByClassName('navList')[0]

        closeList.addEventListener('click',()=>{
        this.classList.remove('show')
            backCol.style.backgroundColor = ''
        })

        var myImages = document.getElementsByClassName('imgBox')
        var lightBox = document.getElementById('openLightBox')
        var closeModal = document.getElementsByClassName('closes')[0]

        closeModal.addEventListener('click',()=>{
            lightBox.style.display = 'none'
        })
        for (let i = 0; i < myImages.length; i++) {
            myImages[i].addEventListener('click',()=>{
                if (window.innerWidth >= 768) {
                    lightBox.style.display = 'block'
                }
                // lightBox.style.display = 'block'
            })
            
        }

        var closeList = document.getElementsByClassName('navItem')
        for (let i = 0; i < closeList.length; i++) {
            closeList[i].addEventListener('click',()=>{
                myList.classList.remove('show')
                backCol.style.backgroundColor = ''
                lightBox.style.display = 'none'
            })
        }

        /*## code for controling the image slide show */
        slideIndex = 1;
        showSlides(slideIndex)
        function showSlides(n) {
            
        var myImages = document.getElementsByClassName('imgBox')
        var myModal = document.getElementsByClassName('modalImg')
        var myThumbs = document.getElementsByClassName('thumbImg')
        
        for (let i = 0; i < myImages.length; i++) {
             myImages[i].style.display = 'none'
        }
        for (let i = 0; i < myModal.length; i++) {
            myModal[i].style.display = 'none'
       }

        for (let i = 0; i < myThumbs.length; i++) {
            myThumbs[i].className = myThumbs[i].className.replace('active','')
            
        }
       

        if(n > myImages.length){
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = myImages.length
        }

        myImages[slideIndex - 1].style.display = 'block'
        myModal[slideIndex - 1].style.display = 'block'
        myThumbs[slideIndex - 1].className +=  ' active'
       
       
}


function plusSlide(n) {
    showSlides(slideIndex += n) 
}

function currentImg(n) {
    showSlides(slideIndex = n)
}
/*## Code to cconrol the add t cart function ##*/

        // Decleare all variables
        var showCart = document.getElementsByClassName('cart')[0];
        var emptyCart = document.getElementsByClassName('empty')[0];
        var addCart = document.getElementsByClassName('added')[0];
        var num = document.getElementById('num')
		var demo = document.getElementById('demo')
		var answ = document.getElementById('answ')
		var Switch = document.getElementById('switch')
		var myCart = document.getElementById('myCart')
		var deleteCart = document.getElementsByClassName('delete')[0]
		
		showCart.onclick =  function() {
			 myCart.classList.toggle('toggleCart')
			}
		
		function addNum() {
			 num.value++
			}
			
			function subNum() {
				num.value--
				if (num.value < 0) {
					num.value = 0
				}
			
			}


		var sumVal = num.value * demo.value;
		function addToCart() {

			answ.innerHTML = '$'+demo.value +' x '+ num.value +' $<b>'+sumVal+'</b>';
            if (num.value > 0) {
                addCart.style.visibility = 'visible';
                Switch.style.display = 'block'
                emptyCart.innerHTML = ''
            }
            addCart.innerHTML = num.value;
           
		}
        deleteCart.addEventListener('click',function(){
			this.parentElement.style.display = 'none'
            addCart.style.visibility = 'hidden'
            num.value = 0;
		})