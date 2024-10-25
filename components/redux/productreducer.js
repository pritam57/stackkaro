import { DECREASE, INCREASE,  } from "./constant"



export const counterdata = (data =10, action) => {
    switch (action.type) {
            case INCREASE:
              
              
                return data=data+1;

                case DECREASE:
                  
                    
                      return data=data-1;
        default:
            return data;
    }
}