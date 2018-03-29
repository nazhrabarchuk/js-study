var formMenu = document.forms.formMenu;
var formCrTable1 = document.forms.formCrTable;
var formCreateOl = document.forms.formCreateOl;

function getId(a) {
    return document.getElementById(a);
}
getId('BtnUndlin').style.textDecoration = 'underline';

var checkB = 0;
getId('BtnBold').onclick = function () {
    if (checkB == 1) {
        getId('contentText').style.fontWeight = 'normal';
        checkB = 0;
    } else if (checkB == 0) {
        getId('contentText').style.fontWeight = 'bold';
        checkB = 1;
    }
}
var checkI = 0;
getId('BtnItalic').onclick = function () {
    if (checkI == 1) {
        getId('contentText').style.fontStyle = 'normal';
        checkI = 0;
    } else if (checkI == 0) {
        getId('contentText').style.fontStyle = 'italic';
        checkI = 1;
    }
}
var checkU = 0;
getId('BtnUndlin').onclick = function () {
    if (checkU == 1) {
        getId('contentText').style.textDecoration = 'none';
        checkU = 0;
    } else if (checkU == 0) {
        getId('contentText').style.textDecoration = 'underline';
        checkU = 1;
    }
}

//Button for fontSize change
var list1 = formMenu.listSize;
list1.onchange = function () {
    for (var i = 0; i < list1.options.length; i++) {
        var options1 = list1.options[i];
        if (options1.selected) {
            getId('contentText').style.fontSize = options1.value
        }
    }
}
//Button for fontFamily change
var list2 = formMenu.listStyle;
list2.onchange = function () {
    for (var a = 0; a < list2.options.length; a++) {
        var options2 = list2.options[a];
        if (options2.selected) {
            getId('contentText').style.fontFamily = options2.value;
        }
    }
}
//Button for change TextColor
getId('BtnColor').onclick = function () {
    getId('TextColChange').style.display = 'flex';
    getId('TextColChange').style.position = 'fixed';
    getId('BgColChange').style.display = 'none';
    getId('BgColorOnly').style.display = 'none';
    getId('BtnBgCol').style.display = 'none';
    getId('BtnBgImg').style.display = 'none';
    if (getId('TextColChange').style.display == 'flex') {
        getId('header').style.opacity = 0.5;
        getId('contentText').style.opacity = 0.5;
    }
}

//choose FontFamily 
var listFamily = formMenu.listStyle;
for (var l = 0; l < listFamily.options.length; l++) {
    var optionFamily = listFamily.options[l];
    optionFamily.style.fontFamily = optionFamily.value;
}

//Change TextColor
for (var b = 0; b < 9; b++) {
    var colsT = ['red', 'green', 'brown', 'yellow', 'grey', 'aqua', 'blue', 'black', 'violet'];
    document.getElementsByClassName('TextCol')[b].style.backgroundColor = colsT[b];
}
for (var d = 0; d < 9; d++) {
    document.getElementsByClassName('TextCol')[d].onclick = function () {
        getId('contentText').style.color = this.style.backgroundColor;
    }
}
//Change BackgroundColor
for (var q = 0; q < 9; q++) {
    var colsBg = ['green', 'red', 'violet', 'gray', 'yellow', 'blue', 'aqua', 'black', 'brown'];
    document.getElementsByClassName('bgCol')[q].style.backgroundColor = colsBg[q];
}

//Background Btn
getId('BtnBgrnd').onclick = function () {
    getId('BgColorOnly').style.display = 'flex';
    getId('BgColChange').style.display = 'none';
    getId('TextColChange').style.display = 'none';
    getId('BtnBgImg').style.display = 'block';
    document.getElementsByClassName('BtnBgImg')[0].style.display = 'block';
    getId('BgColorOnly').style.width = '314px';
    getId('BgColorOnly').style.height = '322px';
    for (var f = 0; f < 9; f++) {
        document.getElementsByClassName('bgCol')[f].onclick = function () {
            document.body.style.backgroundColor = this.style.backgroundColor;
        }
        if (getId('BgColorOnly').style.display == 'flex') {
            getId('header').style.opacity = 0.5;
            getId('contentText').style.opacity = 0.5;
        }
    }
}

//Change BackgroundImage
document.getElementsByClassName('bgImg')[0].onclick = function () {
    document.body.className = 'i1';
    document.body.style.backgroundImage = '';
}
document.getElementsByClassName('bgImg')[1].onclick = function () {
    document.body.className = 'i2';
    document.body.style.backgroundImage = '';
}
document.getElementsByClassName('bgImg')[2].onclick = function () {
    document.body.className = 'i3';
    document.body.style.backgroundImage = '';
}
document.getElementsByClassName('bgImg')[3].onclick = function () {
    document.body.className = 'i4';
    document.body.style.backgroundImage = '';
}
document.getElementsByClassName('bgImg')[4].onclick = function () {
    document.body.className = 'i5';
    document.body.style.backgroundImage = '';
}
document.getElementsByClassName('bgImg')[5].onclick = function () {
    document.body.className = 'i6';
    document.body.style.backgroundImage = '';
}
document.getElementsByClassName('bgImg')[6].onclick = function () {
    document.body.className = 'i7';
    document.body.style.backgroundImage = '';
}
document.getElementsByClassName('bgImg')[7].onclick = function () {
    document.body.className = 'i8';
    document.body.style.backgroundImage = '';
}
document.getElementsByClassName('bgImg')[8].onclick = function () {
    document.body.className = 'i9';
    document.body.style.backgroundImage = '';
}

//Btn Background Image
getId('BtnBgImg').onclick = function () {
    getId('TextColChange').style.display = 'none';
    getId('BgColorOnly').style.display = 'none';
    getId('BgColChange').style.display = 'flex';
    getId('BgColChange').style.width = '393px';
    getId('BgColChange').style.height = '373px';
    getId('BgColChange').style.right = '650px';
    document.getElementsByClassName('BtnBgCol')[0].style.display = 'block';
    document.getElementsByClassName('BtnBgImg')[0].style.display = 'none';
    getId('BtnBgImg').style.display = 'none';
    getId('BtnBgCol').style.display = 'block';
    if (getId('BgColorOnly').style.display == 'flex') {
        getId('header').style.opacity = 0.5;
        getId('contentText').style.opacity = 0.5;
    }
}

//Btn Background Color
getId('BtnBgCol').onclick = function () {
    getId('BgColorOnly').style.display = 'flex';
    getId('BgColChange').style.display = 'none';
    getId('BtnBgImg').style.display = 'block';
    document.getElementsByClassName('BtnBgImg')[0].style.display = 'block';
    getId('BgColorOnly').style.width = '314px';
    getId('BgColorOnly').style.height = '322px';
    for (var f = 0; f < 9; f++) {
        document.getElementsByClassName('bgCol')[f].onclick = function () {
            document.body.style.backgroundColor = this.style.backgroundColor;
            document.body.className = ' ';
        }
    }
}
//choose img from comp
getId('ChoseFile').addEventListener('change', readURL, true);

function readURL() {
    var file = getId('ChoseFile').files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        document.body.style.backgroundImage = "url(" + reader.result + ")";
        document.body.style.backgroundSize = 'cover';
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {

    }
}

//RadioBtn left center right
formMenu.radioList[0].onclick = function () {
    if (formMenu.radioList[0].checked == true) {
        getId('contentText').style.textAlign = 'left';
        getId('content').style.justifyContent = 'flex-start';
        for (var a = 0; a < document.getElementsByTagName('ol').length; a++) {
            document.getElementsByTagName('ol')[a].style.alignItems = 'flex-start';
        }
        for (var b = 0; b < document.getElementsByTagName('table').length; b++) {
            document.getElementsByTagName('table')[b].style.margin = '10px';
        }
    }
}
formMenu.radioList[1].onclick = function () {
    if (formMenu.radioList[1].checked == true) {
        getId('contentText').style.textAlign = 'center';
        getId('content').style.justifyContent = 'center';
        for (var a = 0; a < document.getElementsByTagName('ol').length; a++) {
            document.getElementsByTagName('ol')[a].style.alignItems = 'center';
        }
        for (var b = 0; b < document.getElementsByTagName('table').length; b++) {
            document.getElementsByTagName('table')[b].style.margin = 'auto';
        }
    }
}
formMenu.radioList[2].onclick = function () {
    if (formMenu.radioList[2].checked == true) {
        getId('contentText').style.textAlign = 'right';
        getId('content').style.justifyContent = 'flex-end';
        for (var a = 0; a < document.getElementsByTagName('ol').length; a++) {
            document.getElementsByTagName('ol')[a].style.alignItems = 'flex-end';
        }
        for (var b = 0; b < document.getElementsByTagName('table').length; b++) {
            document.getElementsByTagName('table')[b].style.marginLeft = '900px';
        }
    }
}

//button Edit
getId('BtnEdit').onclick = function () {
    getId('header').style.display = 'none';
    document.getElementsByTagName('header')[0].style.background = 'white';
    getId('EditFormSelect').style.display = 'flex';
    getId('contentText').style.display = 'none';
    getId('textArea').style.display = 'block';
    getId('textArea').value = getId('contentText').innerHTML;
}

//button Save
getId('SaveBtn').onclick = function () {
    getId('header').style.display = 'flex';
    getId('EditFormSelect').style.display = 'none';
    getId('CreateTable').style.display = 'none';
    getId('CreateOlList').style.display = 'none';
    document.getElementsByTagName('header')[0].style.background = 'linear-gradient(to top, gray, white)';
    getId('contentText').style.display = 'block';
    getId('textArea').style.display = 'none';
    getId('contentText').innerHTML = getId('textArea').value;
}
//button Create Table
getId('CreateTableBtn').onclick = function () {
    getId('CreateTable').style.display = 'block';
    getId('CreateOlList').style.display = 'none';
    if (getId('CreateTable').style.display == 'block') {
        getId('EditFormSelect').style.opacity = 0.5;
    }
    for (var i = 0; i <= 6; i++) {
        formCrTable1[i].setAttribute('class', '');
        document.getElementById('CreateTable').style.border = '2px solid black';
        document.getElementById('spanError').innerHTML = ''
    }
}

//button save (table) + validation
getId('SaveTableBtn').onclick = function () {
    var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var check = true;

    for (var i = 0; i <= 6; i++) {
        formCrTable1[i].setAttribute('class', '');
    }
    getId('spanError').innerHTML = '';
    getId('CreateTable').style.border = '2px solid black';
    for (var i = 0; i <= 5; i++) {
        if (formCrTable1[i].value == '') {
            check = false;
            formCrTable1[i].setAttribute('class', 'errorPoint')
        }
        for (var el in formCrTable1[i].value) {
            if (formCrTable1[i].value[el] in nums) {
                if (check != false) {
                    check = true;
                }
            } else {
                check = false;
                formCrTable1[i].setAttribute('class', 'errorPoint')
                break;
            };
        };
    };
    //-------------checks the color of the frame     
    getId('qwe').style.backgroundColor = ''
    var checkColor = getId('qwe').style.backgroundColor;
    getId('qwe').style.backgroundColor = formCrTable1[6].value;

    if (getId('qwe').style.backgroundColor == checkColor) {
        formCrTable1[6].setAttribute('class', 'errorPoint');
        check = false;
    };
    //--------------------------------------    

    if (check == false) {
        getId('CreateTable').style.border = '2px solid red';
        if (document.getElementsByClassName('errorPoint').length > 1) {
            getId('spanError').innerHTML = '*дані поля заповнені некоректно або пусті'
        } else {
            getId('spanError').innerHTML = '*дане поле заповнене некоректно або пусте'
        };
    } else if (check == true) {
        var countTr = getId('CountTr').value;
        var countTd = getId('CountTd').value;
        getId('textArea').value = getId('contentText').innerHTML + ("<table width=" + getId('TbWidth').value + " height=" + getId('TbHeight').value + " cellspacing=" + getId('CellSpace').value + " border=" + getId('TbWeight').value + " bordercolor=" + getId('TbColor').value + ">");
        for (var z = 1; z <= countTr; z++) {
            getId('textArea').value += ("<tr>");
            for (var x = 1; x <= countTd; x++) {
                getId('textArea').value += ("<td>" + "</td>")
            }
            getId('textArea').value += ("</tr>");
        }
        getId('textArea').value += ("</table>");
        getId('textArea').style.opacity = 1;
        getId('EditFormSelect').style.opacity = 1;
    };
};
//Reset button (table)
document.getElementById('ResetTbBtn').onclick = function () {
    for (var i = 0; i <= 6; i++) {
        formCrTable1[i].setAttribute('class', '');
        document.getElementById('CreateTable').style.border = '2px solid black';
        document.getElementById('spanError').innerHTML = ''
    }
    for (var t = 0; t < formCrTable1.reset.length; t++) {
        formCrTable1.reset[t].value = '';
    }
}

//Reset button (list)
getId('ResetOlBtn').onclick = function () {
    getId('typeListR1').checked = true;
    getId('ItemCount').value = '';
    getId('ItemCount').style.border = '';
    getId('ErrorP').style.display = 'none';
    document.getElementById('CreateOlList').style.border = '2px solid black';
    getId('selectMarkerType').style.display = 'inline-block';
    getId('selectMarkerTypeUl').style.display = 'none';
}
//button Create List
getId('CreateListBtn').onclick = function () {
    getId('CreateOlList').style.display = 'block';
    getId('CreateTable').style.display = 'none';
    if (getId('CreateOlList').style.display == 'block') {
        getId('EditFormSelect').style.opacity = 0.5;
        getId('ItemCount').style.border = '';
        getId('ErrorP').style.display = 'none';
        document.getElementById('CreateOlList').style.border = '2px solid black';
    }
}

//Ol or UL
formCreateOl.r1[0].onclick = function () {
    if (formCreateOl.r1[0].checked == true) {
        getId('selectMarkerType').style.display = 'inline-block';
        getId('selectMarkerTypeUl').style.display = 'none';
    }
}
formCreateOl.r1[1].onclick = function () {
    if (formCreateOl.r1[1].checked == true) {
        getId('selectMarkerType').style.display = 'none';
        getId('selectMarkerTypeUl').style.display = 'inline-block'
    }
}

//Create List + validation of the list
getId('SaveOlBtn').onclick = function () {
    var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var check = true;
    if (getId('ItemCount').value == '') {
        check = false;
        getId('ItemCount').style.border = '1.2px solid red';
    }
    for (var el in getId('ItemCount').value) {

        if (getId('ItemCount').value[el] in nums) {
            if (check != false) {
                check = true;
            }
        } else {
            check = false;
            getId('ItemCount').style.border = '1.2px solid red';
            break;
        };
    };
    if (check == false) {
        getId('CreateOlList').style.display = 'block';
        getId('CreateOlList').style.border = '2px solid red';
        getId('ErrorP').style.display = 'block';

    } else if (check == true) {
        var countList = getId('ItemCount').value;
        if (formCreateOl.r1[0].checked == true) {
            getId('textArea').value = getId('contentText').innerHTML + ("<" + formCreateOl.r1[0].value + " type= " + getId('selectMarkerType').value + ">");
            for (var t = 0; t < countList; t++) {
                getId('textArea').value += ("<li>" + "item" + (t + 1) + "</li>");
            }
            getId('textArea').value += ("</" + formCreateOl.r1[0].value + ">");
        } else if (formCreateOl.r1[1].checked == true) {
            getId('textArea').value = getId('contentText').innerHTML + ("<" + formCreateOl.r1[1].value + " type= " + getId('selectMarkerTypeUl').value + ">");
            for (var w = 0; w < countList; w++) {
                getId('textArea').value += ("<li>" + "item" + (w + 1) + "</li>");
            }
            getId('textArea').value += ("</" + formCreateOl.r1[1].value + ">");
        }
        getId('textArea').style.opacity = 1;
        getId('EditFormSelect').style.opacity = 1;
        getId('ItemCount').style.border = '';
        getId('ErrorP').style.display = 'none';
        document.getElementById('CreateOlList').style.border = '2px solid black';
    };
};

//jquery fade window  BtnColor & BtnBgCol & BtnBgImg
var containerCol = $("#TextColChange");
var containerBg = $("#BgColorOnly");
var containerImg = $("#BgColChange");
$(document).mouseup(function (e) {
    if (containerCol.has(e.target).length === 0 && containerBg.has(e.target).length === 0 && containerImg.has(e.target).length === 0) {
        containerCol.hide();
        containerBg.hide();
        containerImg.hide();
        getId('header').style.opacity = 1;
        getId('contentText').style.opacity = 1;
    }
});

//jquery fade window для CreateTable & CreateList
var containerList = $("#CreateOlList");
var containerTable = $("#CreateTable");
$(document).mouseup(function (e) {
    if (containerList.has(e.target).length === 0 && containerTable.has(e.target).length === 0) {
        containerList.hide();
        containerTable.hide();
        getId('textArea').style.opacity = 1;
        getId('EditFormSelect').style.opacity = 1;
    }
});

// button Block
getId('BlockButton').onclick = function () {
    getId('Block').style.display = 'flex';
    getId('password').value = '';
}
// block window
getId('password').onfocus = function () {
    getId('password').value = '';
}
getId('Enter').onclick = function () {
    if (getId('password').value != 'password') {
        getId('WrongPassword').style.display = 'block';
        getId('formPassword').style.display = 'none';
        getId('RepeatPass').style.display = 'block';
        getId('BlockWindow').style.border = '2px solid red';
    } else {
        getId('Block').style.display = 'none';
    }
}
//button Enter Again
getId('RepeatPass').onclick = function () {
    getId('formPassword').style.display = 'block';
    getId('RepeatPass').style.display = 'none';
    getId('WrongPassword').style.display = 'none';
    getId('BlockWindow').style.border = '2px solid black';
    getId('password').value = '';
}
