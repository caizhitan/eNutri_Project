const InputField = props => {
    return(
        <div className='flex-row flex w-full pb-5'>
            <input 
                type='input'
                className="peer w-full h-full text-orange-400 outline outline-0 
                focus:outline-0 
                disabled: bg-gray-300 border-b-4 transition-all 
                focus:border-orange-400"
            />
        </div>
    )
}

export default InputField;