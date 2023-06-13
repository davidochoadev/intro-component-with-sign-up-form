const Comp = () => {
   const inputClass : string = 'py-4 px-4 rounded-md border border-gray-300 font-medium placeholder:text-gray-500 '
   return (
      <form className="flex flex-col gap-4 p-5 bg-white rounded-lg my-4 ">
         <input type="text" placeholder="First Name" name="name" className={`${inputClass}`}/>
         <input type="text" placeholder="Last Name" name="last-name" className={`${inputClass}`}/>
         <input type="text" placeholder="Email Address" name="email" className={`${inputClass}`}/>
         <input type="password" placeholder="Password" name="password" className={`${inputClass}`}/>
         <button type="submit" className="bg-[#37cc8a] text-white py-4 rounded-lg font-bold hover:#06874e duration-300">
            CLAIM YOUR FREE TRIAL
         </button>
         <p className="text-center text-xs px-8 text-gray-400 font-medium">By clicking the button, you are agreeing to our <a href="/intro-component-with-sign-up-form/terms" className="text-[#ff7978] font-bold hover:text-[#b43736] duration-300">Terms and Services</a></p>
      </form>
   )
}

export default Comp