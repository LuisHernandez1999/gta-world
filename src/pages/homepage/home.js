import Head from 'next/head'; 
import { Box, Typography, IconButton } from '@mui/material';
import { Person, AttachMoney, Construction, ThreeSixty } from '@mui/icons-material';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Loginpage = () => {
    const router = useRouter();

    const handleNavigation = (path) => {
        router.push(path);
    };

    return (
        <>
            <Head>
                <title>login</title>
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap" rel="stylesheet" />
            </Head>

            {/* Header */}
            <Box
                sx={{
                    backgroundColor: '#0A1C28',
                    width: '100%',
                    padding: '1rem',
                    textAlign: 'center',
                    color: 'white',
                    zIndex: 10,
                    position: 'relative',
                }}
            >
                <Image
                    src="/AION.LOGO.jpg"
                    alt="Logo do Portal"
                    width={150}
                    height={50}
                    style={{
                        display: 'inline-block',
                    }}
                />
            </Box>

            {/* Conteúdo principal */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '2rem',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0)',
                }}
            >
                <Box
                    sx={{
                        backgroundImage: 'url(/back.io.avif)',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 0,
                        minHeight: '100vh',
                    }}
                />

                <Box
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: '35px',
                        marginTop: '4rem',
                        padding: '2rem',
                        width: '90%',
                        maxWidth: '430px',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                        zIndex: 1,
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                      <Box
            sx={{
                textAlign: 'center',
                width: '100%',
                marginBottom: '2rem',
            }}
        >
            <Typography
                        variant="h6"
                        sx={{
                            marginBottom: '0.5rem', 
                            color: 'black',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            
                            fontSize:'32px',
                        }}
                    >
                      PAINEL
                    </Typography>
                    
        </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '60%',
                            marginBottom: '2.7rem',
                        }}
                    >
                        <IconButton
                            onClick={() => handleNavigation('/perfil')}
                            sx={{ flexDirection: 'column', color: '#0A1C28', }}
                        >
                            <Person sx={{ fontSize: '60px' }} />
                            <Typography variant="body2">Perfil</Typography>
                        </IconButton>

                        <IconButton
                            onClick={() => handleNavigation('/gastos')}
                            sx={{ flexDirection: 'column', color: '#0A1C28' }}
                        >
                            <AttachMoney sx={{ fontSize: '60px' }} />
                            <Typography variant="body2">Gastos</Typography>
                        </IconButton>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '60%',
                        }}
                    >
                        <IconButton
                            onClick={() => handleNavigation('/obras')}
                            sx={{ flexDirection: 'column', color: '#0A1C28' }}
                        >
                            <Construction sx={{ fontSize: '60px' }} />
                            <Typography variant="body2">Obras</Typography>
                        </IconButton>

                        <IconButton
                            onClick={() => handleNavigation('/modelos-3d')}
                            sx={{ flexDirection: 'column', color: '#0A1C28' }}
                        >
                            <ThreeSixty sx={{ fontSize: '60px' }} />
                            <Typography variant="body2">Modelos 3D</Typography>
                        </IconButton>
                    </Box>
                </Box>
            </Box>

            {/* Footer */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 10,
                    backgroundColor: '#0A1C28',
                    color: 'white',
                    textAlign: 'center',
                    padding: '1rem',
                    marginTop: '18rem',
                    height: '100%',
                }}
            >
                <Typography variant="body2" sx={{ fontSize: '14px' }}>
                    © 2025 AION. Todos os direitos reservados.
                </Typography>
            </Box>
        </>
    );
};

export default Loginpage;
