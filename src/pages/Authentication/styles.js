export const buttonStyles = {
    fontWeight: 600,
    fontSize: '0.875rem',
    textTransform: 'capitalize',
    borderRadius: 2.5,
    '&.MuiButton-contained': {
        backgroundColor: '#009be5',
        '&:hover': {
            backgroundColor: '#006db3',
        }
    },
    '&.MuiButton-outlined': {
        color: '#fff',
        borderColor: '#fff',
        '&:hover': {
            backgroundColor: 'transparent',
        }
    },
    '&.MuiButton-default': {
        fontWeight: 500,
        color: 'rgba(255, 255, 255, 0.7)',
        borderColor: '#fff',
        '&:hover': {
            backgroundColor: 'transparent',
        }
    },
};