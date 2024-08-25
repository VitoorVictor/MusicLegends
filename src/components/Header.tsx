function header() {

    return(
        <header className="bg-dark-10/90 h-24 w-full flex lg:justify-around justify-between p-4  md:p-12 lg:p-0 items-center text-lg absolute top-0">
            <div className="text-white lg:flex justify-start gap-10 items-center hidden w-80">
                <h2>Início</h2>
                <h2>Buscar</h2>
                <h2>Minha biblioteca</h2>
            </div>
            <div className="text-brand-color md:text-3xl text-2xl w-52 text-center">
                <h1>Music Legends</h1>
            </div>
            <div className="user text-white o lg:flex justify-end items-center gap-10 hidden w-80">
                <h2>Conta</h2>
                <img src="https://via.placeholder.com/50x50" alt="profile" className="border rounded-full w-12"/>
            </div>
            <div className="user text-white w-auto flex justify-between items-center gap-5 lg:hidden">
                <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 12C30 12.3315 29.8683 12.6495 29.6339 12.8839C29.3995 13.1183 29.0815 13.25 28.75 13.25H1.25C0.918479 13.25 0.600537 13.1183 0.366117 12.8839C0.131696 12.6495 0 12.3315 0 12C0 11.6685 0.131696 11.3505 0.366117 11.1161C0.600537 10.8817 0.918479 10.75 1.25 10.75H28.75C29.0815 10.75 29.3995 10.8817 29.6339 11.1161C29.8683 11.3505 30 11.6685 30 12ZM1.25 3.25H28.75C29.0815 3.25 29.3995 3.1183 29.6339 2.88388C29.8683 2.64946 30 2.33152 30 2C30 1.66848 29.8683 1.35054 29.6339 1.11612C29.3995 0.881696 29.0815 0.75 28.75 0.75H1.25C0.918479 0.75 0.600537 0.881696 0.366117 1.11612C0.131696 1.35054 0 1.66848 0 2C0 2.33152 0.131696 2.64946 0.366117 2.88388C0.600537 3.1183 0.918479 3.25 1.25 3.25ZM28.75 20.75H1.25C0.918479 20.75 0.600537 20.8817 0.366117 21.1161C0.131696 21.3505 0 21.6685 0 22C0 22.3315 0.131696 22.6495 0.366117 22.8839C0.600537 23.1183 0.918479 23.25 1.25 23.25H28.75C29.0815 23.25 29.3995 23.1183 29.6339 22.8839C29.8683 22.6495 30 22.3315 30 22C30 21.6685 29.8683 21.3505 29.6339 21.1161C29.3995 20.8817 29.0815 20.75 28.75 20.75Z" fill="white"/>
                </svg>
                <img src="https://via.placeholder.com/50x50" alt="profile" className="border rounded-full w-12"/>
            </div>
        </header>
    )
}
export default header;