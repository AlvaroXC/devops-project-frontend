export const Alert = ({alertMessage}) => {
  return (
    <div className= {`${alertMessage.error ? 'from-red-400 to-red-600' : 'from-indigo-400 to-indigo-600'} bg-gradient-to-r text-center p-3 rounded-xl mb-10 text-white font-bold uppercase text-sm`}>
        {alertMessage.msg}
    </div>
  )
}
