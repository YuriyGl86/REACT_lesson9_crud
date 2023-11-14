import logo from '../../img/13a411076cdee39085cad97da215d9be.png'
import moment from 'moment/moment';
// import { NavLink } from "react-router-dom"

export  function Post({ post }) {

    const secondsCalculator = (date)=>{
        const  startTime = moment(date);
        const now = moment()
        const  minutesDiff = now.diff(startTime, 'minutes');
        if(minutesDiff<60){return minutesDiff + ' мин. назад'}
        else if (minutesDiff< 1440){return Math.floor(minutesDiff/60) + ' часов назад'}
        return  now.diff(startTime, 'days') + ' дней назад'  
      }  

  return (
    // <NavLink to={`/posts/${post.id}`}className='post-link'>

        <div className="post" id={post.id}>
            <div className="post__header">
                <img src={logo} alt="logo" className='post__user-logo'/>
                <div className="post__user-info">
                    <span className="post__user-name"> Ilnaz Gilyazov </span>
                    <div className="post__user-signature">
                        <span className='post__user-status'>Основатель группы</span>
                        <span>&#183; {secondsCalculator(post.created)}</span>
                    </div>
                </div>
            </div>
            <div className="post__content-container">
                <p className="post__content">{post.content}</p>
            </div>
        </div>
    // </NavLink>
  )
}
