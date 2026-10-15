export const Item = ({ name, price, description, image, children}) => {
    return (
        <article className="cardProd">
            <img src={image} alt=""/>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{price}</p>

            {children}
        </article>
    )
}