import { normalizeSupplierA,normalizeSupplierB } from "../utlies/normalizer.js";
import { supplierA } from "../providers/supplierA.js";
import { supplierB } from "../providers/supplierB.js";

// get hotels from suppliers A & B
export const getHotelsService = async () => {
    try {
    //parallel fetching
    const [dataA, dataB] =
    await Promise.all([
        supplierA(),
        supplierB()
    ])
    // normalized data 
    const normalizedA =normalizeSupplierA(dataA);
    const normalizedB =normalizeSupplierB(dataB);
    return [...normalizedA, ...normalizedB];
    
    }
    catch (error) {        
       console.error('Error fetching hotels:', error);
    }
    
}

