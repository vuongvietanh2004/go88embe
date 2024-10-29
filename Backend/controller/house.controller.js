import House from "../model/house.model.js"

export const getHouse=async(req,res)=>{
    try {
        const house= await House.find();
        res.status(200).json(house);
    } catch (error) {
        console.log("Error: ",error);
        res.status(500).json(error);
    }
};
