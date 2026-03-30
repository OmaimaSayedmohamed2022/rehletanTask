

export const  normalizeSupplierA =(data) => {
    return data.map(item => ({
        id : item.hotelId,
        name : item.name,
        city : item.city,
        price : item.price,
        currency : item.currency,
        stars : item.stars,
        available : item.available,
        supplier : 'A'
    }));
}

export const  normalizeSupplierB =(data) => {
    return data.map(item => ({
        id : item.id,
        name : item.hotel_name,
        city : item.location.cityName,
        price : item.pricing.amount,
        currency : item.pricing.currencyCode,
        stars : item.rating,
        available : item.isAvailable,
        supplier : 'B'
    }));
}