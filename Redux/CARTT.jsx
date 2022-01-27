const initialState = []

export const Cart = (cart = initialState ,action ) => {
    if(action.type === "ADD"){
        let tempCard = cart.filter((item)=>  {
            return item.id === action.payload.id
            })

            if(tempCard < 1){
                return [...cart, action.payload]
            }
    } 
            if(action.type === "Remove_item"){
                return cart.filter((items)=>items.id !== action.payload.id)
                    }




            if(action.type === 'INC'){
                let inc = cart.map((item) => {
                        if(item.id === action.payload.id){
                            return{...item, quantity: item.quantity + 1}
                        }return item
                })
                return inc;
                }



                if(action.type === "DEC"){
                    let Dec = cart.map((item)=>{
                        if(item.id === action.payload.id){
                        
                            return{...item , quantity: item.quantity - 1}
                        }return item
                    })
                    return Dec
                }
           




return cart
}



