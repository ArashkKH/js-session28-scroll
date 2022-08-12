
//note: how to get full scroll when main is 100vh???
let fullScroll
function getScroll() {
    fullScroll   = (document.getElementsByTagName('main')[0].clientHeight) - (document.getElementsByTagName('html')[0].clientHeight)
}
getScroll()
window.addEventListener('resize', getScroll)
alert(fullScroll)



let currentScroll

document.getElementsByTagName('main')[0].addEventListener('scroll', () => {
    currentScroll = document.getElementsByTagName('main')[0].scrollTop
    console.log(currentScroll)
    // alert('')
})