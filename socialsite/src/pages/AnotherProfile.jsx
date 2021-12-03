import React, {useState} from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { BackendHost } from '../Api/BackendHost';
import axios from 'axios';
import { 
    Calendar, MapPin, Briefcase, GraduationCap
} from 'lucide-react';
import AnotherProfilePosts from '../components/AnotherProfilePosts'


const AnotherProfile = (props) => {
    const { id } = useParams()
    const history = useHistory()

    const [UserDatas, setUserDatas] = useState(() => {
        axios.get(`${BackendHost}/api/user/req/user/${id}/`)
        .then(res => setUserDatas(res.data))
    });

    const [posts, setPosts] = useState(() => {
        axios.get(`${BackendHost}/api/posts/post_user/${id}/`)
        .then(res => setPosts(res.data))
    });
    if (!UserDatas) return "Loading...";
    if (!UserDatas) return "Error!";


    const handleFollowes = (e) => {
        if(props.profileID === undefined){
            alert("You need to log in or create an account to like or comment")
            history.push("/login")
        }

        fetch(`${BackendHost}/api/user/followes/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userID: props.profileID,
                followerID: UserDatas.id
            })
        })
        .then(res => res.json())
        
        if(e.target.innerHTML === "Follow"){
            e.target.style.backgroundColor = "red"
            e.target.innerHTML = "Following"
        }else{
            e.target.style.backgroundColor = "#3b49df"
            e.target.innerHTML = "Follow"
        }
    }

    return (
        <div className="posts_arcade">
            {props.profileID !== UserDatas.id ?
                <>
                <div className="posts_main">
                    <div className="profile_image_des">
                        <img src={BackendHost + UserDatas.image} alt="profile" />
                        {props.profileData.Followes && props.profileData.Followes.includes(UserDatas.id) ?
                            <button className="followed_button"
                                onClick={handleFollowes}
                            >
                                Following...
                            </button> :
                            <button className="follow_button"
                                onClick={handleFollowes}
                                >
                                    Follow
                            </button>
                        }
                        

                        <div className="prifile_des_">
                            <p className="profile_name_">{UserDatas.first_name}</p>
                            <p className="profile_des">{UserDatas.description}</p>
                        </div>

                        <div className="profile_icons">
                            <div className="joined__">
                                <Calendar color="#717171" size={20}/>
                                <p>Joined {UserDatas.joined_date.substring(0, 10)}</p>
                            </div>
                            <div className="joined__">
                                <MapPin color="#717171" size={20}/>
                                <p>{UserDatas.address}</p>
                            </div>
                            <div className="joined__">
                                <Briefcase color="#717171" size={20}/>
                                <p>{UserDatas.work}</p>
                            </div>
                            <div className="joined__">
                                <GraduationCap color="#717171" size={20}/>
                                <p>{UserDatas.education}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Arofile_posts">
                    <AnotherProfilePosts posts={posts} username={UserDatas.first_name}/>
                </div>
                </> :
                history.push("/dashbord")
            }
        </div>
    )
}

export default AnotherProfile
