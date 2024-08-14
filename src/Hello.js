import { Link } from "react-router-dom"

export const Hello=()=>{
    return (
        <div className="Welcom">
            <h3>这是一个聊天软件</h3>
            <Link to="/Login">请先登录</Link>
        </div>
    )
}