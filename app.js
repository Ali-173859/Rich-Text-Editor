

var main_text = document.getElementById('main-text'); 


var btn_1 = document.getElementById('btn_1')
btn_1.addEventListener('click' , () => {

if(main_text.style.fontWeight == 'bold') {
    main_text.style.fontWeight = 'normal'
}
    else{
        main_text.style.fontWeight = 'bold'
    }
});





var btn_2 = document.getElementById('btn_2')
btn_2.addEventListener('click' , () => {
if(main_text.style.fontStyle == 'italic') {
    main_text.style.fontStyle = 'normal'
}
    else{
        main_text.style.fontStyle = 'italic'
    }

 
})

var btn_3 = document.getElementById('btn_3')
btn_3.addEventListener('click' , () => {
    if(main_text.style.fontSize == '80px') {
        main_text.style.fontSize = '50px'
    }
        else{
            main_text.style.fontSize = '80px'
        }
;

})

var btn_4 = document.getElementById('btn_4')
btn_4.addEventListener('click' , () => {
    if(main_text.style.fontFamily== 'monospace') {
        main_text.style.fontFamily = 'normal'
    }
        else{
            main_text.style.fontFamily = 'monospace'
        }
  
})

var btn_5 = document.getElementById('btn_5')
btn_5.addEventListener('click' , () => {
    if(main_text.style.textDecoration == 'underline') {
        main_text.style.textDecoration = 'none'
    }
        else{
            main_text.style.textDecoration = 'underline'
        }
  
})



var btn_6 = document.getElementById('colorpalette')
btn_6.addEventListener('change' , (event) => {
var selectedColor = event.target.value;
main_text.style.color  = selectedColor;
;

})


