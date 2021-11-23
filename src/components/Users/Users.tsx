import React from "react";
import {TypeUsers} from "../../redux/users-reducer";
import axios from "axios";
import {render} from "react-dom";


type UsersTypeProps ={
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUsers:(users:Array<TypeUsers>)=>void
    users:Array<TypeUsers>
}


export class Users extends React.Component<UsersTypeProps> {

    constructor(props:any) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(responce=>{

            this.props.setUsers(responce.data.items)
        })
}
    render (){
  return (
      <div>
          {this.props.users.map(t=><div key={t.id}>{t.name}
            <span>
                <div>
                    <img src={t.photos.small ? t.photos.small :'https://www.meme-arsenal.com/memes/87d4bfeed251dba0ce946e9e594dbdb6.jpg'}/>
                </div>
                <div>
                    {t.followed
                        ?<button onClick={()=>this.props.unfollow(t.id)}>Unfollow</button>
                        :<button onClick={()=>this.props.follow(t.id)}>Follow</button> }

                </div>
            </span>
              <span>
                  <div>{t.status}</div>
              </span>
              <span>
                  <div>{'t.location.city'}</div>
              </span>

          </div>)}
      </div>
  )
}
}