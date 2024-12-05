import { Star, StarBorder } from '@mui/icons-material';
import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  Rating,
  Typography,
} from '@mui/material';
import { useState } from 'react';

interface StarSectionProps {
  title: string;
  popularity: number;
}

function StarSection({ title, popularity }: StarSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState<number | null>(null);

  const opneModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRatingChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: number | null
  ) => {
    setRating(newValue);
    console.log('newValue', newValue);
  };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          gap: '2.75rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '0.25rem',
            alignItems: 'center',
          }}
        >
          <Rating
            max={1}
            readOnly
            emptyIcon={
              <Star
                style={{
                  color: '#FFD700',
                  fill: '#FFD700',
                  fontSize: '1.5rem',
                }}
                fontSize="inherit"
              />
            }
          />
          <Typography align="center" sx={{ fontSize: '1.25rem' }}>
            {popularity}
          </Typography>
        </Box>
        <Rating
          max={1}
          onChange={opneModal}
          icon={<StarBorder style={{ color: 'inherit' }} />}
          emptyIcon={
            <StarBorder style={{ color: 'inherit', fontSize: '1.5rem' }} />
          }
          value={null}
        />
      </Box>
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isModalOpen}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.5rem',
              width: 400,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
              color: 'white',
            }}
          >
            <Typography>평가하기</Typography>
            <Typography
              sx={{
                fontSize: '1.75rem',
                fontWeight: 800,
              }}
            >
              {title}
            </Typography>
            <Rating value={rating} onChange={handleRatingChange} />
            <Button
              variant="contained"
              disabled={!rating}
              sx={{
                backgroundColor: 'white',
                width: '8rem',
                height: '2.5rem',
              }}
            >
              별점주기
            </Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default StarSection;
