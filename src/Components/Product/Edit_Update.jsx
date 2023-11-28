import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { editProduct,updateProduct,RedirectToProductlist1 } from '../../Redux/CmsSlice';
import './Edit_Update.css'
export default function Edit_Update() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { Edit,redirectToProductlist1 } = useSelector((s) => s.Cms);
 
  const [user, setUser] = useState({ title: "", description: "" })
  const [error, setError] = useState({})
  const [image, setImage] = useState()
  const { id } = useParams()
  console.log("ID : ", id)

  useEffect(() => {
    dispatch(editProduct(id))
  }, [])

  useEffect(() => {
    if (Edit !== null) {
      setUser({
        title: Edit.title,
        description: Edit.description,
      })

    }
  }, [Edit])

  const onSubmitData = (e) => {
    e.preventDefault();
    
    let formData=new FormData()
     formData.append("title",user.title)
     formData.append("description",user.description)
     formData.append("id",id)
     formData.append("image",image)
    dispatch(updateProduct(formData))

    if (formData) {
      alert("Product Updated Successfully..! ")
    
    }
  }

  let name, value;
  const handleUserInputs = (e) => {

    name = e.target.name;
    value = e.target.value;

    if (name === "title") {
      if (value.length === 0) {
        setError({ ...error, title: " Title is required..." })
        setUser({ ...user, title: " " })
      } else {
        setError({ ...error, title: " " })
        setUser({ ...user, title: value })
      }
    }

    if (name === "description") {
      if (value.length === 0) {
        setError({ ...error, description: " Description is required..." })
        setUser({ ...user, description: " " })
      } else {
        setError({ ...error, description: " " })
        setUser({ ...user, description: value })
      }
    }

  };

  console.log(Edit, "Edit")
  let redirection2=()=>{
    let description = localStorage.getItem("description");
    let isInUpdateProductPage = window.location.pathname.toLowerCase() === `/updateproduct/${id
  }`;

    if (description !== null && description !== undefined && description !== "") {
      // window.location.pathname = getPathname;
      isInUpdateProductPage && navigate("/productlist");
    }

   }
   useEffect(() => {
    redirection2()
  }, [redirectToProductlist1])
  return (
    <>
       <div className='body'>
        <form className='form'>
          <h1>Create New Product Here...</h1>
          <div className="form-group">
            <div>
              <input
                className="form-control formInput inputBox"
                name="title"
                value={user.title}
                onChange={(e) => handleUserInputs(e)}
                placeholder='Enter the Title...'
              />
              <span style={{ color: "red", marginLeft: "24px" }}>
                {" "}
                {error?.title}{" "}
              </span>
            </div>

            <div>
              <textarea cols={5} rows={5}
                className="form-control formInput inputBox"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="description"
                value={user?.description}
                onChange={(e) => handleUserInputs(e)}
                placeholder='Write Your Description Here...'
              />
              <span style={{ color: "red", marginLeft: "24px" }}>
                {" "}
                {error?.description}{" "}
              </span>
            </div>

            <div>
              <input type="file"
                onChange={(e) => setImage(e.target.files[0])}
                name="img"
                accept="image/*"
                class="form-control" />

              {image !== "" &&
                image !== undefined &&
                image !== null ? (
                <img
                  height="40px"
                  src={URL.createObjectURL(image)}
                  alt=""
                  className="upload-img"
                />

              ) : (
                <>
                  {Edit?.image === "" ? (
                    <img
                      height="70px"
                      src={image}
                      alt=""
                      className="upload-img"
                    />
                  ) : (
                    <img
                      height="60px"
                      src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${Edit?.image}`}
                      alt=""
                      className="upload-img"
                    />
                  )}
                </>
              )}
              {image === "" && (
                <p>Drag or drop content here</p>
              )}
            </div>


          </div>

          <button type="submit" className="btn btn-primary mx-5 submitData" onClick={onSubmitData} >
            Update
          </button>


        </form >
      </div > 

      {/* from net styling */}
      {/* .container(onclick)
  .top
  .bottom
  .center
    h2 Please Sign In
    input(type="email" placeholder="email")
    input(type="password" placeholder="password")
    h2 &nbsp; */}
    </>
  )
}
