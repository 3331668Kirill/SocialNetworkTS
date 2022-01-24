import React from "react";
import {TypeUsers} from "../../redux/users-reducer";
import {Preloader} from "../common/Preloader";
import {NavLink} from "react-router-dom";
import css from "./users.module.css"
import userImage from "./noimageavailable.jpg"


type UsersTypeProps = {
    followTnunk: (userId: number) => void
    unfollowThunk: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    getUserProfile: (userId: number) => void
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
        if (this.props.currentPage > start + 5) {
            start = this.props.currentPage - 4
            finish = this.props.currentPage + 5
        }

        for (let i = start; i <= finish; i++) {
            pages.push(i)
        }

        return (<>
                <div className={css.preloader}>
                    <Preloader isFetching={this.props.isFetching}/>
                </div>
                <div>

                    <div className={css.button_block}>
                        {pages.map(t => <span onClick={() => this.onChangePage(t)}>
                        <button className={this.props.currentPage === t
                            ? css.button_active
                            : css.button}>{t}</button>
                    </span>)}

                    </div>
                    {this.props.users.map(t => <div className={css.user} key={t.id}>
                    <span className={css.user_name}>{t.name}
                        <div>
                    <NavLink to={'/profile/' + t.id} onClick={() => this.onChangeProfile(t.id)}>
                    <img className={css.img}
                         src={t.photos.small ? t.photos.small : userImage}/>
                    </NavLink>
                </div>
                <div>
                    {t.followed
                        ? <button disabled={this.props.isFetching}
                                  className={css.button}
                                  onClick={() => this.unFollowChange(t.id)}>Unfollow</button>
                        : <button disabled={this.props.isFetching}
                                  className={css.button}
                                  onClick={() => this.followChange(t.id)}>Follow</button>}

                </div>
            </span>


                        </div>
                    )
                    }
                </div>
            </>
        )
    }
}