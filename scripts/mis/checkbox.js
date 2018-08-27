//checkbox 用户交互

//document.write("<script language=javascript src='table.js'></script>");
//document.write("<script language=javascript src='data.js'></script>");



function getCheckBoxArr(arr) {
  //生成CheckBox选项的参数
  var myArray = new Array();
  for(i = 1; i < arr.length; i++) {
    var myObject = new Object();
    myObject.value = i;
    myObject.text = arr[i];
    myArray.push(myObject);
  }
  return myArray;
}

function createCheckBox(wrapper,arr,name) {
  //生成checkBox选项
  var html = new Array();
  var all = '<label><input type = "checkbox" value = "0" name = "' + name + '" checkbox-type = "all">全选</label>';
  html.push(all);
  for(i = 0; i < arr.length; i++) {
    var value, text, inText;
    value = arr[i].value;
    text = arr[i].text;
    if (value === 1) {
      inText = '<label><input type = "checkbox" value = "' + value + '" name = "' + name + '" checkbox-type = "item" checked = "checked">' + text + '</label>';
    } else {
      inText = '<label><input type = "checkbox" value = "' + value + '" name = "' + name + '" checkbox-type = "item">' + text + '</label>';
    }
    html.push(inText);
  }
  wrapper.innerHTML = html.join("");

  //事件委托
  wrapper.onclick = function(e) {
    var target = e.target || e.srcElement;
    if(target.control === "input") {
      target = target.firstElementChild;
    }
    var type;
    if (target.getAttribute('type') === "checkbox" || target.control === "input") {
      type = target.getAttribute('checkbox-type');
      if (type === "all") {
        allSelected(target);
      } else {
        itemSelected(target);
      }
    }
    rendentTable(getSelectData("input",getNameArr("input")),sourceData);
  }
}

function allSelected(obj) {
  //全选事件
  var name = obj.name;
  var checkbox = document.getElementsByName(name);
  for(i = 0; i < checkbox.length; i++) {
    checkbox[i].checked = true ;
  }
}

function itemSelected(obj) {
  //单选事件
  var name = obj.name;
  var checkbox = document.getElementsByName(name);
  var index = 0;
  for(i = 0; i < checkbox.length; i++) {
    if(checkbox[i].checked) {
      index = index + 1;
    }
  }
  if(index === 0) {
    obj.checked = true;
  } else {
    if (index === (checkbox.length - 1)) {
      if(checkbox[0].checked === false) {
        checkbox[0].checked = true;
      } else {
        checkbox[0].checked = false;
      }
    }
  }
}
