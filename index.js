let count = 0
let countEl = document.getElementById("count-el")
console.log(countEl)
let mem = 0
let str = document.getElementById("display-log").innerText
str += " "


function increment() 
{
   count += 1 
   console.log(count)
   countEl.innerText = count
}
function save() {

    mem = countEl.innerText
    console.log(mem)
    str += mem +" - "
    document.getElementById("display-log").innerText = str
    mem = 0 
    countEl.innerText = 0
    count =0

}




/*function reset() { 
                mem =0 
                count = 0 
                countEl.innerText = 0 
                str = "Previous Entires :  " + mem +" - "
                document.getElementById("display-log").innerText = str
}
*/

