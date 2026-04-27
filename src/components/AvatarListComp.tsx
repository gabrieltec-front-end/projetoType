import { Avatar, Box } from '@mui/material'
import Rem from '@/utils/pxToRem'
import { StyledH2, StyledH3 } from './TypegraphiesComp'
import { AvatarListA } from '@/types'

function AvatarComp(props: AvatarListA) {
  return (
    <>
      {props.listDate.map((item, index) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: `${Rem(12)} 0`,
          }}
          key={index}
        >
          <Box>
            <Avatar
              alt={item.name}
              src={item.avatar}
              sx={{ width: Rem(48), height: Rem(48), marginRight: Rem(16) }}
            />
          </Box>
          <Box>
            <StyledH2>{item.name}</StyledH2>
            <StyledH3>{item.subtitle}</StyledH3>
          </Box>
        </Box>
      ))}
    </>
  )
}

export default AvatarComp
