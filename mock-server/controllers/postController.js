exports.getPosts = (req, res) => {
  const posts = [
    {
      id: 1,
      title: 'Post #1',
      content:
        'Nullam pharetra volutpat elementum. Donec efficitur libero eget leo fermentum rhoncus. Suspendisse vitae eleifend elit. Curabitur mollis fermentum vulputate. Lorem.'
    },
    {
      id: 2,
      title: 'Post #2',
      content:
        'Maecenas vel aliquet orci, ac aliquam tellus. Nullam ut tempor justo. Vestibulum viverra bibendum eros ac eleifend. Curabitur et ante.'
    },
    {
      id: 3,
      title: 'Post #3',
      content:
        ' Maecenas consequat massa in enim mollis finibus. Praesent vitae justo tortor. Vestibulum sagittis magna eget bibendum aliquet. Donec volutpat eu.'
    },
    {
      id: 4,
      title: 'Post #4',
      content:
        'Nam vel turpis malesuada, facilisis risus vestibulum, elementum  justo. Etiam iaculis eu eros volutpat posuere. Morbi sollicitudin tellus ante, pharetra.'
    }
  ];

  return res.send(posts);
};
