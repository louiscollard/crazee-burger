import { useContext, useState } from "react";
import { FiCheck } from "react-icons/fi";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { theme } from "../../../../../../theme";
import TextInput from "../../../../../shared/TextInput";
import { getInputTextsConfig } from "./InputTextConfig";

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

    const inputTexts = getInputTextsConfig(newProduct);

    return (
        <AddFormStyled onSubmit={handleSubmit}>
            <div className="image-preview">
                {newProduct.imageSource ? (
                    <img src={newProduct.imageSource} alt={newProduct.title} />
                ) : (
                    <div>Aucune image</div>
                )}
            </div>
            <div className="input-fields">
                {inputTexts.map((input) => {
                    return <TextInput {...input} key={input.id} onChange={handleChange} version="minimalist" />
                })}
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
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    height: 100%;
    width: 70%;
    grid-column-gap: 20px;
    grid-row-gap: 8px;

    .image-preview {
        border: solid 1px ${theme.colors.greyMedium};
        border-radius: ${theme.borderRadius.round};
        color: ${theme.colors.greyMedium};
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
        grid-area: 1 / 2 / -2 / -1;

        display: grid;
        grid-row-gap: 8px;
    }

    .submit {
        grid-area: 4 / -2 / -1 / -1;
        display: flex;
        align-items: center;
        position: relative;
        top: 3px;

    .submit-button {
        height: 100%;
    }
}
`;
