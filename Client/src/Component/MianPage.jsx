/* eslint-disable jsx-a11y/alt-text */
import { Box, Typography, makeStyles } from '@material-ui/core';
import Youtube from '../Assets/Images/youtube.png';
// import InstaTele from '../Assets/Images/InstaTele.jpeg';

const useStyles = makeStyles({
    component: {
        margin: 50,
        '& > *': {
            marginTop: 50
        }
    },
    image: {
        width: '60%',
        height: '10%',
        marginLeft:'20%'
    }
})

const CodeForInterview = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography variant="h4">Mern Stack Crud App </Typography>
            <Box style={{display: 'flex'}}>
                <img src={Youtube} className={classes.image} />
                {/* <img src={InstaTele} className={classes.image} /> */}
            </Box>
        </Box>
    )
}

export default CodeForInterview;