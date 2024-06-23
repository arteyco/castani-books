const imageData = [
    { src: 'path/to/image1.jpg', description: 'Abstract Image 1' },
    { src: 'path/to/image2.jpg', description: 'Abstract Image 2' },
    { src: 'path/to/image3.jpg', description: 'Abstract Image 3' },
    { src: 'path/to/image4.jpg', description: 'Abstract Image 4' },
    { src: 'path/to/image5.jpg', description: 'Abstract Image 5' },
    { src: 'path/to/image6.jpg', description: 'Abstract Image 6' },
    { src: 'path/to/image7.jpg', description: 'Abstract Image 7' }
];

function populateTable() {
    const tableBody = document.querySelector('#imageTable tbody');
    imageData.forEach(item => {
        const row = tableBody.insertRow();
        const cellImage = row.insertCell(0);
        const cellDescription = row.insertCell(1);
        
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.description;
        cellImage.appendChild(img);
        
        cellDescription.textContent = item.description;
    });
}

function setupAmazonButton() {
    const button = document.getElementById('amazonLink');
    button.addEventListener('click', () => {
        window.open('https://www.amazon.com/stores/Miguel-Casta%C3%B1eda-Ni%C3%B1o/author/B07K3SN2ZP?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true', '_blank');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateTable();
    setupAmazonButton();
});
