import { useContext, useState } from "react";
import { FiCheck } from "react-icons/fi";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";

const EMPTY_PRODUCT = {
    id: "",
    title: "",
    imageSource: "",
    price: 0
}

export default function AddForm() {
    const { handleAddProduct } = useContext(OrderContext)
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setNewProduct({ ...newProduct, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const newProductToAdd = {
            ...newProduct,
            id: crypto.randomUUID()
        }

        handleAddProduct(newProductToAdd)
        setNewProduct(EMPTY_PRODUCT)
        successMessage();
    }

    const successMessage = () => {
        setIsSubmitted(true)
        setTimeout(() => {
            setIsSubmitted(false)
        }, 2000)
    }

    return (
        <AddFormStyled onSubmit={handleSubmit}>
            <div className="image-preview">
                {newProduct.imageSource ? (
                    <img src={newProduct.imageSource} alt={newProduct.title} />
                ) : (
                    <div>Aucune image</div>
                )}
            </div>
            {/* <div className="image-preview">ImagePreview</div> */}
            <div className="input-fields">
                <input name="title" value={newProduct.title} type="text" placeholder="Nom" onChange={handleChange} />
                <input name="imageSource" value={newProduct.imageSource} type="text" placeholder="Image URL" onChange={handleChange} />
                <input name="price" value={newProduct.price} type="number" placeholder="Prix" onChange={handleChange} />
            </div>
            <div className="submit">
                <button className="submit-button">Submit button</button>
                {isSubmitted && (
                    <div className="submit-mesage">
                        <FiCheck />
                        <span>Ajouté avec succès!</span>
                    </div>
                )}
            </div>
        </AddFormStyled>
    )
}

const AddFormStyled = styled.form`
    border: 2px solid black;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    height: 100%;
    width: 70%;

    .image-preview {
        background: red;
        grid-area: 1 / 1 / 4 / 2;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 100%;
            width: 100%;
            object-fit: contain;
            object-position: center;
        }
    }

    .input-fields {
        background: blue;
        grid-area: 1 / 2 / -2 / -1;

        display: grid;
    }

    .submit {
        background: green;
        grid-area: 4 / 2 / -2 / -2;
        display: flex;
        align-items: center;
        
        .submit-button {
            width: 50%;
        }
        .submit-message {
            height: 100%;
        }
    }
`;
