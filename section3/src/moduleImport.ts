import User from './moduleExportD';
import { UserType, Blog } from './moduleExport';

const user1: UserType = {
  id: 1,
  name: '御手洗'
}

console.log(user1.id, user1.name);


const user2: User = {
  id: 1,
  name: '山田'
}

console.log(user2.id, user2.name);

const blog: Blog = {
  id: 3,
  name: '田崎'
}

console.log(blog.id, blog.name);