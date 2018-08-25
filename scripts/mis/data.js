//根据用户进行数据处理

function getSelectData(obj,nameArr) {
  //得到checkbox选中的值(多维数组)
  var checkbox = document.getElementsByTagName(obj);
  var allData = new Array();
  for(i = 0; i < nameArr.length; i++) {
    allData[i] = new Array();
  }
  for(i = 0; i < checkbox.length; i++) {
    if(checkbox[i].checked && checkbox[i].value != 0) {
      for(j = 0; j < nameArr.length; j++) {
        if(checkbox[i].name === nameArr[j]) {
          var myObject = new Object();
          myObject.id = checkbox[i].name;
          myObject.text = checkbox[i].nextSibling.nodeValue;
          allData[j].push(myObject);
        }
      }
    }
  }
  return allData;
}

function getNameArr(obj) {
  var checkbox = document.getElementsByTagName(obj);
  var regionNum = 0, productNum = 0;
  for(i = 0; i < checkbox.length; i++) {
    if(checkbox[i].checked && checkbox[i].value != 0) {
      if (checkbox[i].name === "region") {
        regionNum += 1;
      } else {
        productNum += 1;
      }
    }
  }
  if(regionNum === 1 && productNum != 1) {
    return ["region","product"];
  } else {
    return ["product","region"];
  }
}
