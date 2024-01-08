
function Card(props) {

    return (
        <>
            {props.data.map((user) => {
                const { _id, username, email } = user;
                return (
                    <div key={_id} className='card'>
                        <h2>{username.toUpperCase()}</h2>
                        <h5>{email}</h5>
                        <div className="d-flex gap-2">
                            <button className='mt-4 w-50 btn btn-primary'>Update</button>
                            <button className='mt-4 w-50 btn btn-danger' type="submit" onClick={(e) => props.deleteHandler(e, _id)}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </>
    )

}

export default Card;