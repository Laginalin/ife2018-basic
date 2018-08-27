//表格渲染

function rendentTable(data1,data2) {
  //渲染表格
  //输出表头
  if(data1 != undefined) {
    var test = getNameArr("input");
    var thead = new Array();
    thead.push("<thead>");
    if(test[0] === "region") {
      thead.push("<th>地区</th>");
      thead.push("<th>商品</th>");
    } else {
      thead.push("<th>商品</th>");
      thead.push("<th>地区</th>");
    }

    for(i = 1; i < 13; i++) {
      thead.push("<th>" + i + "月</th>");
    }
    thead.push("</thead>");
    //遍历数据输出每一行内容：递归法进行排列组合

    var trArr = deExchange(data1,data2);
    var row = trArr.length;
    var tr = new Array();
    for (i = 0; i < row; i++) {
      tr.push("<tr>" + trArr[i] + "</tr>");
    }
    //输出到容器内
    var wrapper = document.getElementById('table-wrapper');
    wrapper.innerHTML = "<table>" + thead.join("") + tr.join("") + "</table>";
  }
}

//排列组合
function deExchange(doubleArr,dataSource) {
  var length = doubleArr.length;
  var len1 = doubleArr[0].length;
  var len2 = doubleArr[1].length;
  var newlen = len1*len2;
  var temp = new Array();
  var index = 0;
  for(i = 0; i < len1; i++) {
    for(j = 0; j < len2; j++) {
      var sale = new Array();
      for(k = 0; k < dataSource.length; k++) {
        if (doubleArr[0][i].id === "region") {
          if(doubleArr[0][i].text === dataSource[k].region && doubleArr[1][j].text === dataSource[k].product) {
            for(n = 0; n < 12; n++) {
              var saleArr = dataSource[k].sale;
              sale.push("<td>" + saleArr[n] + "</td>");
            }
            break;
          }
        } else {
          if(doubleArr[0][i].text === dataSource[k].product && doubleArr[1][j].text === dataSource[k].region) {
            for(n = 0; n < 12; n++) {
              var saleArr = dataSource[k].sale;
              sale.push("<td>" + saleArr[n] + "</td>");
            }
            break;
          }
        }
      }
      if(len1 > 1 || len2 > 1) {
        if(j === 0) {
          temp[index] = '<td rowspan = "' + len2 + '">' + doubleArr[0][i].text + '</td><td>' + doubleArr[1][j].text + '</td>' + sale.join("");
        } else {
          temp[index] = '<td>' + doubleArr[1][j].text + '</td>' + sale.join("");
        }
      } else {
        temp[index] = "<td>" + doubleArr[0][i].text + "</td><td>"+ doubleArr[1][j].text+ "</td>" + sale.join("");
      }
      index = index + 1;
    }
  }
  return temp;
  //注释掉的部分是使用递归法得出不确定长度的二维数组的排列组合情况；
  /*if (length >= 2) {
    var len1 = doubleArr[0].length;
    var len2 = doubleArr[1].length;
    var newlen = len1*len2;
    var temp = new Array();
    var index = 0;
    for(i = 0; i < len1; i++) {
      for(j = 0; j < len2; j++) {
        temp[index] = "<td>" + doubleArr[0][i].text + "</td><td>"+ doubleArr[1][j].text+ "</td>";
        index = index + 1;
      }
    }
    var newArray = new Array(length-1);
    for( i = 2; i < length; i++) {
      newArray[i-1] = doubleArr[i];
    }
    newArray[0] = temp;
    return deExchange(newArray);
  }
  return doubleArr[0];*/
}
