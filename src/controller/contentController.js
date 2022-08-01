export const handleHome = (req, res) => {
  return res.send("HELLO MAN");
};

export const handleSearch = (req, res) => {
  return res.send("Search stuff");
};

export const handleNewPost = (req, res) => {
  return res.send("upload new post");
};

export const handleWatch = (req, res) => {
  console.log(req.params);
  return res.send("watch post");
};

export const handleEdit = (req, res) => {
  console.log(req.params);
  return res.send("edit post");
};

export const handleDelete = (req, res) => {
  console.log(req.params);
  return res.send("delete post");
};
