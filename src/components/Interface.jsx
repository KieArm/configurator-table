import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Slider, Stack, Typography } from '@mui/material';
import { useConfigurator } from '../contexts/configurator';
export const Interface = () => {
  const { tableWidth, setTableWidth, legs, setLegs, legsColor, setLegsColor, top, setTop } = useConfigurator();

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
      }}
      p={3}
    >
      <Stack spacing={1}>
        <Box className='glass' p={2} align='center'>
          <FormControl>
            <Typography variant='overline'>Table Width</Typography>
            <Slider
              sx={{
                width: '150px',
              }}
              min={80}
              max={140}
              value={tableWidth}
              onChange={(e) => setTableWidth(e.target.value)}
              valueLabelDisplay='auto'
            />
          </FormControl>
        </Box>
        <Box className='glass' p={2} align='center'>
          <FormControl>
            <Typography variant='overline'>Top</Typography>
            <RadioGroup value={top} onChange={(e) => setTop(e.target.value)}>
              <FormControlLabel value={'Antique'} control={<Radio />} label='Antique' />
              <FormControlLabel value={'Bamboo'} control={<Radio />} label='Bamboo' />
              <FormControlLabel value={'Cherry'} control={<Radio />} label='Cherry' />
              <FormControlLabel value={'Marble'} control={<Radio />} label='Marble' />
              <FormControlLabel value={'Granite'} control={<Radio />} label='Granite' />
              <FormControlLabel value={'Wood'} control={<Radio />} label='Wood' />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box className='glass' p={2} align='center'>
          <FormControl>
            <Typography variant='overline'>Legs</Typography>
            <RadioGroup value={legs} onChange={(e) => setLegs(parseInt(e.target.value))}>
              <FormControlLabel value={0} control={<Radio />} label='Standard' />
              <FormControlLabel value={1} control={<Radio />} label='Solid' />
              <FormControlLabel value={2} control={<Radio />} label='Design' />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box className='glass' p={2} align='center'>
          <FormControl>
            <Typography variant='overline'>Legs Colour</Typography>
            <RadioGroup value={legsColor} onChange={(e) => setLegsColor(e.target.value)}>
              <FormControlLabel value={'#555555'} control={<Radio />} label='Black' />
              <FormControlLabel value={'#C7C7C7'} control={<Radio />} label='Chrome' />
              <FormControlLabel value={'#6E2A0B'} control={<Radio />} label='Brown' />
            </RadioGroup>
          </FormControl>
        </Box>
      </Stack>
    </Box>
  );
};
