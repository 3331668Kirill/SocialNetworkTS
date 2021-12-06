import React from "react";
import {TypeUsers} from "../../redux/users-reducer";
import {Preloader} from "../common/Preloader";
import {NavLink} from "react-router-dom";


type UsersTypeProps = {
    followTnunk: (userId: number) => void
    unfollowThunk: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    getUserProfile:(userId:number) =>void
    getUsers: (currentPage: number, pageSize: number) => void
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

        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }

    onChangePage = (t: number) => {
        this.props.setCurrentPage(t)
        this.props.getUsers(t, this.props.pageSize)


    }
    onChangeProfile = (t: number) => {
        this.props.getUserProfile(t)

    }
    unFollowChange = (id: number) => {
        this.props.unfollowThunk(id)
    }
    followChange = (id: number) => {
        this.props.followTnunk(id)

    }

    render() {
        const pages = []
        let start = 1
        let finish = 10
        if (this.props.currentPage > start + 5){
            start = this.props.currentPage - 4
            finish = this.props.currentPage + 5
        }

        for (let i = start; i <= finish; i++) {
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
                    <NavLink to={'/profile/' + t.id} onClick={() => this.onChangeProfile(t.id)}>
                    <img
                        src={t.photos.small ? t.photos.small : 'https://www.meme-arsenal.com/memes/87d4bfeed251dba0ce946e9e594dbdb6.jpg'}/>
                    </NavLink>
                </div>
                <div>
                    {t.followed
                        ? <button disabled={this.props.isFetching}
                                  onClick={() => this.unFollowChange(t.id)}>Unfollow</button>
                        : <button disabled={this.props.isFetching}
                                  onClick={() => this.followChange(t.id)}>Follow</button>}

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