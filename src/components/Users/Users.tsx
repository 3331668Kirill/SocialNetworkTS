import React from "react";
import {TypeUsers} from "../../redux/users-reducer";
import {Preloader} from "../common/Preloader";
import { NavLink } from "react-router-dom";
import {followChange, getProfile, getUsers, unFollowChange} from "../common/api";

type UsersTypeProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<TypeUsers>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserPage: (totalPage: number) => void
    setIsFetching: (isFetching: boolean) => void
    setUserProfileAC: (profile: any) => void
    users: Array<TypeUsers>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}

export class Users extends React.Component<UsersTypeProps> {

    constructor(props: any) {
        super(props);
   }

    componentDidMount() {
        this.props.setIsFetching(true)
        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUserPage(data.totalCount)
            })
    }

    onChangePage = (t: number) => {
        this.props.setCurrentPage(t)
        this.props.setIsFetching(true)
        getUsers(t, this.props.pageSize).then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
            })
    }
    onChangeProfile = (t:number)=>{
        getProfile(t).then(data => {
                this.props.setUserProfileAC(data)
            })
    }
    unFollowChange = (id:number) =>{
        unFollowChange(id).then(data => {
                if (data.resultCode === 0){
                    this.props.unfollow(id)
                }
            })

    }
    followChange = (id:number) =>{
        followChange(id).then(data => {
                if (data.resultCode === 0){
                    this.props.follow(id)
                }
            })

    }

    render() {
        const pagesCount: number = Math.ceil(this.props.totalCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount / 100; i++) {
            pages.push(i)
        }

        return (
            <div>
                <Preloader isFetching={this.props.isFetching}/>
                <div>
                    {pages.map(t => <span onClick={() => this.onChangePage(t)}
                                          style={this.props.currentPage === t ? {fontWeight: 'bold'} : undefined}>[{t}]</span>)}

                </div>
                {this.props.users.map(t => <div key={t.id}>{t.name}
                    <span>
                <div>
                    <NavLink to={'/profile/' + t.id} onClick={()=>this.onChangeProfile(t.id)}>
                    <img
                        src={t.photos.small ? t.photos.small : 'https://www.meme-arsenal.com/memes/87d4bfeed251dba0ce946e9e594dbdb6.jpg'}/>
                    </NavLink>
                </div>
                <div>
                    {t.followed
                        ? <button onClick={() => this.unFollowChange(t.id)}>Unfollow</button>
                        : <button onClick={() => this.followChange(t.id)}>Follow</button>}

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