import { Button, Card } from 'antd';

const Posts = ({ title, body, deletePost, id }) => (
  <Card>
    <h1>{title}</h1>
    <p>{body}</p>
    <Button type="primary" onClick={() => deletePost(id)}>
      Delete
    </Button>
  </Card>
);

export default Posts;
