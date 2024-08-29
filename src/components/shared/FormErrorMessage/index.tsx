
interface IFormErrorMessage{
    message: string;
}

const FormErrorMessage = ({message}: IFormErrorMessage) => {
    return(
        <span className='text-red-500 my-2'>
            {message}
        </span>
    );
}

export { FormErrorMessage };