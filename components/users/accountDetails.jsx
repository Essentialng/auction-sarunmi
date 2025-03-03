export function AccountDetails({card, user}){
    return(
    <div className="  relative flex flex-col justify-end items-end py-8">
        <div className="flex items-center mb-4 w-full">
            <div className="mr-4 text-4xl text-orange-600">
            {card.icon}
            </div>
            <div>
            <p>{user?.[card.firstValue]} {user?.[card.lastValue]}</p>
            <p className="text-gray-500">{user?.[card.extraValue]}</p>
            <p className="text-gray-500">{user?.[card.stateValue]}</p>
            </div>
        </div>
        <button className="bg-orange-600 text-white px-4 py-2 rounded">
            EDIT
        </button>
    </div>
    )
}


export function AccountDetailsForm({user, card}){
  
    return(
        <div className="w-full py-4 flex flex-col gap-4 items-end justify-end px-12">
            {card.map((form, index)=>(
                <div key={index} className="flex flex-col gap-2 w-full">
                    <label>{form.label}</label>
                    <input 
                    className="border p-3 rounded-lg"
                    type={form.type} 
                    placeholder={
                        form.name == "firstName" ?
                        user?.firstName : 
                        form?.name == "lastName" 
                        ? user?.lastName :
                        form?.name == "phoneNumber" ? 
                        user?.phoneNumber :
                        form?.name == "email" ? 
                        user?.email :
                        form.placeholder} 
                        />
                </div>
            ))}
            <button className="bg-orange-600 text-white px-4 py-2 rounded">
            SAVE
            </button>
        </div>
    )
}