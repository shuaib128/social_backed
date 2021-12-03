import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import DetailsPostLeft from '../components/DetailsPostLeft'
import DetailsPostMiddle from '../components/DetailsPostMiddle'
import DetailsPostRight from '../components/DetailsPostRight'
import { BackendHost } from '../Api/BackendHost';

const PostDetail = (props) => {
    //Get perametar and fetch post data
    const { id } = useParams()
    const [post, setPost] = useState(() => {
        axios.get(`${BackendHost}/api/posts/${id}/`)
          .then(res => setPost(res.data))
     });
     if (!post) return "Loading...";
     if (!post) return "Error!";

    return (
        <div className="full_register post_detail_full">
            <div className="post_detail_full_main">
                <DetailsPostLeft />
                <DetailsPostMiddle
                    username={props.username}
                    post={post} 
                    profileData={props.profileData}
                />
                <DetailsPostRight 
                    post={post} 
                    profileData={props.profileData}
                />
            </div>
        </div>
    )
}

export default PostDetail
