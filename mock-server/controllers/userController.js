exports.getMyUser = (req, res) => {
  const user = {
    id: 1894,
    username: 'anptnguyen',
    firstName: 'An',
    lastName: 'Nguyen',
    project: 'Elsevier',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/2580/0020/files/TontonHouse-______180221_4e06fb6a-8371-4d36-b23c-fbdc001c6297_1024x.png'
  };

  return res.send(user);
};
