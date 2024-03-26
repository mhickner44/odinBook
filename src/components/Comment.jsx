
export default function Comment(comment) {
 
    comment = comment.comment

    return (
        <>

            <p>{comment.comment}</p>
            <h4>user {comment.userID}</h4>
            <h4>likes:{comment.likes}</h4>
        </>
    )


}