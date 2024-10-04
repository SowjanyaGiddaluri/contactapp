import './ContactItem.css';

const ContactItem = ({ contactDetails, toggleIsFavourite,deleteUser }) => {
    const { name, mobileNo, isFavorite, id } = contactDetails;

    const starImgURL = isFavorite
        ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png';
    
    const onClickFavoriteIcon = () =>{
        toggleIsFavourite(id);
    }
    const onDelete = () => {
        deleteUser(id);
    }

    return (
        <li className="table-row">
            <div className="table-cell name-column">
                <p className="name-value">{name}</p>
            </div>
            <hr className="separator" />
            <div className="table-cell mobile-no-column">
                <p className="mobile-no-value">{mobileNo}</p>
                <button type="button" className="delete-btn" onClick={onDelete}>Delete</button>
                <button type="button" className="favorite-icon-container" onClick={onClickFavoriteIcon}>
                    <img src={starImgURL} className="favorite-icon" alt="star" />
                </button>
            </div>
        </li>
    );
};

export default ContactItem;
