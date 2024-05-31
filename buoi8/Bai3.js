var x = Math.round(Math.random()); // Tạo ra một số bất kì 0 hoặc 1
var KT = prompt("Nhâp một trong hai số bất kì là 0 và 1 ");
document.write("chon 1 hoac 0 <br><br>");
if (KT == x) {
  document.write("Thầy Huấn <br><br> ");
} else {
  document.write("Em Tú Senna  <br><br> ");
}

document.write("chon bat ki 1-10 <br><br>");

//  Tạo biến x có giá trị ngẫu nhiên từ 0 đến 10
var Y = Math.floor(Math.random() * 11);
var KQ = prompt("Nhâp một trong hai số bất kì từ 0 đến 10 ");

// In giá trị của x ra màn hình
if (KQ == Y) {
  document.write("  Bốc Bát Họ Mà Làm Thêm Ván Nữa ");
} else {
  document.write(" Về Đi Đừng Nghiện ");
}
