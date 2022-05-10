export function localGet(name:string){
    const value=localStorage.getItem(name)
    try{
      return JSON.parse(JSON.stringify(localStorage.getItem(name)))
    }catch (err){
        console.log(err)
        return value
    }
}
export function localSet(key:string, value:any){
    localStorage.setItem(key, JSON.stringify(value))
}
