import AxiosImg from '../assets/axios.svg'

export function Header() {
    return (
        <header
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '1px solid #B7C4CF',
            }}
        >
            <a href="https://axios-http.com/ptbr/">
                <img src={AxiosImg} alt="Logo do Axios" title='Logo do Axios'/>
            </a>
        </header>
    )
}