import Image from 'next/image';

import { Box, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import FailIcon from '../public/failIcon.png';

interface ComponentProps {
  open: boolean;
  onClose: () => void;
  src: string;
  sentence: string;
}

const SimpleModal = ({ props }: { props: ComponentProps }) => {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
    >
      <Box sx={{ position: 'absolute', backgroundColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '10px', width: '400px', paddingTop: '20px !important', padding: '34px', outline: 'none' }}>
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <IconButton onClick={props.onClose}>
            <CloseIcon aria-label="close" />
          </IconButton>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Image
            src={FailIcon}
            width={72}
            height={72}
          />
        </Box>

        <Box sx={{ textAlign: 'center', marginTop: '10px' }}>
          <Typography sx={{ color: '#383838', fontSize: '18px', fontWeight: '400' }}>{props.sentence}</Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default SimpleModal;