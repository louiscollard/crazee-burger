import { useContext, useState } from "react";
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

    const handleChange = (event) => {
        const newValue = event.target.value;
        const name = event.target.name
        setNewProduct({ ...newProduct, [name]: newValue })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const newProductToAdd = {
            ...newProduct,
            id: new Date().getTime()
        }

        handleAddProduct(newProductToAdd)
    }

    return (
        <AddFormStyled onSubmit={handleSubmit}>
            <div className="image-preview">ImagePreview</div>
            <div className="input-fields">
                <input name="title" type="text" placeholder="Nom" onChange={handleChange} />
                <input name="imageSource" type="text" placeholder="Image URL" onChange={handleChange} />
                <input name="price" type="text" placeholder="Prix" onChange={handleChange} />
            </div>
            <button className="submit-button">Submit button</button>
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
    }

    .input-fields {
        background: blue;
        grid-area: 1 / 2 / -2 / -1;

        display: grid;
    }

    .submit-button {
        background: green;
        grid-area: 4 / 2 / -2 / -2;
        width: 50%;
    }
`;
