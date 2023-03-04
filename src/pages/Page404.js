import {Link}          from "react-router-dom";
const Page404 = () => {
    return(
        <div>
            <p style={{'textAlign':'center','fontWeight':'bold','fontSize':'24px','color':'#2096f3'}}>Page doesn`t exist</p>
            <Link  to='/' style={{'display':'block','textAlign':'center','fontWeight':'bold','fontSize':'24px','marginTop':'30px'}}>Back to main page</Link>
        </div>
    )
}

export default Page404;