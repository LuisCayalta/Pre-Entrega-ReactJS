export const Item = ({ name, price, description, image, children, className = ""}) => {
    return (
        <article className={`product-card ${className}`}>
            <div className="product-image">
                <img src={image} alt={name} />
            </div>

            <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <p className="product-description">{description}</p>
                <p className="product-price">${price}</p>

                {children}
            </div>
        </article>
    );
};
