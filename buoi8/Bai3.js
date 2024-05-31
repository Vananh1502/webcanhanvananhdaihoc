var x = Math.round(Math.random()); // Tạo ra một số bất kì 0 hoặc 1
var KT = prompt("Chọn  một trong hai số bất kì là 0 và 1 ");
document.write("CHỌN 1 HOẶC 0  <br><br>");
if (KT == x) {
  document.write("BẠN ĐÃ CHỌN ĐÚNG  <br><br> ");
} else {
  document.write("BẠN ĐÃ CHỌN SAI  <br><br> ");
}

document.write("CHỌN 1 SỐ TỪ 1 ĐẾN 10  <br><br>");

//  Tạo biến x có giá trị ngẫu nhiên từ 0 đến 10
var Y = Math.floor(Math.random() * 11);
var KQ = prompt("Nhâp một số bất kì từ 0 đến 10 ");

// In giá trị của x ra màn hình
if (KQ == Y) {
  document.write("  BẠN ĐÃ NHẬP ĐÚNG  ");
} else {
  document.write(" BẠN ĐÃ NHẬP SAI ");
}
