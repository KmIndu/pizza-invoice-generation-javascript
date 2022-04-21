function ch() {
    var x, y
    x = ""
    y = ""
    x = parseInt(x)
    y = parseInt(y)
    
    y = document.forms['frm']['t2'].value
    if (document.getElementById("r0").checked)
        x = 70
    if (document.getElementById("r1").checked)
        x = 90
    if (document.forms['frm']['c1'].checked)
        x = 50 + x
    if (document.forms['frm']['c2'].checked)
        x = 70 + x
    if (document.forms['frm']['c3'].checked)
        x = 90 + x
    document.frm.t1.value = (x) * y
}