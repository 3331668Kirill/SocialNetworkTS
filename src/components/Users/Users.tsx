import React from "react";
import {TypeUsers} from "../../redux/users-reducer";


type UsersType ={
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUsers:(users:Array<TypeUsers>)=>void
    users:Array<TypeUsers>
}


export const Users = (props:UsersType) => {
    console.log(props)
  return (
      <div>
          {props.users.map(t=><div key={t.id}>{t.fullName}
            <span>
                <div>
                    <img/>
                </div>
                <div>
                    {t.followed
                        ?<button onClick={()=>props.unfollow(t.id)}>Unfollow</button>
                        :<button onClick={()=>props.follow(t.id)}>Follow</button> }

                </div>
            </span>
              <span>
                  <div>{t.status}</div>
              </span>
              <span>
                  <div>{t.location.city}</div>
              </span>

          </div>)}
      </div>
  )
}