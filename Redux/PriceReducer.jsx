const initialState = 0


export const PriceReducer = (price = initialState ,action ) => {


                if(action.type === "PRICEINC"){
                    return  price =  price + action.payload
                } 
                
                if(action.type === "PRICEDEC"){
                    return  price =  price - action.payload
                } 
                return price
}


