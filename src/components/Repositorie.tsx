import axios from "axios"
import { useState } from "react"

export function Repositorie() {
    const [user, setUser] = useState({
        avatar: '',
        name: '',
        bio: '',
        location: ''
    })

    async function getData() {
        const response = await axios.get('https://api.github.com/users/moutinhofuturedev')
        const data = await response.data

        setUser({
            avatar: data.avatar_url,
            name: data.name,
            bio: data.bio,
            location: data.location
        })
    }

    getData()

    return(
        <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '10px',

            fontFamily: 'Helvetica, sans-serif',
        }}
        >
            <h4>Usuário do Github</h4>
            <a href="https://github.com/moutinhofuturedev" target={"_blank"} >
                <img src={user.avatar} alt="Imagem do usuário" title="Imagem do usuário"
                    style={{
                        borderRadius: '9999px',
                        border: '2px solid #000000',
                        padding: '2px',
                        height: '72px',
                        width: '72px',
                        marginBottom: '8px',
                        cursor: 'pointer'
                    }}
                />
            </a>
            <span>{user.name}</span>
            <span>{user.bio}</span>
            <span>{user.location}</span>
        </div>
    )
}