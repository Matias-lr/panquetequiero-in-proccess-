interface data{
    id:string | number,
    name:string
}
export interface Props{
    id:string,
    name:string,
    placeholder:string,
    data:data[],
    onChange?: (event:any) => void
}