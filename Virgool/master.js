//note: how to get full scroll when main is 100vh???
let fullScroll

function getScroll() {
    fullScroll = (document.getElementById('content').clientHeight) - (document.getElementsByTagName('html')[0].clientHeight)
    // console.log(fullScroll)

}
getScroll()
window.addEventListener('resize', getScroll)



let currentScroll
currentScroll = document.getElementsByTagName('main')[0].scrollTop

document.getElementsByTagName('main')[0].addEventListener('scroll', () => {
    currentScroll = document.getElementsByTagName('main')[0].scrollTop
    // console.log(currentScroll)

    document.getElementsByClassName('line')[0].style.width=(((currentScroll/fullScroll)*100) +'%')
})
let e = document.getElementById('progBar')
document.getElementById('progBar').addEventListener('click',(ev)=>{

    document.getElementsByTagName('main')[0].classList.add('smooth')

    document.getElementsByTagName('main')[0].scrollTo(
        0,(((ev.screenX)/(e.clientWidth))*fullScroll)
    )
    console.log((e.clientWidth))

    document.getElementsByTagName('main')[0].classList.remove('smooth')

},true)

function goUp() {
    document.getElementsByTagName('main')[0].scrollTo(0, currentScroll - 20)
}

function goDown() {
    document.getElementsByTagName('main')[0].scrollTo(0, currentScroll + 20)
}

let buttons = document.querySelectorAll('.controlbtn')
let temp
buttons.forEach(element => {
    element.addEventListener('mousedown', () => {
        element.classList.add('activeControl')
        if (element.getAttribute('data-direction') == 'up') {
            temp = setInterval(goUp)
        } else if (element.getAttribute('data-direction') == 'down') {
            temp = setInterval(goDown)
        }
    })
    element.addEventListener('mouseup', () => {
        element.classList.remove('activeControl')
        clearInterval(temp)
    })
});