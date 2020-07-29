var open:number = 0
export const HandleClick =() =>{
    var sidebar = document.getElementById('sidebar');
    if(open === 0){
        sidebar?.style.setProperty('--width-var','16rem')
        sidebar?.style.setProperty('--nav-link-display-var','block')
        sidebar?.style.setProperty('--logo-svg-rotate-var','rotate(-180deg)')
        open = 1
    }else{
        sidebar?.style.setProperty('--width-var','5rem')
        sidebar?.style.setProperty('--nav-link-display-var','none')
        sidebar?.style.setProperty('--logo-svg-rotate-var','rotate(0deg)')
        open = 0
    }
}
export const HandleClickClose = () =>{
    var sidebar = document.getElementById('sidebar');
    if(open === 1){
        sidebar?.style.setProperty('--width-var','5rem')
        sidebar?.style.setProperty('--nav-link-display-var','none')
        sidebar?.style.setProperty('--logo-svg-rotate-var','rotate(0deg)')
        open = 0
    }
}