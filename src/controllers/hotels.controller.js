import {getHotelsService } from "../services/hotels.service.js";

export const getHotelsController = async (req, res) => {
    try {
        const {city,fail} = req.query
         // fail case
          if (fail === "true") {
         return res.status(500).json({ error: "Service unavailable" });
         }

        let hotels = await getHotelsService()

        // filter case 
        if (city&& typeof city === 'string') {
            hotels = hotels.filter(hotel => hotel.city.toLowerCase() === city.toLowerCase() )
        }
        
        res.send({ status: 200,
             message:"hotels fetched successfully", 
             count: hotels.length, 
             data: hotels });

    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch hotels', message:error.message });
        console.error('Error fetching hotels:', error);
    }
}
