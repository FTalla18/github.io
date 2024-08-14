document.addEventListener('DOMContentLoaded', function() {
    const carListings = document.getElementById('car-listings');
    const filterForm = document.getElementById('filter-form');
    const noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = 'No cars match your criteria.';
    noResultsMessage.style.display = 'none'; // Initially hide the message

    // Updated car data
    const cars = [
        { name: "Grey Nissan Sentra SV 2015", type: "compact", price: 45, image: "Grey Sentra 2015 SV.jpg" },
        { name: "Silver Kia Optima LX 2014", type: "sedan", price: 58, image: "Silver Kia Optima 2014.jpg" },
        { name: "Red Kia Optima LX 2012", type: "sedan", price: 55, image: "Red Kia Optima 2012.jpg" },
        { name: "Silver Kia Sorento LX 2016", type: "suv", price: 72, image: "Silver Kia Sorento 2016.jpg" },
        { name: "Everlasting Silver Kia Sorento LX 2022", type: "premium-suv", price: 85, image: "Everlasting Silver Kia Sorento 2022.jpg" },
        { name: "Silver Nissan Sentra SV 2013", type: "compact", price: 45, image: "Silver Sentra 2013.jpg" },
        { name: "White Kia Optima LX 2017", type: "sedan", price: 63, image: "White Kia Optima 2017.jpg" }
    ];

    function displayCars(carsToShow) {
        carListings.innerHTML = '';
        if (carsToShow.length === 0) {
            noResultsMessage.style.display = 'block';
            carListings.appendChild(noResultsMessage);
        } else {
            noResultsMessage.style.display = 'none';
            carsToShow.forEach(car => {
                const carCard = document.createElement('div');
                carCard.className = 'car-card';
                carCard.innerHTML = `
                    <img src="${car.image}" alt="${car.name}">
                    <div class="car-info">
                        <h3>${car.name}</h3>
                        <p>Type: ${car.type.charAt(0).toUpperCase() + car.type.slice(1)}</p>
                        <p class="car-price">$${car.price} per day</p>
                    </div>
                `;
                carListings.appendChild(carCard);
            });
        }
    }

    filterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const typeFilter = document.getElementById('car-type-filter').value;
        const priceFilter = document.getElementById('price-filter').value;

        const filteredCars = cars.filter(car => {
            if (typeFilter && car.type !== typeFilter) return false;
            if (priceFilter === 'low' && car.price > 50) return false;
            if (priceFilter === 'medium' && (car.price <= 50 || car.price > 70)) return false;
            if (priceFilter === 'high' && car.price <= 70) return false;
            return true;
        });

        displayCars(filteredCars);
    });

    // Initial display of all cars
    displayCars(cars);
});
