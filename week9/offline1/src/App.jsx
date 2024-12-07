import { useState } from "react";
import satyam from "./assets/satyam.jpeg";
import useit from "./assets/useit.png";
import nangaDhanu from "./assets/nagadhnau.jpeg";
import { PostComponent } from "./components/Post";

function App() {
  const [posts, setPosts] = useState([]);
  const  postComponents = posts.map(post => <PostComponent
    name = {post.name}
    subtitle={post.subtitle}
    time={post.time}
    profileImage={post.profileImage}
    profileDescription={post.profileDescription}
    description={post.description}
    image={post.image}
    />)
  function addPost() {
    setPosts([...posts,{
      name:"Satyam",
      subtitle:"200 followers",
      time:"2m ago.",
      profileImage:{satyam},
      profileDescription:"IIIT Bhagalpur | Fullstack Developer",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
      image:"https://media.licdn.com/dms/image/v2/D5603AQHjt9cYKcNOlw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726495602644?e=1735171200&v=beta&t=GtDF6HBwpwlyM2D6MQB3HBy1_Bd1InrHjsA1I57zw_w"
    }])
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <button onClick={addPost}>Add Post</button>
      {postComponents}
      <PostComponent
        name="Satyam"
        subtitle={"200 followers"}
        time={"2m ago."}
        profileImage={satyam}
        profileDescription={"IIIT Bhagalpur | Fullstack Developer"}
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit "}
        image={useit}
      />
      <PostComponent
        name="Dhanu Gupta"
        subtitle={"1 followers"}
        time={"2m ago."}
        profileImage={nangaDhanu}
        profileDescription={"Jhattnochni weds Dhanu"}
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit "}
        image={nangaDhanu}
      />
      <PostComponent
        name="Ishant Singh"
        subtitle={"10 followers"}
        time={"3m ago."}
        profileImage={
          "https://media.licdn.com/dms/image/v2/D5603AQHjt9cYKcNOlw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726495602644?e=1735171200&v=beta&t=GtDF6HBwpwlyM2D6MQB3HBy1_Bd1InrHjsA1I57zw_w"
        }
        profileDescription={"Gemma weds Ishant"}
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit "}
        image={
          "https://cdn.pixabay.com/photo/2021/06/26/00/26/fashion-6364998_640.jpg"
        }
      />
      <PostComponent
        name="Utkarsh"
        subtitle={"300 followers"}
        time={"2m ago."}
        profileImage={
          "https://media.licdn.com/dms/image/v2/D5635AQFnG3kKIIUoIw/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1722529962875?e=1730264400&v=beta&t=Y9akMXVYDfPNaCbMcoGI8nRMAXHSlqrT-w2Fx2nf6pA"
        }
        profileDescription={"Codeshef 3 ⭐⭐⭐ | Max rating 1610"}
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit "}
        image={
          "https://cdn.pixabay.com/photo/2016/03/11/17/31/girl-1250679_640.jpg "
        }
      />
      <PostComponent
        name="Nitin Gupta"
        subtitle={"40 followers"}
        profileImage={
          "https://media.licdn.com/dms/image/v2/D4D03AQFdG92G9kSRyA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698339468833?e=1735171200&v=beta&t=TkjWawz8itMvNv_0UV_szb0DN29KJJzs5Cf474DR1hA"
        }
        profileDescription={"IIIT Bhagalpur | Radhika Lover"}
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit "}
        image={
          "https://media.licdn.com/dms/image/v2/D5622AQFVLlvIzlwt0w/feedshare-shrink_800/feedshare-shrink_800/0/1704860805659?e=1732752000&v=beta&t=svtHAHTiD5gJQPCVMVqUou3CbE7B05IOHhpb7swaNYw"
        }
      />
    </div>
  );
}

export default App;
