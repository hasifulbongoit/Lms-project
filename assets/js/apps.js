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