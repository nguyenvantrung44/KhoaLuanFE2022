import moment from "moment";


export const formatDateTime = (dataTime)=>{
    return  moment(dataTime).format("DD/MM/YYYY") 
}