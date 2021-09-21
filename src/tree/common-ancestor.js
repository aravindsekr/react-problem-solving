/**
 * check in all left subtree if that node is found
 * check in all right subtree if that node is found
 */

const commonAncestor = (root, p, q) => {
  if (root === null) {
    return null;
  }

  if (root === p && root === q) {
    return root;
  }

  // go left
  const nx = commonAncestor(root.left, p, q);

  // only way it happens when this node is ancestor of p & q
  if (nx !== null && nx !== p && nx !== q) {
    return nx;
  }

  //go right
  const ny = commonAncestor(root.right, p, q);

  // only way it happens when this node is ancestor of p & q
  if (ny !== null && ny !== p && ny !== q) {
    return ny;
  }

  // if both left and right subtree returns non null value, then there
  // should be a node with matching p and q somewhere, current root is a ancestor
  if (nx !== null && ny !== null) {
    return root;
  } else if (root === p || q) {
    // if subtree root matches p or q, return
    // TODO: we can break here if nx or ny is not null, meaning we found other node somewhere
    return root;
  } else {
    // if one matches and other not matching ( null ) value just return
    // what is matched
    return nx || ny;
  }
};

export default commonAncestor;
