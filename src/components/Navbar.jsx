import "./navbar.css"

function Navbar() {
    return(
        <div className="flex justify-between  p-4 text-white bg-[#00a96e]">
            <div>
            <h1 className="text-3xl">RDS Store</h1>
            </div>

            <div className="flex gap-5">
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
                <p>Feedback</p>
            </div>
        </div>
    )
}

export default Navbar