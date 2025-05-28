const dishes = [
    { name: 'Foie gras Pizza', description: '美味的热汤', imgSrc: 'imgs/soup.png' },
    { name: 'Bouillabaisse plate', description: '经典的炒饭', imgSrc: 'imgs/soup.png' },
    { name: 'Gyro Ice Cream', description: '手工制作的面条', imgSrc: 'imgs/soup.png' },
    { name: 'Spekulaas pasta', description: '传统饺子', imgSrc: 'imgs/soup.png' },
    { name: 'Galaxy Pizza', description: '酥脆的春卷', imgSrc: 'imgs/soup.png' },
    { name: 'Enigma Pasta', description: '经典北京烤鸭', imgSrc: 'imgs/soup.png' },
    { name: 'Fusion Ice Cream', description: '麻辣鸡丁', imgSrc: 'imgs/soup.png' },
    { name: 'Phoenix Plate', description: '辛辣的豆腐', imgSrc: 'imgs/soup.png' },
    { name: 'Harmony Pizza', description: '香甜猪肉', imgSrc: 'imgs/soup.png' },
    { name: 'Mystique Pasta', description: '红烧猪肉', imgSrc: 'imgs/soup.png' },
    { name: 'Zenith Ice Cream', description: '美味的烧麦', imgSrc: 'imgs/soup.png' },
    { name: 'Seraphim Plate', description: '汤汁包子', imgSrc: 'imgs/soup.png' },
    { name: 'Twilight Pizza', description: '炒饭和鸡蛋', imgSrc: 'imgs/soup.png' },
    { name: 'Aurora Pasta', description: '酸辣汤', imgSrc: 'imgs/soup.png' },
    { name: 'Nebula Ice Cream', description: '猪肉和粉条', imgSrc: 'imgs/soup.png' },
    { name: 'Whisper Plate', description: '烤猪肉包', imgSrc: 'imgs/soup.png' },
    { name: 'Velvet Pizza', description: '油炸面条', imgSrc: 'imgs/soup.png' },
    { name: 'Oracle Pasta', description: '糖醋猪肉', imgSrc: 'imgs/soup.png' },
    { name: 'Elysian Ice Cream', description: '糖醋鱼', imgSrc: 'imgs/soup.png' },
    { name: 'Radiance Plate', description: '清蒸鱼', imgSrc: 'imgs/soup.png' }
];

const dishesContainer = document.getElementById('dishes-container');
dishes.forEach((dish) => {
    const isUnaddable = Math.random() < 0.5;
    const dishDiv = document.createElement('div');
    dishDiv.className = 'dish' + (isUnaddable ? ' unaddable' : '');
    dishDiv.innerHTML = `
        <img src="${dish.imgSrc}" alt="${dish.name}" width="100">
        <p>${dish.name}</p>
        <button class="info-button">i</button>
        <div class="description-popup">${dish.description}</div>
        <button style="font-size:25px;color:red" class="add-to-cart">Add to Cart</button>
    `;
    dishesContainer.appendChild(dishDiv);
});

// Function to show the loading screen
function showLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'flex';
}

// Function to hide the loading screen
function hideLoadingScreen() {
    document.getElementById('loading-screen').style.display = 'none';
}

// Function to show the discount popup
function showPopup() {
    const popup = document.getElementById('discount-popup');
    popup.style.display = 'block';
    setTimeout(() => {
        document.getElementById('close-popup').style.display = 'block';
    }, 3000);
}

// Function to add an item to the cart
function addToCart(itemName) {
    const cart = document.getElementById('cart-items');
    const listItem = document.createElement('li');
    listItem.textContent = itemName;
    cart.appendChild(listItem);
    
    // Automatically remove the item from the cart after 20 seconds
    setTimeout(() => {
        if (listItem.parentNode === cart) {
            cart.removeChild(listItem);
        }
    }, 20000);
}

// Function to handle the "Add to Cart" button click
function handleAddToCart(button) {
    if (!button.closest('.dish').classList.contains('unaddable')) {
        showLoadingScreen();
        setTimeout(() => {
            const dishName = button.closest('.dish').querySelector('p').textContent;
            addToCart(dishName);
            hideLoadingScreen();
            window.location.href = 'https://de.aliexpress.com/?src=google&albch=fbrnd&acnt=304-410-9721&isdl=y&aff_short_key=UneMJZVf&albcp=14792646854&albag=126476844174&slnk=&trgt=kwd-14802285088&plac=&crea=621046623501&netw=g&device=c&mtctp=e&memo1=&albbt=Google_7_fbrnd&aff_platform=google&albagn=888888&isSmbActive=false&isSmbAutoCall=false&needSmbHouyi=false&gad_source=1&gclid=CjwKCAjw74e1BhBnEiwAbqOAjJVgffYNOrAMHnNXixL8TlNjwisPxuShOnj7VRcJvf6UxexUG3R0NhoCIzYQAvD_BwE&gatewayAdapt=glo2deu';
        }, 5000);
    }
}

// Event listener for "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => handleAddToCart(button));
});

// Event listener for the close button on the discount popup
document.getElementById('close-popup').addEventListener('click', () => {
    showLoadingScreen();
    setTimeout(() => {
        document.getElementById('discount-popup').style.display = 'none';
        document.getElementById('close-popup').style.display = 'none';
        hideLoadingScreen();
    }, 5000); // Delay hiding the popup for 5 seconds to show the loading screen
});

// Show the discount popup every 10 seconds
setInterval(showPopup, 20000);
