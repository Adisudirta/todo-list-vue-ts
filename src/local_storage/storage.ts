const key: string = "VUE-TODO-KEY";


const checkForStorage = () => {
    return typeof(Storage) !== "undefined"
}


const accesStorage = (action: String, todoData: any = null) => {
    if(checkForStorage()){
        if (action === "GET") {
            return JSON.parse(localStorage.getItem(key) || "[]");
        } else if (action === "SET" && todoData !== null) {
            localStorage.setItem(key, JSON.stringify(todoData));
        }
    }
}

export default accesStorage;