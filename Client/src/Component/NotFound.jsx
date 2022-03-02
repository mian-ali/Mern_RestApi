import notfound from '../Assets/Images/NotFound.jpg';

const NotFound = () => {
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img src={notfound}  style={{width: '30%', margin: '80px 0 0 35%'}}/>
    )
}

export default NotFound;