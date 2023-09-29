function tabuada(){
    var num = document.getElementById('num')
    var tab = document.getElementById('tab')

    var n = Number(num.value)
    var c = 1

    tab.innerHTML=''
    while(c<=10){
        var item = document.createElement('option')
        item.text=`${n} X ${c} = ${n*c}`

        tab.appendChild(item)
        c++
    }
}