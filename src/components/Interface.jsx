import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Slider, Stack, Typography } from '@mui/material';
import { useConfigurator } from '../contexts/configurator';
export const Interface = () => {
  const { tableWidth, setTableWidth, legs, setLegs, legsColor, setLegsColor, top, setTop } = useConfigurator();

  const mobile = window.innerHeight < 800 ? true : false;

  return (
    <>
      {mobile && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 150,
          }}
          p={1}
        >
          <Box className='glass' p={2}>
            <FormControl>
              <Typography variant='overline'>Table Width</Typography>
              <Slider
                size='small'
                sx={{
                  width: '100px',
                }}
                min={80}
                max={140}
                value={tableWidth}
                onChange={(e) => setTableWidth(e.target.value)}
                valueLabelDisplay='auto'
              />
            </FormControl>
          </Box>
        </Box>
      )}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}
        p={1}
      >
        <Stack spacing={1}>
          {!mobile && (
            <Box className='glass' p={2}>
              <FormControl>
                <Typography variant='overline'>Table Width</Typography>
                <Slider
                  sx={{
                    width: '140px',
                  }}
                  min={80}
                  max={140}
                  value={tableWidth}
                  onChange={(e) => setTableWidth(e.target.value)}
                  valueLabelDisplay='auto'
                />
              </FormControl>
            </Box>
          )}
          <Box className='glass' p={2}>
            <FormControl>
              <Typography variant='overline'>Top</Typography>
              <RadioGroup value={top} onChange={(e) => setTop(e.target.value)}>
                <FormControlLabel
                  value={'Antique'}
                  control={<Radio size={mobile ? 'small' : 'medium'} />}
                  label='Antique'
                />
                <FormControlLabel
                  value={'Bamboo'}
                  control={<Radio size={mobile ? 'small' : 'medium'} />}
                  label='Bamboo'
                />
                <FormControlLabel
                  value={'Cherry'}
                  control={<Radio size={mobile ? 'small' : 'medium'} />}
                  label='Cherry'
                />
                <FormControlLabel
                  value={'Marble'}
                  control={<Radio size={mobile ? 'small' : 'medium'} />}
                  label='Marble'
                />
                <FormControlLabel
                  value={'Granite'}
                  control={<Radio size={mobile ? 'small' : 'medium'} />}
                  label='Granite'
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box className='glass' p={2}>
            <FormControl>
              <Typography variant='overline'>Legs</Typography>
              <RadioGroup value={legs} onChange={(e) => setLegs(parseInt(e.target.value))}>
                <FormControlLabel value={0} control={<Radio size={mobile ? 'small' : 'medium'} />} label='Standard' />
                <FormControlLabel value={1} control={<Radio size={mobile ? 'small' : 'medium'} />} label='Solid' />
                <FormControlLabel value={2} control={<Radio size={mobile ? 'small' : 'medium'} />} label='Design' />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box className='glass' p={2}>
            <FormControl>
              <Typography variant='overline'>Legs Color</Typography>
              <RadioGroup value={legsColor} onChange={(e) => setLegsColor(e.target.value)}>
                <FormControlLabel
                  value={'#555555'}
                  control={<Radio size={mobile ? 'small' : 'medium'} />}
                  label='Black'
                />
                <FormControlLabel
                  value={'#C7C7C7'}
                  control={<Radio size={mobile ? 'small' : 'medium'} />}
                  label='Chrome'
                />
                <FormControlLabel
                  value={'#6E2A0B'}
                  control={<Radio size={mobile ? 'small' : 'medium'} />}
                  label='Brown'
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Stack>
      </Box>
    </>
  );
};
