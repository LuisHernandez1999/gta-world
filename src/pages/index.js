import Head from 'next/head';  
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import Image from 'next/image';
const Loginpage = () => {
    const [setInvalidEmail] = useState('');
    const router = useRouter();
    
    

    const handleSubmit = (event) => {
        event.preventDefault(); 
        router.push('../homepage/home');
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Email inválido')
                .required('Email é obrigatório')
                .matches(
                    /^[\w._%+-]+@(gmail\.com|hotmail\.com|yahoo\.com|outlook\.com)$/,
                    'O e-mail deve ser de um dos domínios permitidos: gmail.com, hotmail.com, yahoo.com, outlook.com'
                ),
            password: Yup.string()
                .required('Senha é obrigatória')
                .min(8, 'A senha deve ter pelo menos 8 caracteres'),
        }),
        onSubmit: async (values) => {
            setInvalidEmail('');
            try {
                const resetPasswordConfirmUrl = buildResetPasswordConfirmUrl(values.email);
                console.log('URL de confirmação:', resetPasswordConfirmUrl);
                alert('E-mail de redefinição de senha enviado com sucesso!');
            } catch (error) {
                console.error('Erro ao enviar o e-mail:', error);
                formik.setErrors({ submit: 'Ocorreu um erro ao enviar o e-mail. Tente novamente.' });
                setInvalidEmail(values.email);
            }
        },
        validateOnChange: false,
        validateOnBlur: true,
    });

    return (
        <>
            <Head>
                <title>login</title>
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <Box
                sx={{
                    backgroundColor: '#0A1C28', // Azul padrão
                    width: '100%',
                    padding: '1rem',
                    textAlign: 'center',
                    color: 'white', // Texto branco
                    zIndex: 10, // Garante que o header fique acima da imagem de fundo
                    position: 'relative',
                }}
            >
               <Image
        src="/AION.LOGO.jpg" // Caminho da imagem na pasta public
        alt="Logo do Portal"
        width={150} // Ajuste o tamanho conforme necessário
        height={50} // Ajuste o tamanho conforme necessário
        style={{
            display: 'inline-block',
        }}
    /> 
            </Box>

            {/* Resto do conteúdo */}
            <Box
                sx={{
                    flex: 1, // Permite que o conteúdo principal ocupe o restante do espaço
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '3rem',
                }}
            >
                <Box
                    sx={{
                        backgroundImage: 'url(/back.io.avif)',
                        backgroundSize: 'cover', // Ajusta para cobrir todo o contêiner
                        backgroundRepeat: 'no-repeat', // Evita repetição
                        backgroundPosition: 'center', // Centraliza a imagem
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
                        backgroundColor: 'white', // Cor do container
                        borderRadius: '35px',
                        marginTop: '4rem',
                        padding: '2rem',
                        width: '90%',
                        maxWidth: '480px',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Sombra para destacar
                        zIndex: 1,
                        textAlign: 'center',
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
                      LOGIN
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            marginBottom: '1.4rem', 
                            color: '#0A1C28',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 'bold',
                            fontSize:'15px',
                        }}
                    >
                       Entre seu email e senha 
                    </Typography>
                    

                    <form onSubmit={handleSubmit}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                marginTop: '0.5rem',
                            }}
                        >
                            {/* Campo de E-mail */}
                            <TextField
                                label="E-mail"
                                type="email"
                                variant="outlined"
                                size="small"
                                fullWidth
                                sx={{
                                    marginBottom: '1rem',
                                    border: '2px solid black',
                                    backgroundColor: '#f9f9f9',
                                    borderRadius: '5px',
                                    '& .MuiOutlinedInput-root': {
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'transparent', 
                                        },
                                    },
                                }}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="email"
                            />

                            {/* Campo de Senha */}
                            <TextField
                                label="Senha"
                                type="password"
                                variant="outlined"
                                size="small"
                                fullWidth
                                sx={{
                                    marginBottom: '1rem',
                                    border: '2px solid black',
                                    backgroundColor: '#f9f9f9',
                                    borderRadius: '5px',
                                    
                                }}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="password"
                            />

<Button
            type="submit"
            onClick={() => router.push('/homepage/home')} // Redireciona para a página correta
            sx={{
                width: '80%',
                padding: '0.5rem 1rem',
                color: 'white', // Cor do texto
                fontSize: '15px', // Tamanho da fonte
                borderRadius: '25px',
                fontWeight: 'bold', // Tornar o texto mais destacado
                textTransform: 'none',
                backgroundColor: '#0A1C28', // Fundo preto
                '&:hover': {
                    backgroundColor: 'WHITE', // Tom mais claro de preto ao passar o mouse
                },
            }}
        >
            Entrar
        </Button>
                        </Box>
                    </form>

                    <Box 
    sx={{
        marginTop: '0.9rem', // Margem superior geral
        textAlign: 'center',
        
    }}
>
    <Typography
        variant="body2"
        sx={{
            fontSize: '1rem',
             // Fonte aumentada
            color: 'black',
            marginBottom: '0.5rem', // Espaçamento entre os textos
        }}
    >
        Esqueceu a senha?
    </Typography>
    <Typography
        variant="body2"
        sx={{
            fontSize: '1rem', // Fonte aumentada
            color: 'black',
           
        }}
    >
        Cadastre-se
    </Typography>
</Box>
                    {formik.errors.submit && (
                        <Typography
                            color="error"
                            sx={{
                                mt: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                            }}
                            variant="body2"
                        >
                            {formik.errors.submit}
                        </Typography>
                    )}
                </Box>
            </Box>
            <Box
                sx={{
                  position: 'relative',
                   zIndex: 10,
                    backgroundColor: '#0A1C28', // Azul padrão do footer
                    color: 'white',
                    textAlign: 'center',
                    padding: '1rem',
                    marginTop: '17rem',
                    height: '100%', // Coloca o footer na parte inferior
                    
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