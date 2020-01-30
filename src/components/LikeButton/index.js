import React from 'react'
import { Button } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { Box } from '@material-ui/core'


/*
  Welcome developer! Please fully customize this component as needed.
*/

const LikeButton = ({numLikes, onClick, didUserLiked}) => {
  return <Button onClick={() => onClick()}>
    {
      didUserLiked
        ? <ThumbDownIcon />
        : <ThumbUpIcon />
    }
    <Box
      ml={1}
    >
      {didUserLiked ? 'Liked' : 'Like'} | {numLikes}
    </Box>

  </Button>

}

export default LikeButton
