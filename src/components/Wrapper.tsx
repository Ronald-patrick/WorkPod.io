const Wrapper = (props:any) => {
  return (
    <div className='flex justify-between p-1 max-w-7xl mx-auto mt-4 items-center'>
        {props.children}
    </div>
  )
}

export default Wrapper