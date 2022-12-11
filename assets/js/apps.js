
// review

{

    let studentReveiwBtn = document.getElementsByClassName("student_reviews_content")

    ;[...studentReveiwBtn].forEach((reveiwsItem,index) => {
        let studentReveiwItem = document.getElementsByClassName("student_reviews_item")[index]
        reveiwsItem.addEventListener("click", function(){
            studentReveiwItem.classList.toggle("activeReviews")
        })
    });

}

// strciky header
{
    let mainHeader = document.getElementById("myHeader")
    let sticky = mainHeader.offsetTop;

    window.addEventListener("scroll", function(){
        if(window.pageYOffset > sticky){
            mainHeader.classList.add("sticky")
        }
        else{
            mainHeader.classList.remove("sticky")
        }
    })

}

{
    let headerList = document.getElementById("header_nav_list")
    let headerListItem = headerList.children

    ;[...headerListItem].forEach(listItem => {
        listItem.addEventListener("click", function(){
            ;[...headerListItem].forEach(listItemInner => {
                listItemInner.classList.remove("activeList")
            });
            this.classList.add("activeList")
        })
    });

    let activeToggle = document.getElementById("activeToggle")

    let mobileNav = document.getElementById("mobile_nav")

    activeToggle.addEventListener("click", function(){
        activeToggle.classList.toggle("activeToggle")
        mobileNav.classList.toggle("activeMobileNav")
    })

}

// banner slider

{
    let arrowLeft = document.getElementById("arrow_left")
    let arrowRighr = document.getElementById("arrow_right")
    let sliderItem = document.getElementsByClassName("banner_item")

    let left = 0;
    let sliderSize = 100;
    let totalSize = sliderItem.length * sliderSize

    // arrow left

    arrowLeft.addEventListener("click", function(){
        left -= sliderSize
        if(left <= 0){
            left = 0 
        }
        moveSliderItem(left)
    })

    // arrow right

    arrowRighr.addEventListener("click", function(){
        left += sliderSize
        if(left >= totalSize){
            left = totalSize - 100;
        }
        moveSliderItem(left)
    })


    // move function

    function moveSliderItem(left){
       ;[...sliderItem].forEach(moveItem => {
          moveItem.style.left = - left + "%"
       }); 
    }

}

