let reviewCount = localStorage.getItem('reviewCount') || 0;
reviewCount++;
localStorage.setItem('reviewCount', reviewCount);

//me no entender xd
document.getElementById('reviewCount').textContent = localStorage.getItem('reviewCount') || 0;  