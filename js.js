let i = 1;
let q = document.querySelectorAll('.simg').length;

function changimg(c) {
    i = c;
    turnimg();
}

function turnimg() {
    if (i > q) {
        i = 1;
    }
    
    document.querySelectorAll('.simg').forEach(imgs => imgs.style.display = 'none');
    document.querySelectorAll('.sib').forEach(sib => sib.style.backgroundColor = 'white');
    
    document.getElementById(`i${i}`).style.display = 'block';
    document.getElementById(`b${i}`).style.backgroundColor = 'gray';
}

turnimg(); // 初始顯示第一張圖片

setInterval(() => {
    i = (i % q) + 1;
    turnimg();
}, 3000);