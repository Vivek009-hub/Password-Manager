// import React from 'react'
// import { useRef, useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { v4 as uuidv4 } from 'uuid';



// const Manage = () => {
//     const ref = useRef();
//     const passwordRef = useRef();
//     const [form, setForm] = useState({ site: "", username: "", password: "" });
//     const [passwordArray, setPasswordArray] = useState([]);

//     useEffect(() => {
//         let passwords = localStorage.getItem('passwords');
//         if (passwords) {
//             setPasswordArray(JSON.parse(passwords));
//         }

//     }, [])


//     const copyText = (text) => {
//         toast('🦄 Copied to Clipboard', {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "dark",
//         });
//         navigator.clipboard.writeText(text)
//     }



//     const showPassword = () => {
//         passwordRef.current.type = "text";
//         if (ref.current.src.includes("icons/eyecross.png")) {
//             ref.current.src = "icons/eye.png";
//             passwordRef.current.type = "password";


//         }
//         else {
//             ref.current.src = "icons/eyecross.png";
//             passwordRef.current.type = "text";

//         }
//     }


//     const savePassword = () => {
//         if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {

//             setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
//             localStorage.setItem('passwords', JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]));
//             console.log([...passwordArray, form]);
//             setForm({ site: "", username: "", password: "" });

//             toast('Password Saved Successfully!', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "dark",
//             });
//         }
//         else {
//             toast.error('Please fill all fields with valid data', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "dark",
//             });
//         }

//     }

//     const deletePassword = (id) => {
//         console.log("deleting item with id:", id);
//         let c = confirm("Are you sure you want to delete this password?");
//         if (c) {
//             setPasswordArray(passwordArray.filter(item => item.id !== id));
//             localStorage.setItem('passwords', JSON.stringify(passwordArray.filter(item => item.id !== id)))
//             toast('Password Deleted', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "dark",
//             });
//         }
//     }


//     const editPassword = (id) => {

//         console.log("editing item with id:", id);
//         setForm(passwordArray.filter(item => item.id === id)[0]);  // Put the value in the form
//         setPasswordArray(passwordArray.filter(item => item.id !== id));

//     }



//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     }
//     return (

//         <>
//             <ToastContainer
//                 position="top-right"
//                 autoClose={5000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick={true}
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="dark"
//             />
//             <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
//             <div className="p-3  mycontainer min-h-[80vh]  ">

//                 <h1 className='text-4xl font-bold text-center'>
//                     <span className='text-green-700'> &lt;</span>
//                     <span>Pass</span>
//                     <span className='text-green-500'>OP/&gt;</span></h1>
//                 <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>

//                 <div className=" flex flex-col p-4 text-black gap-8 items-center">
//                     <input name="site" value={form.site} onChange={handleChange} placeholder='Enter website URL' type='text' className=' py-1  px-4 rounded-full border border-green-500 w-full' id='site' />

//                     <div className="flex flex-col md:flex-row w-full justify-between gap-8">
//                         <input name='username' value={form.username} onChange={handleChange} placeholder='Enter Username' className=' py-1  px-4 rounded-full border border-green-500 w-full' type='text' id='username' />

//                         <div className="relative gap-4 ">
//                             <input ref={passwordRef} name='password' value={form.password} onChange={handleChange} placeholder='Enter Password' className=' py-1  px-4 rounded-full border border-green-500 w-full' type='password' id='password' />
//                             <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={showPassword}>
//                                 <img ref={ref} className='p-1' width={26} src='icons/eye.png' alt='' />
//                             </span>

//                         </div>
//                     </div>
//                     <button onClick={savePassword} className='flex justify-center gap-3 items-center bg-green-600 hover:bg-green-300 rounded-full
//                     px-4 py-2 w-fit'>
//                         <lord-icon
//                             src="https://cdn.lordicon.com/iwlihxdl.json"
//                             trigger="hover">
//                         </lord-icon>
//                         Save Password</button>
//                 </div>
//                 <div className="passwords">
//                     <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
//                     {passwordArray.length === 0 && <div> NO Passwords to show</div>}
//                     {passwordArray.length != 0 && <table className='table-auto w-full rounded-md overflow-hidden mb-10'>
//                         <thead className='bg-green-800 text-white'>
//                             <tr>
//                                 <th className='py-2'>Site</th>
//                                 <th className='py-2'>Username</th>
//                                 <th className='py-2'>Password</th>
//                                 <th className='py-2'>Actions</th>

//                             </tr>
//                         </thead>
//                         <tbody className='bg-green-100 text-black'>
//                             {passwordArray.map((item, index) => {
//                                 return (
//                                     <tr key={index}>
//                                         <td className=' py-2 border border-white text-center'>
//                                             <div className='flex items-center justify-center'>
//                                                 <a href={item.site} target='_blank'>{item.site}</a>
//                                                 <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }} >
//                                                     <lord-icon
//                                                         style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
//                                                         src="https://cdn.lordicon.com/iykgtsbt.json"
//                                                         trigger="hover" >
//                                                     </lord-icon>
//                                                 </div>
//                                             </div>
//                                         </td>
//                                         <td className=' py-2 border border-white text-center '>
//                                             <div className='flex items-center justify-center'>
//                                                 <span>{item.username}</span>
//                                                 <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}  >
//                                                     <lord-icon
//                                                         style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
//                                                         src="https://cdn.lordicon.com/iykgtsbt.json"
//                                                         trigger="hover" >
//                                                     </lord-icon>
//                                                 </div>
//                                             </div>
//                                         </td>
//                                         <td className=' py-2 border border-white text-center '>
//                                             <div className='flex items-center justify-center'>
//                                                 <span>{item.password}</span>
//                                                 <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}  >
//                                                     <lord-icon
//                                                         style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
//                                                         src="https://cdn.lordicon.com/iykgtsbt.json"
//                                                         trigger="hover" >
//                                                     </lord-icon>
//                                                 </div>
//                                             </div>
//                                         </td>
//                                         <td className=' py-2 border border-white text-center gap-3 flex justify-center items-center'>
//                                             <span className='cursor-pointer' onClick={() => { editPassword(item.id) }}>
//                                                 <lord-icon
//                                                     src="https://cdn.lordicon.com/exymduqj.json"
//                                                     trigger="hover"
//                                                     stroke="bold"
//                                                     state="hover-line"
//                                                     colors="primary:#000000,secondary:#08a88a"
//                                                     style={{ "width": "25px", "height": "25px" }}>
//                                                 </lord-icon></span>

//                                             <span className='cursor-pointer' onClick={() => { deletePassword(item.id) }}>
//                                                 <lord-icon
//                                                     src="https://cdn.lordicon.com/jzinekkv.json"
//                                                     trigger="hover"
//                                                     delay="1500"
//                                                     stroke="bold"
//                                                     state="in-dynamic"
//                                                     colors="primary:#000000,secondary:#08a88a"
//                                                     style={{ "width": "25px", "height": "25px" }}>
//                                                 </lord-icon></span>
//                                         </td>
//                                     </tr>
//                                 )
//                             })}


//                         </tbody>
//                     </table>}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Manage








import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manage = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setForm] = useState({ site: '', username: '', password: '' });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem('passwords');
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const copyText = (text) => {
    toast('🦄 Copied to Clipboard', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark'
    });
    navigator.clipboard.writeText(text);
  };

  const showPassword = () => {
    passwordRef.current.type = 'text';
    if (ref.current.src.includes('icons/eyecross.png')) {
      ref.current.src = 'icons/eye.png';
      passwordRef.current.type = 'password';
    } else {
      ref.current.src = 'icons/eyecross.png';
      passwordRef.current.type = 'text';
    }
  };

  const savePassword = () => {
    if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
      const newPassword = { ...form, id: uuidv4() };
      const updatedArray = [...passwordArray, newPassword];
      setPasswordArray(updatedArray);
      localStorage.setItem('passwords', JSON.stringify(updatedArray));
      setForm({ site: '', username: '', password: '' });

      toast('Password Saved Successfully!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      });
    } else {
      toast.error('Please fill all fields with valid data', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      });
    }
  };

  const deletePassword = (id) => {
    const c = confirm('Are you sure you want to delete this password?');
    if (c) {
      const updatedArray = passwordArray.filter((item) => item.id !== id);
      setPasswordArray(updatedArray);
      localStorage.setItem('passwords', JSON.stringify(updatedArray));
      toast('Password Deleted', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      });
    }
  };

  const editPassword = (id) => {
    const selected = passwordArray.find((item) => item.id === id);
    if (selected) {
      setForm(selected);
      setPasswordArray(passwordArray.filter((item) => item.id !== id));
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="p-3 mycontainer min-h-[85vh]">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-700"> &lt;</span>
          <span>Pass</span>
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">Your own Password Manager</p>

        <div className="flex flex-col p-4 text-black gap-8 items-center">
          <input
            name="site"
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            type="text"
            className="py-1 px-4 rounded-full border border-green-500 w-full"
          />

          <div className="flex flex-col md:flex-row w-full justify-between gap-8">
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="py-1 px-4 rounded-full border border-green-500 w-full"
              type="text"
            />

            <div className="relative gap-4 w-full">
              <input
                ref={passwordRef}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="py-1 px-4 rounded-full border border-green-500 w-full"
                type="password"
              />
              <span
                className="absolute right-[3px] top-[4px] cursor-pointer"
                onClick={showPassword}
              >
                <img ref={ref} className="p-1" width={26} src="icons/eye.png" alt="" />
              </span>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="flex justify-center gap-3 items-center bg-green-600 hover:bg-green-300 rounded-full px-4 py-2 w-fit"
          >
            <lord-icon
              src="https://cdn.lordicon.com/iwlihxdl.json"
              trigger="hover"
            ></lord-icon>
            Save Password
          </button>
        </div>

        <div className="passwords">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div>NO Passwords to show</div>}

          {passwordArray.length !== 0 && (
            <div className="overflow-x-auto">
              <table className="table-auto w-full rounded-md overflow-hidden mb-10 min-w-[600px]">
                <thead className="bg-green-800 text-white">
                  <tr>
                    <th className="py-2">Site</th>
                    <th className="py-2">Username</th>
                    <th className="py-2">Password</th>
                    <th className="py-2">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-green-100 text-black">
                  {passwordArray.map((item, index) => (
                    <tr key={index}>
                      <td className="py-2 border border-white text-center break-all">
                        <div className="flex items-center justify-center gap-1">
                          <a href={item.site} target="_blank" rel="noreferrer" className="break-all">
                            {item.site}
                          </a>
                          <div
                            className="lordiconcopy size-7 cursor-pointer"
                            onClick={() => copyText(item.site)}
                          >
                            <lord-icon
                              style={{ width: '25px', height: '25px', paddingTop: '3px', paddingLeft: '3px' }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 border border-white text-center break-all">
                        <div className="flex items-center justify-center gap-1">
                          <span className="break-all">{item.username}</span>
                          <div className="lordiconcopy size-7 cursor-pointer" onClick={() => copyText(item.username)}>
                            <lord-icon
                              style={{ width: '25px', height: '25px', paddingTop: '3px', paddingLeft: '3px' }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 border border-white text-center break-all">
                        <div className="flex items-center justify-center gap-1">
                          <span className="break-all">{item.password}</span>
                          <div className="lordiconcopy size-7 cursor-pointer" onClick={() => copyText(item.password)}>
                            <lord-icon
                              style={{ width: '25px', height: '25px', paddingTop: '3px', paddingLeft: '3px' }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 border border-white text-center gap-3 flex justify-center items-center">
                        <span className="cursor-pointer" onClick={() => editPassword(item.id)}>
                          <lord-icon
                            src="https://cdn.lordicon.com/exymduqj.json"
                            trigger="hover"
                            stroke="bold"
                            state="hover-line"
                            colors="primary:#000000,secondary:#08a88a"
                            style={{ width: '25px', height: '25px' }}
                          ></lord-icon>
                        </span>

                        <span className="cursor-pointer" onClick={() => deletePassword(item.id)}>
                          <lord-icon
                            src="https://cdn.lordicon.com/jzinekkv.json"
                            trigger="hover"
                            delay="1500"
                            stroke="bold"
                            state="in-dynamic"
                            colors="primary:#000000,secondary:#08a88a"
                            style={{ width: '25px', height: '25px' }}
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Manage;

