const featuredCarsSection = document.getElementById('featured-cars');

const featuredCarsData = [
    { brand: 'Toyota', model: 'Corolla', price: '$20,000' },
    { brand: 'Honda', model: 'Civic', price: '$18,000' },
    { brand: 'Ford', model: 'Mustang', price: '$30,000' }
];

featuredCarsData.forEach(car => {
    const carElement = document.createElement('div');
    carElement.classList.add('car');
    carElement.innerHTML = `
        <h3>${car.brand} ${car.model}</h3>
        <p>Price: ${car.price}</p>
    `;
    featuredCarsSection.appendChild(carElement);
});

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const formDataSerialized = Object.fromEntries(formData.entries());
    console.log(formDataSerialized);
});
