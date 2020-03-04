let elem = x => document.querySelector(x);
let bold = document.querySelector('.form-check-input1')
let italic = document.querySelector('.form-check-input2')
let underline = document.querySelector('.form-check-input3')
let strike = document.querySelector('.form-check-input4')
let leftside = document.querySelector('.form-check-input5')
let center = document.querySelector('.form-check-input6')
let rightside = document.querySelector('.form-check-input7')
let colortext = document.querySelector('.form-check-input8')
let hideNav = document.querySelector('.hideNav')
let save = document.querySelector('.save')
let text = document.querySelector('.text')
let nav = document.getElementsByTagName('nav')
let arial = document.querySelector('.f1')
let georgia = document.querySelector('.f2')
let impact = document.querySelector('.f3')
let times = document.querySelector('.f4')
let verdana = document.querySelector('.f5')
let s12 = document.querySelector('.s1')
let s14 = document.querySelector('.s2')
let s16 = document.querySelector('.s3')
let s18 = document.querySelector('.s4')
let s20 = document.querySelector('.s5')
let s22 = document.querySelector('.s6')
let s25 = document.querySelector('.s7')
let s30 = document.querySelector('.s8')
let red = document.querySelector('.red')
let green = document.querySelector('.green')
let blue = document.querySelector('.blue')
let aquamarine = document.querySelector('.aquamarine')
let purple = document.querySelector('.purple')
let khaki = document.querySelector('.khaki')
let crimson = document.querySelector('.crimson')
let coral = document.querySelector('.coral')
let deepskyblue = document.querySelector('.deepskyblue')
let check = true;



bold.addEventListener('click', function() {
    if (check) {
        text.style.fontWeight = 'bold';
        check = false

    } else {
        text.style.fontWeight = 'normal';
        check = true
    }
})
let check2 = true;
italic.addEventListener('click', function() {
    if (check2) {
        text.style.fontStyle = 'italic';
        check2 = false

    } else {
        text.style.fontStyle = 'normal';
        check2 = true
    }
})
let check3 = true;
underline.addEventListener('click', function() {
    if (check3) {
        text.style.textDecoration = 'underline';
        check3 = false

    } else {
        text.style.textDecoration = 'none';
        check3 = true
    }
})
let check4 = true;
strike.addEventListener('click', function() {
    if (check4) {
        text.style.textDecoration = 'line-through';
        check4 = false

    } else {
        text.style.textDecoration = 'none';
        check4 = true
    }
})
let check5 = true;
leftside.addEventListener('click', function() {
    text.style.textAlign = 'left';

})
let check6 = true;
center.addEventListener('click', function() {
    text.style.textAlign = 'center';

})
let check7 = true;
rightside.addEventListener('click', function() {
    text.style.textAlign = 'right';

})
arial.addEventListener('click', function() {
    text.style.fontFamily = arial.innerText

})
georgia.addEventListener('click', function() {
    text.style.fontFamily = georgia.innerText
})
impact.addEventListener('click', function() {
    text.style.fontFamily = impact.innerText
})
times.addEventListener('click', function() {
    text.style.fontFamily = times.innerText
})
verdana.addEventListener('click', function() {
    text.style.fontFamily = verdana.innerText
})

s12.addEventListener('click', function() {
    text.style.fontSize = s12.innerText
})
s14.addEventListener('click', function() {
    text.style.fontSize = s14.innerText
})
s16.addEventListener('click', function() {
    text.style.fontSize = s16.innerText
})
s18.addEventListener('click', function() {
    text.style.fontSize = s18.innerText
})
s20.addEventListener('click', function() {
    text.style.fontSize = s20.innerText
})
s22.addEventListener('click', function() {
    text.style.fontSize = s22.innerText
})
s25.addEventListener('click', function() {
    text.style.fontSize = s25.innerText
})
s30.addEventListener('click', function() {
    text.style.fontSize = s30.innerText
})

colortext.addEventListener('click', function() {
    red.onclick = function() {
        text.style.color = 'red';
    }

    green.onclick = function() {
        text.style.color = 'green';
    }

    blue.onclick = function() {
        text.style.color = 'blue';
    }
    aquamarine.onclick = function() {
        text.style.color = 'aquamarine';
    }
    crimson.onclick = function() {
        text.style.color = 'crimson';
    }
    purple.onclick = function() {
        text.style.color = 'purple';
    }
    khaki.onclick = function() {
        text.style.color = 'khaki';
    }
    coral.onclick = function() {
        text.style.color = 'coral';
    }
    deepskyblue.onclick = function() {
        text.style.color = 'deepskyblue';
    }
})

elem('.back1').addEventListener('click', function() {
    elem('body').style.background = 'red';
})

elem('.back2').onclick = function() {
    elem('body').style.backgroundColor = 'green';
}

elem('.back3').onclick = function() {
    elem('body').style.backgroundColor = 'blue';
}
elem('.back4').onclick = function() {
    elem('body').style.backgroundColor = 'aquamarine';
}
elem('.back5').onclick = function() {
    elem('body').style.backgroundColor = 'crimson';
}
elem('.back6').onclick = function() {
    elem('body').style.backgroundColor = 'purple';
}
elem('.back7').onclick = function() {
    elem('body').style.background = 'khaki';
}
elem('.back8').onclick = function() {
    elem('body').style.backgroundColor = 'coral';
}
elem('.back9').onclick = function() {
    elem('body').style.backgroundColor = 'deepskyblue';
}


elem('.img1').addEventListener('click', function() {
    elem('body').style.background = `url('images/img1.jpg')`
})
elem('.img2').addEventListener('click', function() {
    elem('body').style.background = `url('images/img2.jpg')`
})
elem('.img3').addEventListener('click', function() {
    elem('body').style.background = `url('images/img3.jpeg')`
})
elem('.img4').addEventListener('click', function() {
    elem('body').style.background = `url('images/img4.jpg')`
})
elem('.img5').addEventListener('click', function() {
    elem('body').style.background = `url('images/img5.jpg')`
})
elem('.img6').addEventListener('click', function() {
    elem('body').style.background = `url('images/img6.jpg')`
})

elem('#option1').addEventListener('click', function() {
    elem('.file').style.display = 'none'
    elem('.images').style.display = 'none'
    elem('#backcolors').style.display = 'flex'
})

elem('#option2').addEventListener('click', function() {
    elem('#backcolors').style.display = 'none'
    elem('.file').style.display = 'none'
    elem('.images').style.display = 'flex'
})

elem('#option3').addEventListener('click', function() {
    elem('#backcolors').style.display = 'none'
    elem('.images').style.display = 'none'
    elem('.file').style.display = 'block'

})

hideNav.addEventListener('click', function() {
    elem('.nav1').style.display = 'none';
    elem('.nav2').style.display = 'block'
    elem('textarea').value = text.innerHTML
    elem('textarea').style.display = 'block'
    text.style.display = 'none'

})
save.addEventListener('click', function() {
    elem('.nav1').style.display = 'block';
    elem('.nav2').style.display = 'none'
    elem('textarea').style.display = 'none'
    text.innerHTML = elem('textarea').value
    text.style.display = 'block'

})
elem('.createTable').addEventListener('click', function() {
    let tr = ``
    let td = ``
    let typeborder = ``
    let colorborder = ``
    for (let k = 0; k < elem('.typeborder').options.length; k++) {
        // console.log(f4.colors.options[i])
        if (elem('.typeborder').options[k].selected) {
            typeborder = elem('.typeborder').options[k].value

        }
    }

    for (let l = 0; l < elem('.colorborder').options.length; l++) {
        // console.log(f4.colors.options[i])
        if (elem('.colorborder').options[l].selected) {
            colorborder = elem('.colorborder').options[l].value

        }
    }

    let style = `style ="width:${elem('.widthTD').value}px; height:${elem('.heightTD').value}px; border:${elem('.widthborder').value}px ${typeborder} ${colorborder}"`

    for (let j = 0; j < elem('.countTD').value; j++) {
        td += `<td ${style}>TD</td>`
    }

    for (let i = 0; i < elem('.countTR').value; i++) {
        tr += `<tr>${td}</tr>`
    }

    elem('textarea').value += `<table>${tr}</table>`
})
elem('.resetTable').addEventListener('click', function() {
    elem('.countTR').value = ''
    elem('.countTD').value = ''
    elem('.widthTD').value = ''
    elem('.heightTD').value = ''
    elem('.widthborder').value = ''
})
elem('.createlistOL').addEventListener('click', function() {
    let typelist = ``
    for (let i = 0; i < elem('.listtype').options.length; i++) {
        // console.log(f4.colors.options[i])
        if (elem('.listtype').options[i].selected) {
            typelist = elem('.listtype').options[i].value

        }
    }
    let list = ``
    for (i = 0; i < elem('.countLI').value; i++) {
        list += `<li>Item ${i}</li>`
    }
    elem('textarea').value += `<ol type='${typelist}'>${list}</ol>`

})
elem('.resetListOL').addEventListener('click', function() {
    elem('.countLI').value = ''
})


elem('.createlistUL').addEventListener('click', function() {
    let typelist = ``
    for (let i = 0; i < elem('.listtype2').options.length; i++) {
        // console.log(f4.colors.options[i])
        if (elem('.listtype2').options[i].selected) {
            typelist = elem('.listtype2').options[i].value

        }
    }
    let list = ``
    for (i = 0; i < elem('.countLI2').value; i++) {
        list += `<li>Item ${i}</li>`
    }
    elem('textarea').value += `<ul type='${typelist}'>${list}</ul>`

})
elem('.resetListUL').addEventListener('click', function() {
    elem('.countLI2').value = ''
})

let login = document.querySelector('.log')
let password = document.querySelector('.pass')
let send = document.querySelector('.button1')
let modal = document.querySelector('.fade1')
let span = document.querySelector('.span')
let par1 = document.querySelector('.par1')
let par2 = document.querySelector('.par2')

send.addEventListener('click', function() {
    if (login.value == 'admin' && password.value == 'admin') {
        modal.style.display = 'none'
        send.setAttribute('data-dismiss', 'modal')
    } else {
        par1.style.display = 'inline-block'
        par2.style.display = 'inline-block'
    }

})