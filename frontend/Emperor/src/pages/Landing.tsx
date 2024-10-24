import Image from "../assets/5047210.png"


export const Landing = () => {

    return (
        <>
            <div style={
                {
                    display: 'flex',
                    flexDirection: 'row',
                }
            }>

            
            <div >
            <p>ORGANISE LIFE WITH SYNCIETY</p>
            <p>Live in a society where you can stay synced with
            each other.</p>
            </div>
            <div>
                <img src={Image} alt="connection image" />
            </div>
            </div>
        </>
    )
}