axios.get("https://leonardoapi.onrender.com/songs")
    .then((res) => {
        console.log(res.data.songs)
        res.data.songs.map((song) => {

            console.log(song.path.front)

            const div = document.createElement("div")

            div.classList.add("bg-neutral-700", "px-16", "py-8", "gap-4",
            
            div.innerHTML='
            
            
            
            '
        
            
            )

        })


    })





const handlerclick = () => {


}

const button = document.getElementById("handler.button")

if (button !== null) {

    button.addEventListener("click", () => {
        const cadena = "esto es una cadena de texto"
        console.log(cadena)
    })





}