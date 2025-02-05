import axios from "axios";
export default async function({params}: any) {
  const postId = (await params).postId;
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  const data = response.data
  return (
    <div>
    <div>
     Blog! {postId}
    </div>
    <div>
      title = ${data.title}
    </div>
    </div>
  )
}