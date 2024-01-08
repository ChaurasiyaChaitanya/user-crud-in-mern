
function Card(props) {

    return (
        <>
            {props.data.map((user) => {
                const { _id, username, email } = user;
                return (
                    <div key={_id} className='card'>
                        <h2>{username.toUpperCase()}</h2>
                        <h5>{email}</h5>
                    </div>
                )
            })}
        </>
    )

}

export default Card;