import React from "react";
import {TypeUsers} from "../../redux/users-reducer";
import axios from "axios";



type UsersTypeProps ={
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUsers:(users:Array<TypeUsers>)=>void
    setCurrentPage: (currentPage:number) =>void
    setTotalUserPage: (totalPage:number) =>void
    users:Array<TypeUsers>
    pageSize:number
    totalCount:number
    currentPage:number
}


export class Users extends React.Component<UsersTypeProps> {

    constructor(props:any) {
        super(props);


}

    componentDidMount() {axios.get
    (`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(responce=>{
        this.props.setUsers(responce.data.items)
            this.props.setTotalUserPage(responce.data.totalCount)
    })
    }
    onChangePage = (t:number) =>{
        this.props.setCurrentPage(t)
        axios.get
        (`https://social-network.samuraijs.com/api/1.0/users?page=${t}&count=${this.props.pageSize}`)
            .then(responce=>{this.props.setUsers(responce.data.items)
            })
    }

    render (){
        const pagesCount:number = Math.ceil(this.props.totalCount/this.props.pageSize)
        const pages =[]
        for (let i=1; i <= pagesCount/100 ; i++ ){
                pages.push(i)
        }

  return (
      <div>
          <div>
              {pages.map(t=><span onClick={()=>this.onChangePage(t)}
                  style={this.props.currentPage===t?{fontWeight:'bold'}:undefined}>[{t}]</span>)}

          </div>
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
                  ---------------------------------
              </span>

          </div>)}
      </div>
  )
}
}