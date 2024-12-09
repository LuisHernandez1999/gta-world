import { Box, Typography, Button, Grid } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: '#1a1a1d',
        minHeight: '100vh',
        color: '#f5f5f5',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Header Section */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 4,
          fontSize: { xs: '2rem', md: '3rem' },
          color: '#ffcc00',
        }}
      >
        Grand Theft Auto Chronicles
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          textAlign: 'center',
          mb: 6,
          maxWidth: '600px',
          lineHeight: 1.6,
          fontSize: { xs: '1rem', md: '1.2rem' },
        }}
      >
        Explore o mundo dos jogos de GTA! Descubra detalhes, histórias e segredos de cada título da série icônica.
      </Typography>

      {/* Main Call-to-Action Buttons */}
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          mb: 8,
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#ffcc00',
            color: '#1a1a1d',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#e6b800',
            },
          }}
        >
          Ver Dossiês
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderColor: '#ffcc00',
            color: '#ffcc00',
            fontWeight: 'bold',
            '&:hover': {
              borderColor: '#e6b800',
              color: '#e6b800',
            },
          }}
        >
          Sobre a Série
        </Button>
      </Box>

      {/* Featured Games Section */}
      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: '1200px',
          width: '100%',
        }}
      >
        {['GTA V', 'GTA IV', 'GTA San Andreas'].map((game, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                backgroundColor: '#2d2d30',
                borderRadius: 2,
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Box
                component="img"
                src={`/images/${game.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                alt={game}
                sx={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  padding: '1rem',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}
              >
                {game}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

