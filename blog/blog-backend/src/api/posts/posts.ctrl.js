let postId = 1; // id의 초깃값입니다.

// posts 배열 초기 데이터
const posts = [
  {
    id: 1,
    title: '제목',
    body: '내용',
  },
];

/* 포스트 작성
POST /api/posts
{ title, body }
*/
exports.write = (ctx) => {
  // POST API의 Request Body 는 ctx.request.body 에서 조회할 수 있습니다.
  const { title, body } = ctx.request.body;
  postId += 1; // 기존 postId 값에 1을 더합니다.
  const post = { id: postId, title, body };
  posts.push(post);
  ctx.body = post;
};
