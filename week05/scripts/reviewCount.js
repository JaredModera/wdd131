let reviewCount = localStorage.getItem('reviewCount') || 0;
reviewCount++;
localStorage.setItem('reviewCount', reviewCount);

document.getElementById('reviewCount').textContent = localStorage.getItem('reviewCount') || 0;  
//me no entender xd