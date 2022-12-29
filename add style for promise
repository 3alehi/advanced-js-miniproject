const addcnd = cdn =>{
    return new Promise((success , error) =>{
        const link = document.createElement('link')
        link.rel = "stylesheet"
        link.href = cdn

        link.onload = () => success("link add")
        link.onerror = ()=> error(new Error("Dont Eror"))
        document.head.append(link)
        
    })


}

console.log(addcnd('s.cs8s')
)
