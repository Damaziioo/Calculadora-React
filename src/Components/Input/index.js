import { InputContainer } from "./style";

const Input = ({ value }) => {
    return (
        <InputContainer>
            <input readOnly value={value} />
        </InputContainer>

    );

}
export default Input;
