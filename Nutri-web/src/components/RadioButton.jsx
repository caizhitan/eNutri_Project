const RadioButton = props => {
    return(
        <div className='flex h-full text-center w-1/2'>
            <input 
                type='radio'
                value={props.id}
                checked={props.radioSelect === props.id}
                onChange={props.handleRadioOptionChange}
            />
            <label className='pl-1 text-orange-300 font-bold text-base'>{props.id}</label>
    </div>
    )
}

export default RadioButton;