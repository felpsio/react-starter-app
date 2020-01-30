import React, {useEffect, useState} from 'react'
import { Box, Container } from '@material-ui/core'
import LikeButton from 'components/LikeButton'
import Snackbar from '@material-ui/core/Snackbar';

function App() {
  const [numLikes, setNumLikes] = useState(0);
  const [didUserLiked, setDidUserLiked] = useState(false);

  const [isOpen, setIsOpen] = useState(false)

  useEffect(
    () => {
      setNumLikes(100)
    }, []
  )

  const toggleLike = () => {
    if (didUserLiked) {
      setNumLikes(numLikes - 1);
      setDidUserLiked(false)

    } else {
      setNumLikes(numLikes + 1);
      setDidUserLiked(true);
    }
    setIsOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsOpen(false);
  };

  return (
    <Container>
      <Box
        my={20}
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='row'
      >
        <LikeButton numLikes={numLikes} onClick={toggleLike} didUserLiked={didUserLiked} />
      </Box>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message={
          didUserLiked
            ? 'You Liked this'
            : 'You Unliked this'
        }
      />
    </Container>
  );
}

export default App;
